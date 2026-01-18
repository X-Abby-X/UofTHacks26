module.exports = [
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/perf_hooks [external] (perf_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("perf_hooks", () => require("perf_hooks"));

module.exports = mod;
}),
"[project]/drizzle/db/schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "courses",
    ()=>courses,
    "submissions",
    ()=>submissions
]);
// frontend/drizzle/db/schema.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/table.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/uuid.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/text.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/integer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/jsonb.js [app-rsc] (ecmascript)");
;
const courses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])("courses", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uuid"])("id").defaultRandom().primaryKey(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("name").notNull(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("description"),
    // Stores the AI-calculated overall average
    currentGrade: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])("current_grade").default(0),
    // Stores the syllabus weights (e.g., [{"name": "Midterm", "weight": 20, "score": 85}])
    milestones: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsonb"])("milestones").default([]),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow().notNull()
});
const submissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])("submissions", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uuid"])("id").defaultRandom().primaryKey(),
    courseId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uuid"])("course_id").references(()=>courses.id, {
        onDelete: 'cascade'
    }),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("name").notNull(),
    // Stores the detailed error analysis
    analysisReport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsonb"])("analysis_report").default([]),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow().notNull()
});
}),
"[project]/drizzle/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
// frontend/lib/db/index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$postgres$2d$js$2f$driver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/postgres-js/driver.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postgres$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/postgres/src/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/drizzle/db/schema.ts [app-rsc] (ecmascript)"); // Import everything from your schema file
;
;
;
const connectionString = process.env.DATABASE_URL;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postgres$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(connectionString);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$postgres$2d$js$2f$driver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["drizzle"])(client, {
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
});
}),
"[project]/app/ui/GradeGauge.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GradeGauge",
    ()=>GradeGauge
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const GradeGauge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call GradeGauge() from the server but GradeGauge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/ui/GradeGauge.tsx <module evaluation>", "GradeGauge");
}),
"[project]/app/ui/GradeGauge.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GradeGauge",
    ()=>GradeGauge
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const GradeGauge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call GradeGauge() from the server but GradeGauge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/ui/GradeGauge.tsx", "GradeGauge");
}),
"[project]/app/ui/GradeGauge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$GradeGauge$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/ui/GradeGauge.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$GradeGauge$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/ui/GradeGauge.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$GradeGauge$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/ui/ProphetSidebar.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProphetSidebar",
    ()=>ProphetSidebar
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProphetSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProphetSidebar() from the server but ProphetSidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/ui/ProphetSidebar.tsx <module evaluation>", "ProphetSidebar");
}),
"[project]/app/ui/ProphetSidebar.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProphetSidebar",
    ()=>ProphetSidebar
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProphetSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProphetSidebar() from the server but ProphetSidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/ui/ProphetSidebar.tsx", "ProphetSidebar");
}),
"[project]/app/ui/ProphetSidebar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$ProphetSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/ui/ProphetSidebar.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$ProphetSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/ui/ProphetSidebar.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$ProphetSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/ui/AICard.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AICard",
    ()=>AICard
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AICard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AICard() from the server but AICard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/ui/AICard.tsx <module evaluation>", "AICard");
}),
"[project]/app/ui/AICard.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AICard",
    ()=>AICard
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AICard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AICard() from the server but AICard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/ui/AICard.tsx", "AICard");
}),
"[project]/app/ui/AICard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$AICard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/ui/AICard.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$AICard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/ui/AICard.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$AICard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/ui/CreateSubmissionBtn.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/ui/CreateSubmissionBtn.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/ui/CreateSubmissionBtn.tsx <module evaluation>", "default");
}),
"[project]/app/ui/CreateSubmissionBtn.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/ui/CreateSubmissionBtn.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/ui/CreateSubmissionBtn.tsx", "default");
}),
"[project]/app/ui/CreateSubmissionBtn.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$CreateSubmissionBtn$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/ui/CreateSubmissionBtn.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$CreateSubmissionBtn$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/ui/CreateSubmissionBtn.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$CreateSubmissionBtn$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/ui/DeleteSyllabusBtn.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/ui/DeleteSyllabusBtn.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/ui/DeleteSyllabusBtn.tsx <module evaluation>", "default");
}),
"[project]/app/ui/DeleteSyllabusBtn.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/ui/DeleteSyllabusBtn.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/ui/DeleteSyllabusBtn.tsx", "default");
}),
"[project]/app/ui/DeleteSyllabusBtn.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$DeleteSyllabusBtn$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/ui/DeleteSyllabusBtn.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$DeleteSyllabusBtn$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/ui/DeleteSyllabusBtn.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$DeleteSyllabusBtn$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/ui/FileUploader.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/ui/FileUploader.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/ui/FileUploader.tsx <module evaluation>", "default");
}),
"[project]/app/ui/FileUploader.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/ui/FileUploader.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/ui/FileUploader.tsx", "default");
}),
"[project]/app/ui/FileUploader.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$FileUploader$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/ui/FileUploader.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$FileUploader$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/ui/FileUploader.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$FileUploader$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/lib/actions.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4049dc195d11c3ec7e0b2d07dec0c17012610457bf":"deleteCourse","40678f240068f6f6c363a1aa35826d6066f1e84e30":"deleteSyllabusAction","406991cb34bb3100160a679d0fd69c0886f1f20692":"purgeCourseTelemetry","408d9bdea2033f571d595acc2cccd0e3de705e47b4":"createCourse","606ee2ea97d933cd7dab137a27865382582e966ef6":"createSubmissionAction","609e743dda48a3db35be26af84eb99661eb8c90619":"deleteSubmissionAction","60a1314cb003c5d47c5dc2ca9538f3b5391d7b3678":"processSyllabusAction"},"",""] */ __turbopack_context__.s([
    "createCourse",
    ()=>createCourse,
    "createSubmissionAction",
    ()=>createSubmissionAction,
    "deleteCourse",
    ()=>deleteCourse,
    "deleteSubmissionAction",
    ()=>deleteSubmissionAction,
    "deleteSyllabusAction",
    ()=>deleteSyllabusAction,
    "processSyllabusAction",
    ()=>processSyllabusAction,
    "purgeCourseTelemetry",
    ()=>purgeCourseTelemetry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/drizzle/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/drizzle/db/schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function createCourse(formData) {
    const name = formData.get('courseName');
    await __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["courses"]).values({
        name: name,
        description: "Course initialized for audit.",
        currentGrade: 0,
        milestones: []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function deleteCourse(courseId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["courses"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["courses"].id, courseId));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false
        };
    }
}
async function processSyllabusAction(courseId, publicUrl) {
    try {
        const backendBase = process.env.BACKEND_URL || "http://127.0.0.1:8000";
        const response = await fetch(`${backendBase}/process-syllabus`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                courseId: courseId,
                syllabusUrl: publicUrl //
            })
        });
        if (!response.ok) throw new Error("Syllabus Audit Failed");
        const aiResult = await response.json();
        // FIX: Only update milestones, explicitly reset grade to 0
        await __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].update(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["courses"]).set({
            milestones: aiResult.milestones,
            currentGrade: 0
        }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["courses"].id, courseId));
        // FOR VAULT
        // 2. NEW: Log the Syllabus in the submissions table so it shows in the Vault
        await __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submissions"]).values({
            courseId: courseId,
            name: "Official Course Syllabus",
            // We store the URL in a JSON field if you want easy access later
            analysisReport: [
                {
                    type: "syllabus",
                    url: publicUrl
                }
            ]
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/course/${courseId}`);
        return {
            success: true
        };
    } catch (error) {
        console.error("Syllabus Error:", error);
        return {
            success: false,
            error: "Sync Failed"
        };
    }
}
async function createSubmissionAction(courseId, pdfUrl) {
    try {
        const backendBase = process.env.BACKEND_URL || "http://127.0.0.1:8000";
        // 1. Fetch current context for the weighted grade calculation
        const course = await __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].query.courses.findFirst({
            where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["courses"].id, courseId)
        });
        // 2. Trigger Midterm Analysis
        const response = await fetch(`${backendBase}/analyze-submission`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                submissionUrl: pdfUrl,
                existingMilestones: course?.milestones || [] //
            })
        });
        if (!response.ok) throw new Error("Neural Analysis fetch failed");
        const auditResults = await response.json();
        // 3. Update the Course (This sets the 82% Grade)
        // Maps Python 'updated_current_grade' to DB 'currentGrade'
        await __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].update(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["courses"]).set({
            currentGrade: Math.round(auditResults.updated_current_grade || 0),
            milestones: auditResults.full_history
        }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["courses"].id, courseId));
        // 4. Create the Submission Record (Stores KCL/Diode tips)
        // Maps Python 'analysis_report' to DB 'analysisReport'
        const [newRecord] = await __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submissions"]).values({
            courseId: courseId,
            name: `Audit: ${new Date().toLocaleDateString()}`,
            analysisReport: auditResults.analysis_report
        }).returning({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submissions"].id
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/course/${courseId}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
        return {
            id: newRecord.id,
            success: true
        };
    } catch (error) {
        console.error("Submission Action Failure:", error);
        return {
            success: false,
            error: "Database or API sync error"
        };
    }
}
async function deleteSyllabusAction(courseId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].update(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["courses"]).set({
            milestones: null,
            currentGrade: 0
        }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["courses"].id, courseId));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/course/${courseId}`);
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: "Failed to reset sector"
        };
    }
}
async function deleteSubmissionAction(submissionId, courseId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submissions"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submissions"].id, submissionId));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/course/${courseId}`);
}
async function purgeCourseTelemetry(courseId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].update(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["courses"]).set({
        milestones: null,
        currentGrade: 0
    }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["courses"].id, courseId));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/course/${courseId}`);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createCourse,
    deleteCourse,
    processSyllabusAction,
    createSubmissionAction,
    deleteSyllabusAction,
    deleteSubmissionAction,
    purgeCourseTelemetry
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCourse, "408d9bdea2033f571d595acc2cccd0e3de705e47b4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCourse, "4049dc195d11c3ec7e0b2d07dec0c17012610457bf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(processSyllabusAction, "60a1314cb003c5d47c5dc2ca9538f3b5391d7b3678", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createSubmissionAction, "606ee2ea97d933cd7dab137a27865382582e966ef6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteSyllabusAction, "40678f240068f6f6c363a1aa35826d6066f1e84e30", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteSubmissionAction, "609e743dda48a3db35be26af84eb99661eb8c90619", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(purgeCourseTelemetry, "406991cb34bb3100160a679d0fd69c0886f1f20692", null);
}),
"[project]/app/course/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$$RSC_SERVER_ACTION_0",
    ()=>$$RSC_SERVER_ACTION_0,
    "default",
    ()=>CourseDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
