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
        // This log must show in your terminal (not browser)
        console.log("SERVER: Deleting Vault ID:", courseId);

        await db.delete(courses).where(eq(courses.id, courseId));

        // Crucial for the Global Hub grid to update
        revalidatePath('/');

        return { success: true };
    } catch (error) {
        console.error("SERVER ERROR:", error);
        return { success: false };
    }
}

/**
 * SYLLABUS & MILESTONE AUTOMATION
 */
export async function processSyllabusAction(courseId: string, publicUrl: string) {
    try {
        const backendBase = process.env.BACKEND_URL;
        if (!backendBase) throw new Error("BACKEND_URL missing in environment");

        const response = await fetch(`${backendBase}/process-syllabus`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                courseId,
                syllabusUrl: publicUrl // Using the direct public URL as before
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(JSON.stringify(errorData));
        }

        const aiResult = await response.json();

        // Update Supabase via Drizzle with the live milestones
        await db.update(courses)
            .set({
                milestones: aiResult.milestones,
                currentGrade: 0
            })
            .where(eq(courses.id, courseId));

        // Clear Cache to reflect changes
        revalidatePath(`/course/${courseId}`);
        revalidatePath('/');

        return { success: true };
    } catch (error) {
        console.error("Syllabus Processing Error:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Neural Link Failure"
        };
    }
}

/**
 * Reset Sector Action
 */
export async function deleteSyllabusAction(courseId: string) {
    try {
        await db.update(courses)
            .set({
                milestones: null,
                currentGrade: null
            })
            .where(eq(courses.id, courseId));

        revalidatePath(`/course/${courseId}`);
        return { success: true };
    } catch (error) {
        return { success: false, error: "Failed to reset sector" };
    }
}
export async function createSubmissionAction(courseId: string, pdfUrl: string) {
    try {
        // 1. Get current course context for the AI
        const course = await db.query.courses.findFirst({
            where: eq(courses.id, courseId)
        });

        // 2. Fetch Analysis (Returns Dummy Data if DEV_MODE = True in Python)
        const response = await fetch('http://127.0.0.1:8000/analyze-submission', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                submissionUrl: pdfUrl,
                existingMilestones: course?.milestones || []
            }),
        });

        if (!response.ok) throw new Error("Analysis fetch failed");
        const auditResults = await response.json();

        // 3. Insert submission and explicitly return the ID
        // Drizzle returns an array, so we destructure the first item [newRecord]
        const [newRecord] = await db.insert(submissions).values({
            courseId: courseId,
            name: `Audit: ${new Date().toLocaleDateString()}`,
            analysisReport: auditResults.analysis_report,
        }).returning({ id: submissions.id });

        if (!newRecord?.id) throw new Error("Failed to retrieve new Submission ID");

        // 4. Update Course stats (Grade & History)
        await db.update(courses)
            .set({
                currentGrade: auditResults.updated_current_grade,
                milestones: auditResults.full_history
            })
            .where(eq(courses.id, courseId));

        revalidatePath(`/course/${courseId}`);

        // 5. Return the ID object to satisfy frontend checks
        return { id: newRecord.id };
    } catch (error) {
        console.error("Submission action failed:", error);
        return { error: "Database or API sync error" };
    }
}

export async function deleteSubmissionAction(submissionId: string, courseId: string) {
    await db.delete(submissions).where(eq(submissions.id, submissionId));
    revalidatePath(`/course/${courseId}`);
}