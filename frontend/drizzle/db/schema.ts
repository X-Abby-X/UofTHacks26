// frontend/drizzle/db/schema.ts
import { pgTable, uuid, text, integer, timestamp, jsonb } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    description: text("description"),
    // Stores the AI-calculated overall average
    currentGrade: integer("current_grade").default(0),
    // Stores the syllabus weights (e.g., [{"name": "Midterm", "weight": 20, "score": 85}])
    milestones: jsonb("milestones").default([]),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const submissions = pgTable("submissions", {
    id: uuid("id").defaultRandom().primaryKey(),
    courseId: uuid("course_id").references(() => courses.id, { onDelete: 'cascade' }),
    name: text("name").notNull(),
    // Stores the detailed error analysis
    analysisReport: jsonb("analysis_report").default([]),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});