// // import { db } from '@/drizzle/index';
// // import { courses, submissions } from '@/drizzle/db/schema';
// // import { eq, desc } from 'drizzle-orm';
// // import { notFound } from 'next/navigation';
// // import { GradeGauge } from '@/app/ui/GradeGauge';
// // import { ProphetSidebar } from '@/app/ui/ProphetSidebar';
// // import { AICard } from '@/app/ui/AICard';
// // import CreateSubmissionBtn from '@/app/ui/CreateSubmissionBtn';
// // import DeleteSyllabusBtn from '@/app/ui/DeleteSyllabusBtn';
// // import FileUploader from '@/app/ui/FileUploader';
// // import { processSyllabusAction } from '@/app/lib/actions';
// // export default async function CourseDetailPage({ params }: { params: { id: string } }) {
// //     const { id } = await params;
// //     // 1. Fetch Course and latest Submissions
// //     const course = await db.query.courses.findFirst({
// //         where: eq(courses.id, id),
// //     });
// //     const allSubmissions = await db.query.submissions.findMany({
// //         where: eq(submissions.courseId, id),
// //         orderBy: [desc(submissions.createdAt)],
// //     });
// //     if (!course) notFound();
// //     const latestSubmission = allSubmissions[0];
// //     const milestones = (course.milestones as any[]) || [];
// //     const currentGrade = course.currentGrade || 0;
// //     return (
// //         <div className="flex h-screen bg-[#020617] text-white overflow-hidden">
// //             {/* LEFT: Neural Analysis Feed */}
// //             <main className="flex-1 overflow-y-auto p-12 custom-scrollbar">
// //                 <header className="flex justify-between items-start mb-12">
// //                     <div>
// //                         <h1 className="text-5xl font-black tracking-tighter uppercase italic text-white mb-2">
// //                             {course.name}
// //                         </h1>
// //                         <p className="text-white/40 text-xs font-mono tracking-widest uppercase">
// //                             Sector: ECE231 // Node: {id.slice(0, 8)}
// //                         </p>
// //                     </div>
// //                     <div className="flex gap-4">
// //                         <DeleteSyllabusBtn courseId={id} />
// //                         <CreateSubmissionBtn courseId={id} userId="system-user" />
// //                     </div>
// //                 </header>
// //                 {/* 2. SYLLABUS INITIALIZATION: Only show if no milestones exist */}
// //                 {milestones.length === 0 ? (
// //                     <div className="flex flex-col items-center justify-center h-[50vh] border-2 border-dashed border-white/10 rounded-[3rem] bg-white/[0.02]">
// //                         <h3 className="text-xl font-black uppercase tracking-widest mb-6">Initialize Neural Roadmap</h3>
// //                         <FileUploader
// //                             bucket="uofthacks-2026"
// //                             userID="system-user"
// //                             courseID={id}
// //                             folder="syllabus_files"
// //                             onSuccess={async (path) => {
// //                                 'use server';
// //                                 await processSyllabusAction(id, path);
// //                             }}
// //                         />
// //                     </div>
// //                 ) : (
// //                     <div className="space-y-8">
// //                         <GradeGauge currentGrade={currentGrade} />
// //                         <div className="space-y-6">
// //                             <h2 className="text-xs font-black uppercase tracking-[0.4em] text-white/20">Neural Guidance Feed</h2>
// //                             {/* 3. Display KCL/Diode AI Cards from Python Report */}
// //                             {latestSubmission?.analysisReport?.map((item: any, idx: number) => (
// //                                 <AICard
// //                                     key={idx}
// //                                     questionNumber={item.question_number}
// //                                     detectedMistake={item.detected_error}
// //                                     aiTip={item.study_tip}
// //                                     unitId={item.unit_id}
// //                                     delay={idx * 0.1}
// //                                 />
// //                             ))}
// //                         </div>
// //                     </div>
// //                 )}
// //             </main>
// //             {/* RIGHT: Prophet Sidebar (Resonance & Chronology) */}
// //             <aside className="w-[400px]">
// //                 <ProphetSidebar
// //                     milestones={milestones}
// //                     currentGrade={currentGrade}
// //                 />
// //             </aside>
// //         </div>
// //     );
// // }
// // WORKING VERSION 2
// import { db } from '@/drizzle/index';
// import { courses, submissions } from '@/drizzle/db/schema';
// import { eq, desc } from 'drizzle-orm';
// import { notFound } from 'next/navigation';
// import Link from 'next/link';
// import * as motion from "framer-motion/client"; // Use client-side motion for Server Components
// import { Cpu, ChevronRight } from 'lucide-react';
// import { GradeGauge } from '@/app/ui/GradeGauge';
// import { ProphetSidebar } from '@/app/ui/ProphetSidebar';
// import { AICard } from '@/app/ui/AICard';
// import CreateSubmissionBtn from '@/app/ui/CreateSubmissionBtn';
// import DeleteSyllabusBtn from '@/app/ui/DeleteSyllabusBtn';
// import FileUploader from '@/app/ui/FileUploader';
// import { processSyllabusAction } from '@/app/lib/actions';
// export default async function CourseDetailPage({ params }: { params: { id: string } }) {
//     const { id } = await params;
//     // 1. Fetch Course and latest Submissions
//     const course = await db.query.courses.findFirst({
//         where: eq(courses.id, id),
//     });
//     const allSubmissions = await db.query.submissions.findMany({
//         where: eq(submissions.courseId, id),
//         orderBy: [desc(submissions.createdAt)],
//     });
//     if (!course) notFound();
//     const latestSubmission = allSubmissions[0];
//     const milestones = (course.milestones as any[]) || [];
//     const currentGrade = course.currentGrade || 0;
//     // Logic: Submission is posted if at least one milestone has a score
//     const hasSubmission = milestones.some(m => m.score !== undefined && m.score !== null);
//     return (
//         <div className="flex h-screen bg-[#020617] text-white overflow-hidden">
//             {/* LEFT: Neural Analysis Feed */}
//             <main className="flex-1 overflow-y-auto p-12 custom-scrollbar">
//                 <header className="flex justify-between items-start mb-12">
//                     <div>
//                         <h1 className="text-5xl font-black tracking-tighter uppercase italic text-white mb-2">
//                             {course.name}
//                         </h1>
//                         <p className="text-white/40 text-xs font-mono tracking-widest uppercase">
//                             Sector: ECE231 // Node: {id.slice(0, 8)}
//                         </p>
//                     </div>
//                     <div className="flex gap-4">
//                         <DeleteSyllabusBtn courseId={id} />
//                         <CreateSubmissionBtn courseId={id} userId="system-user" />
//                     </div>
//                 </header>
//                 {/* 2. SYLLABUS INITIALIZATION */}
//                 {milestones.length === 0 ? (
//                     <div className="flex flex-col items-center justify-center h-[50vh] border-2 border-dashed border-white/10 rounded-[3rem] bg-white/[0.02]">
//                         <h3 className="text-xl font-black uppercase tracking-widest mb-6">Initialize Neural Roadmap</h3>
//                         <FileUploader
//                             bucket="uofthacks-2026"
//                             userID="system-user"
//                             courseID={id}
//                             folder="syllabus_files"
//                             onSuccess={async (path) => {
//                                 'use server';
//                                 await processSyllabusAction(id, "system-user", path);
//                             }}
//                         />
//                     </div>
//                 ) : (
//                     <div className="space-y-8">
//                         <GradeGauge currentGrade={currentGrade} />
//                         {/* 3. SYNTHETIC EXAM BUTTON (Condition: Submission Detected)
//                         {hasSubmission && (
//                             <Link href="/genQuestions">
//                                 <motion.div 
//                                     whileHover={{ scale: 1.02, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
//                                     whileTap={{ scale: 0.98 }}
//                                     className="group flex items-center justify-between p-4 rounded-2xl transition-all border bg-white/5 border-white/10 hover:border-[#8B5CF6]/40"
//                                 >
//                                     <div className="flex items-center gap-4">
//                                         <div className="p-2.5 rounded-xl transition-colors bg-white/5 text-white/40 group-hover:text-[#8B5CF6]">
//                                             <Cpu className="w-4 h-4" />
//                                         </div>
//                                         <div>
//                                             <span className="block text-[11px] font-black uppercase tracking-widest text-white">Synthetic Exam</span>
//                                             <span className="block text-[9px] text-emerald-400 font-mono uppercase tracking-tighter animate-pulse">Neural_Link_Active</span>
//                                         </div>
//                                     </div>
//                                     <ChevronRight className="w-4 h-4 transition-all text-white/10 group-hover:text-[#8B5CF6] group-hover:translate-x-1" />
//                                 </motion.div>
//                             </Link>
//                         )} */}
//                         {/* 3. SYNTHETIC EXAM BUTTON: Refined N3XU$ Aesthetic */}
//                         {hasSubmission && (
//                             <Link href="/genQuestions">
//                                 <motion.div 
//                                     whileHover={{ scale: 1.01, borderColor: 'rgba(139, 92, 246, 0.5)' }}
//                                     whileTap={{ scale: 0.99 }}
//                                     className="group relative flex items-center justify-between p-6 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.04] shadow-2xl"
//                                 >
//                                     {/* Inner Glow Effect */}
//                                     <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
//                                     <div className="flex items-center gap-6 relative z-10">
//                                         {/* Icon Container with Dual-Ring Border */}
//                                         <div className="relative">
//                                             <div className="absolute inset-0 bg-[#8B5CF6]/20 blur-xl rounded-full group-hover:bg-[#8B5CF6]/40 transition-colors" />
//                                             <div className="relative p-4 rounded-2xl bg-[#0a0f1d] border border-white/10 group-hover:border-[#8B5CF6]/50 transition-colors">
//                                                 <Cpu className="w-6 h-6 text-[#8B5CF6]" />
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div className="flex items-center gap-2 mb-1.5">
//                                                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
//                                                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500/80 font-mono">
//                                                     Neural Link: Active
//                                                 </span>
//                                             </div>
//                                             <h3 className="text-xl font-black uppercase tracking-tighter text-white italic group-hover:text-[#8B5CF6] transition-colors">
//                                                 Synthetic Practice Sector
//                                             </h3>
//                                             <p className="text-[10px] text-white/30 font-mono uppercase tracking-widest mt-0.5">
//                                                 Generate schematics based on detected errors
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <div className="flex flex-col items-end gap-1 relative z-10">
//                                         <div className="flex items-center gap-2 text-white/20 group-hover:text-white transition-colors">
//                                             <span className="text-[9px] font-black uppercase tracking-[0.2em]">Initialize</span>
//                                             <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                                         </div>
//                                         <div className="w-24 h-[1px] bg-white/5 overflow-hidden">
//                                             <motion.div 
//                                                 className="h-full bg-[#8B5CF6]"
//                                                 animate={{ x: [-100, 100] }}
//                                                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                                             />
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             </Link>
//                         )}
//                         <div className="space-y-6">
//                             <br />
//                             <h2 className="text-xs font-black uppercase tracking-[0.4em] text-white/20">Neural Guidance Feed</h2>
//                             {/* 4. Display AI Cards */}
//                             {latestSubmission?.analysisReport?.map((item: any, idx: number) => (
//                                 <AICard
//                                     key={idx}
//                                     questionNumber={item.question_number}
//                                     detectedMistake={item.detected_error}
//                                     aiTip={item.study_tip}
//                                     unitId={item.unit_id}
//                                     delay={idx * 0.1}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 )}
//             </main>
//             {/* RIGHT: Prophet Sidebar */}
//             <aside className="w-[400px]">
//                 <ProphetSidebar
//                     milestones={milestones}
//                     currentGrade={currentGrade}
//                 />
//             </aside>
//         </div>
//     );
// }
/* __next_internal_action_entry_do_not_use__ [{"600ec9cef3bdac35cdc64ea5b4ba23e8097a0f75cc":"$$RSC_SERVER_ACTION_0"},"",""] */ var __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/drizzle/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/drizzle/db/schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/select.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs [app-rsc] (ecmascript) <export MotionDiv as div>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-rsc] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-rsc] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$GradeGauge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ui/GradeGauge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$ProphetSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ui/ProphetSidebar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$AICard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ui/AICard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$CreateSubmissionBtn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ui/CreateSubmissionBtn.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$DeleteSyllabusBtn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ui/DeleteSyllabusBtn.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$FileUploader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ui/FileUploader.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/actions.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const $$RSC_SERVER_ACTION_0 = async function onSuccess($$ACTION_CLOSURE_BOUND, path) {
    var [$$ACTION_ARG_0] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptActionBoundArgs"])("600ec9cef3bdac35cdc64ea5b4ba23e8097a0f75cc", $$ACTION_CLOSURE_BOUND);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processSyllabusAction"])($$ACTION_ARG_0, "system-user", path);
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "600ec9cef3bdac35cdc64ea5b4ba23e8097a0f75cc", null);
async function CourseDetailPage({ params }) {
    const { id } = await params;
    // 1. Fetch Course and latest Submissions
    const course = await __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].query.courses.findFirst({
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["courses"].id, id)
    });
    const allSubmissions = await __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].query.submissions.findMany({
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submissions"].courseId, id),
        orderBy: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submissions"].createdAt)
        ]
    });
    if (!course) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const latestSubmission = allSubmissions[0];
    const milestones = course.milestones || [];
    const currentGrade = course.currentGrade || 0;
    const hasSubmission = milestones.some((m)=>m.score !== undefined && m.score !== null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-[#020617] text-white overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 overflow-y-auto p-12 custom-scrollbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "flex justify-between items-start mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-5xl font-black tracking-tighter uppercase italic text-white mb-2 leading-none",
                                        children: course.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/course/[id]/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-2 py-0.5 rounded bg-[#8B5CF6]/20 border border-[#8B5CF6]/30",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#8B5CF6] text-[10px] font-black uppercase tracking-widest font-mono",
                                                    children: [
                                                        "ID: ",
                                                        id
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/course/[id]/page.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/course/[id]/page.tsx",
                                                lineNumber: 326,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/20 text-[10px] font-mono tracking-[0.3em] uppercase",
                                                children: "Neural Node Active"
                                            }, void 0, false, {
                                                fileName: "[project]/app/course/[id]/page.tsx",
                                                lineNumber: 331,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/course/[id]/page.tsx",
                                        lineNumber: 325,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/course/[id]/page.tsx",
                                lineNumber: 321,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$DeleteSyllabusBtn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        courseId: id
                                    }, void 0, false, {
                                        fileName: "[project]/app/course/[id]/page.tsx",
                                        lineNumber: 337,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$CreateSubmissionBtn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        courseId: id,
                                        userId: "system-user"
                                    }, void 0, false, {
                                        fileName: "[project]/app/course/[id]/page.tsx",
                                        lineNumber: 338,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/course/[id]/page.tsx",
                                lineNumber: 336,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/course/[id]/page.tsx",
                        lineNumber: 320,
                        columnNumber: 17
                    }, this),
                    milestones.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center h-[50vh] border-2 border-dashed border-white/10 rounded-[3rem] bg-white/[0.02]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-black uppercase tracking-widest mb-6",
                                children: "Initialize Neural Roadmap"
                            }, void 0, false, {
                                fileName: "[project]/app/course/[id]/page.tsx",
                                lineNumber: 345,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$FileUploader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                bucket: "uofthacks-2026",
                                userID: "system-user",
                                courseID: id,
                                folder: "syllabus_files",
                                onSuccess: $$RSC_SERVER_ACTION_0.bind(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encryptActionBoundArgs"])("600ec9cef3bdac35cdc64ea5b4ba23e8097a0f75cc", id))
                            }, void 0, false, {
                                fileName: "[project]/app/course/[id]/page.tsx",
                                lineNumber: 346,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/course/[id]/page.tsx",
                        lineNumber: 344,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$GradeGauge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GradeGauge"], {
                                currentGrade: currentGrade
                            }, void 0, false, {
                                fileName: "[project]/app/course/[id]/page.tsx",
                                lineNumber: 359,
                                columnNumber: 25
                            }, this),
                            hasSubmission && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/genQuestions",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                                    whileHover: {
                                        scale: 1.01,
                                        borderColor: 'rgba(139, 92, 246, 0.5)'
                                    },
                                    whileTap: {
                                        scale: 0.99
                                    },
                                    className: "group relative flex items-center justify-between p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.04] shadow-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/course/[id]/page.tsx",
                                            lineNumber: 369,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-6 relative z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-[#8B5CF6]/20 blur-xl rounded-full group-hover:bg-[#8B5CF6]/40 transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/course/[id]/page.tsx",
                                                            lineNumber: 373,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative p-4 rounded-2xl bg-[#0a0f1d] border border-white/10 group-hover:border-[#8B5CF6]/50 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                                                className: "w-6 h-6 text-[#8B5CF6]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/course/[id]/page.tsx",
                                                                lineNumber: 375,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/course/[id]/page.tsx",
                                                            lineNumber: 374,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/course/[id]/page.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mb-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/course/[id]/page.tsx",
                                                                    lineNumber: 381,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500/80 font-mono",
                                                                    children: "Neural Link: Active"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/course/[id]/page.tsx",
                                                                    lineNumber: 382,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/course/[id]/page.tsx",
                                                            lineNumber: 380,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-black uppercase tracking-tighter text-white italic group-hover:text-[#8B5CF6] transition-colors",
                                                            children: "Synthetic Practice Sector"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/course/[id]/page.tsx",
                                                            lineNumber: 386,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-white/30 font-mono uppercase tracking-widest mt-0.5",
                                                            children: "Generate schematics based on detected errors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/course/[id]/page.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/course/[id]/page.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/course/[id]/page.tsx",
                                            lineNumber: 371,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-end gap-1 relative z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-white/20 group-hover:text-white transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] font-black uppercase tracking-[0.2em]",
                                                            children: "Initialize"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/course/[id]/page.tsx",
                                                            lineNumber: 397,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/course/[id]/page.tsx",
                                                            lineNumber: 398,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/course/[id]/page.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-24 h-[1px] bg-white/5 overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                                                        className: "h-full bg-[#8B5CF6]",
                                                        animate: {
                                                            x: [
                                                                -100,
                                                                100
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 3,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/course/[id]/page.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/course/[id]/page.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/course/[id]/page.tsx",
                                            lineNumber: 395,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/course/[id]/page.tsx",
                                    lineNumber: 364,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/course/[id]/page.tsx",
                                lineNumber: 363,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xs font-black uppercase tracking-[0.4em] text-white/20",
                                        children: "Neural Guidance Feed"
                                    }, void 0, false, {
                                        fileName: "[project]/app/course/[id]/page.tsx",
                                        lineNumber: 413,
                                        columnNumber: 29
                                    }, this),
                                    latestSubmission?.analysisReport?.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$AICard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AICard"], {
                                            questionNumber: item.question_number,
                                            detectedMistake: item.detected_error,
                                            aiTip: item.study_tip,
                                            unitId: item.unit_id,
                                            delay: idx * 0.1
                                        }, idx, false, {
                                            fileName: "[project]/app/course/[id]/page.tsx",
                                            lineNumber: 415,
                                            columnNumber: 33
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/course/[id]/page.tsx",
                                lineNumber: 412,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/course/[id]/page.tsx",
                        lineNumber: 358,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/course/[id]/page.tsx",
                lineNumber: 317,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "w-[400px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$ProphetSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProphetSidebar"], {
                    milestones: milestones,
                    currentGrade: currentGrade
                }, void 0, false, {
                    fileName: "[project]/app/course/[id]/page.tsx",
                    lineNumber: 430,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/course/[id]/page.tsx",
                lineNumber: 429,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/course/[id]/page.tsx",
        lineNumber: 315,
        columnNumber: 9
    }, this);
}
}),
"[project]/.next-internal/server/app/course/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/course/[id]/page.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/lib/actions.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$course$2f5b$id$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/course/[id]/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/actions.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/course/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/course/[id]/page.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/lib/actions.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4049dc195d11c3ec7e0b2d07dec0c17012610457bf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCourse"],
    "40678f240068f6f6c363a1aa35826d6066f1e84e30",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteSyllabusAction"],
    "406991cb34bb3100160a679d0fd69c0886f1f20692",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["purgeCourseTelemetry"],
    "408d9bdea2033f571d595acc2cccd0e3de705e47b4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCourse"],
    "600ec9cef3bdac35cdc64ea5b4ba23e8097a0f75cc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$course$2f5b$id$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"],
    "606ee2ea97d933cd7dab137a27865382582e966ef6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSubmissionAction"],
    "609e743dda48a3db35be26af84eb99661eb8c90619",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteSubmissionAction"],
    "60a1314cb003c5d47c5dc2ca9538f3b5391d7b3678",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processSyllabusAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$course$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$course$2f5b$id$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$lib$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/course/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/app/course/[id]/page.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/lib/actions.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$course$2f5b$id$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/course/[id]/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/actions.tsx [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d059f69b._.js.map