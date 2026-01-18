'use server'

import { db } from '../../drizzle/index';
import { courses, submissions } from '../../drizzle/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

/**
 * COURSE MANAGEMENT
 */
export async function createCourse(formData: FormData) {
    const name = formData.get('courseName') as string;
    await db.insert(courses).values({
        name: name,
        description: "Course initialized for audit.",
        currentGrade: 0,
        milestones: [],
    });
    revalidatePath('/');
}

export async function deleteCourse(courseId: string) {
    try {
        await db.delete(courses).where(eq(courses.id, courseId));
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        return { success: false };
    }
}

/**
 * SYLLABUS AUTOMATION (The Roadmap)
 * Aligned with SyllabusRequest in api.py
 */
export async function processSyllabusAction(courseId: string, publicUrl: string) {
    try {
        const backendBase = process.env.BACKEND_URL || "http://127.0.0.1:8000";

        const response = await fetch(`${backendBase}/process-syllabus`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                courseId: courseId,   
                syllabusUrl: publicUrl 
            }),
        });

        if (!response.ok) throw new Error("Syllabus Audit Failed");
        const aiResult = await response.json();

        // FIX: Only update milestones, explicitly reset grade to 0
        await db.update(courses)
            .set({
                milestones: aiResult.milestones, 
                currentGrade: 0, 
            })
            .where(eq(courses.id, courseId));

        // FOR VAULT: Log the Syllabus in the submissions table
        await db.insert(submissions).values({
            courseId: courseId,
            name: "Official Course Syllabus",
            analysisReport: [{ type: "syllabus", url: publicUrl }]
        });

        revalidatePath(`/course/${courseId}`);
        return { success: true };
    } catch (error) {
        console.error("Syllabus Error:", error);
        return { success: false, error: "Sync Failed" };
    }
}

/**
 * SUBMISSION AUTOMATION (The Performance)
 * Aligned with AnalysisRequest in api.py
 */
export async function createSubmissionAction(courseId: string, pdfUrl: string) {
    try {
        const backendBase = process.env.BACKEND_URL || "http://127.0.0.1:8000";

        // 1. Fetch current context using the UUID
        const course = await db.query.courses.findFirst({
            where: eq(courses.id, courseId)
        });

        if (!course) throw new Error("Course not found");

        // 2. Trigger Midterm Analysis
        const response = await fetch(`${backendBase}/analyze-submission`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                // We send the NAME (e.g. "MAT291") so Python can use 'if/else' 
                // but we keep the UUID (courseId) available if needed
                courseId: course.name, 
                submissionUrl: pdfUrl,
                existingMilestones: course.milestones || []
            }),
        });

        if (!response.ok) throw new Error("Neural Analysis fetch failed");
        const auditResults = await response.json();

        // 3. Update the Course using the original UUID
        await db.update(courses)
            .set({
                currentGrade: Math.round(auditResults.updated_current_grade || 0),
                milestones: auditResults.full_history,
            })
            .where(eq(courses.id, courseId)); // Using UUID here

        // 4. Create the Submission Record using the original UUID
        await db.insert(submissions).values({
            courseId: courseId, // Using UUID here
            name: `Audit: ${course.name} - ${new Date().toLocaleDateString()}`,
            analysisReport: auditResults.analysis_report,
        });

        revalidatePath(`/course/${courseId}`);
        return { success: true };
    } catch (error) {
        console.error("Submission Action Failure:", error);
        return { success: false, error: "Sync error" };
    }
}

/**
 * DATA RESET & MAINTENANCE
 */
export async function deleteSyllabusAction(courseId: string) {
    try {
        await db.update(courses)
            .set({
                milestones: null,
                currentGrade: 0
            })
            .where(eq(courses.id, courseId));

        revalidatePath(`/course/${courseId}`);
        return { success: true };
    } catch (error) {
        return { success: false, error: "Failed to reset sector" };
    }
}

export async function deleteSubmissionAction(submissionId: string, courseId: string) {
    await db.delete(submissions).where(eq(submissions.id, submissionId));
    revalidatePath(`/course/${courseId}`);
}

export async function purgeCourseTelemetry(courseId: string) {
    await db.update(courses)
        .set({
            milestones: null,
            currentGrade: 0
        })
        .where(eq(courses.id, courseId));

    revalidatePath(`/course/${courseId}`);
}