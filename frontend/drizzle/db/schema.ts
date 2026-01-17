import { pgTable, uuid, text, timestamp, jsonb } from 'drizzle-orm/pg-core';

export const courses = pgTable('courses', {
    id: uuid('id').defaultRandom().primaryKey(),
    name: text('name').notNull(),
    grade: text('grade').default('N/A'),
    // This matches your Syllabus JSON: { units: [{ unit_title, keywords }] }
    syllabusData: jsonb('syllabus_data'),
    userId: uuid('user_id'), // Link this to Supabase Auth later
    createdAt: timestamp('created_at').defaultNow(),
});

export const submissions = pgTable('submissions', {
    id: uuid('id').defaultRandom().primaryKey(),
    courseId: uuid('course_id').references(() => courses.id, { onDelete: 'cascade' }),
    name: text('name').notNull(),
    // This matches your Gemini report: [{ question, error, correction, tip }]
    analysisReport: jsonb('analysis_report'),
    createdAt: timestamp('created_at').defaultNow(),
});

