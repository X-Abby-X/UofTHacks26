'use server'

import { db } from '../../drizzle/index';
import { courses } from '../../drizzle/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function deleteCourse(id: string) {
    await db.delete(courses).where(eq(courses.id, id));

    // This tells Next.js to refresh the dashboard data immediately
    revalidatePath('/dashboard');
}

export async function createCourse(formData: FormData) {
    const name = formData.get('courseName') as string;

    if (!name || name.trim() === '') return;

    await db.insert(courses).values({
        name: name,
        grade: 'N/A',
        syllabusData: { units: [] }, // Default empty structure for Gemini later
    });

    // This tells Next.js to clear the cache and fetch fresh data for the dashboard
    revalidatePath('/dashboard');
}