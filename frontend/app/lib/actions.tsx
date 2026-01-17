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
                courseId: courseId,   //
                syllabusUrl: publicUrl //
            }),
        });

        if (!response.ok) throw new Error("Syllabus Audit Failed");
        const aiResult = await response.json();

        // FIX: Only update milestones, explicitly reset grade to 0
        await db.update(courses)
            .set({
                milestones: aiResult.milestones, //
                currentGrade: 0, // Prevents accidental 82% during syllabus phase
            })
            .where(eq(courses.id, courseId));

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

        // 1. Fetch current context for the weighted grade calculation
        const course = await db.query.courses.findFirst({
            where: eq(courses.id, courseId)
        });

        // 2. Trigger Midterm Analysis
        const response = await fetch(`${backendBase}/analyze-submission`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                submissionUrl: pdfUrl, //
                existingMilestones: course?.milestones || [] //
            }),
        });

        if (!response.ok) throw new Error("Neural Analysis fetch failed");
        const auditResults = await response.json();

        // 3. Update the Course (This sets the 82% Grade)
        // Maps Python 'updated_current_grade' to DB 'currentGrade'
        await db.update(courses)
            .set({
                currentGrade: Math.round(auditResults.updated_current_grade || 0), // Schema is integer
                milestones: auditResults.full_history, //
            })
            .where(eq(courses.id, courseId));

        // 4. Create the Submission Record (Stores KCL/Diode tips)
        // Maps Python 'analysis_report' to DB 'analysisReport'
        const [newRecord] = await db.insert(submissions).values({
            courseId: courseId,
            name: `Audit: ${new Date().toLocaleDateString()}`,
            analysisReport: auditResults.analysis_report,
        }).returning({ id: submissions.id });

        revalidatePath(`/course/${courseId}`);
        revalidatePath('/');

        return { id: newRecord.id, success: true };
    } catch (error) {
        console.error("Submission Action Failure:", error);
        return { success: false, error: "Database or API sync error" };
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