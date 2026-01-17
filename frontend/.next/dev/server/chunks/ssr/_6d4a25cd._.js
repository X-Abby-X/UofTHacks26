module.exports = [
"[project]/drizzle/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
(()=>{
    const e = new Error("Cannot find module 'drizzle-orm/postgres-js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'postgres'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
const connectionString = process.env.DATABASE_URL;
// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, {
    prepare: false
});
const db = drizzle(client);
}),
"[project]/drizzle/db/schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "courses",
    ()=>courses,
    "submissions",
    ()=>submissions
]);
(()=>{
    const e = new Error("Cannot find module 'drizzle-orm/pg-core'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const courses = pgTable('courses', {
    id: uuid('id').defaultRandom().primaryKey(),
    name: text('name').notNull(),
    grade: text('grade').default('N/A'),
    // This matches your Syllabus JSON: { units: [{ unit_title, keywords }] }
    syllabusData: jsonb('syllabus_data'),
    userId: uuid('user_id'),
    createdAt: timestamp('created_at').defaultNow()
});
const submissions = pgTable('submissions', {
    id: uuid('id').defaultRandom().primaryKey(),
    courseId: uuid('course_id').references(()=>courses.id, {
        onDelete: 'cascade'
    }),
    name: text('name').notNull(),
    // This matches your Gemini report: [{ question, error, correction, tip }]
    analysisReport: jsonb('analysis_report'),
    createdAt: timestamp('created_at').defaultNow()
});
}),
"[project]/app/lib/actions.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40ba53dae440167d7b869f6a2f7113139e7d697456":"createCourse","40bc485c44de37698547712fd8d0965d8416f4b90c":"deleteCourse"},"",""] */ __turbopack_context__.s([
    "createCourse",
    ()=>createCourse,
    "deleteCourse",
    ()=>deleteCourse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/drizzle/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/drizzle/db/schema.ts [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'drizzle-orm'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function deleteCourse(id) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["courses"]).where(eq(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["courses"].id, id));
    // This tells Next.js to refresh the dashboard data immediately
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard');
}
async function createCourse(formData) {
    const name = formData.get('courseName');
    if (!name || name.trim() === '') return;
    await __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["courses"]).values({
        name: name,
        grade: 'N/A',
        syllabusData: {
            units: []
        }
    });
    // This tells Next.js to clear the cache and fetch fresh data for the dashboard
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard');
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    deleteCourse,
    createCourse
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCourse, "40bc485c44de37698547712fd8d0965d8416f4b90c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCourse, "40ba53dae440167d7b869f6a2f7113139e7d697456", null);
}),
"[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/lib/actions.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/actions.tsx [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/lib/actions.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40ba53dae440167d7b869f6a2f7113139e7d697456",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCourse"],
    "40bc485c44de37698547712fd8d0965d8416f4b90c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCourse"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$lib$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/app/lib/actions.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/actions.tsx [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_6d4a25cd._.js.map