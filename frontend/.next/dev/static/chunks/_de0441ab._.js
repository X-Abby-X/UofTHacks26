(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/ui/GradeGauge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GradeGauge",
    ()=>GradeGauge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// import { motion } from 'motion/react';
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
'use client';
;
;
;
const upcomingWeights = [
    {
        name: 'Midterm 2',
        weight: 25,
        color: '#8B5CF6'
    },
    {
        name: 'Final Exam',
        weight: 40,
        color: '#F59E0B'
    },
    {
        name: 'Project',
        weight: 15,
        color: '#10B981'
    }
];
function GradeGauge({ currentGrade }) {
    const data = [
        {
            name: 'Current',
            value: currentGrade
        },
        {
            name: 'Remaining',
            value: 100 - currentGrade
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center justify-center py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "500",
                        height: "500",
                        viewBox: "0 0 500 500",
                        className: "absolute",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                            cx: "250",
                            cy: "250",
                            r: "200",
                            fill: "none",
                            stroke: "#8B5CF6",
                            strokeWidth: "2",
                            strokeDasharray: "8 12",
                            opacity: "0.4",
                            initial: {
                                rotate: 0
                            },
                            animate: {
                                rotate: 360
                            },
                            transition: {
                                duration: 60,
                                repeat: Infinity,
                                ease: 'linear'
                            },
                            style: {
                                transformOrigin: '250px 250px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/ui/GradeGauge.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/ui/GradeGauge.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    upcomingWeights.map((weight, idx)=>{
                        const angle = idx * 360 / upcomingWeights.length;
                        const radian = angle * Math.PI / 180;
                        const x = 250 + 200 * Math.cos(radian - Math.PI / 2);
                        const y = 250 + 200 * Math.sin(radian - Math.PI / 2);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute",
                            style: {
                                left: `${x}px`,
                                top: `${y}px`,
                                transform: 'translate(-50%, -50%)'
                            },
                            initial: {
                                scale: 0
                            },
                            animate: {
                                scale: 1
                            },
                            transition: {
                                delay: idx * 0.2,
                                type: 'spring'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "relative group cursor-pointer",
                                whileHover: {
                                    scale: 1.2,
                                    rotate: 5
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 rounded-full",
                                        style: {
                                            backgroundColor: weight.color,
                                            boxShadow: `0 0 20px ${weight.color}`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/ui/GradeGauge.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap",
                                        style: {
                                            background: 'rgba(0, 32, 78, 0.95)',
                                            backdropFilter: 'blur(12px)',
                                            border: `1px solid ${weight.color}`,
                                            boxShadow: `0 0 10px ${weight.color}`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-3 py-2 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold",
                                                    style: {
                                                        color: weight.color
                                                    },
                                                    children: weight.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/ui/GradeGauge.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-white/70",
                                                    children: [
                                                        weight.weight,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/ui/GradeGauge.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/ui/GradeGauge.tsx",
                                            lineNumber: 89,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/ui/GradeGauge.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/ui/GradeGauge.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this)
                        }, weight.name, false, {
                            fileName: "[project]/app/ui/GradeGauge.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/app/ui/GradeGauge.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative z-10",
                initial: {
                    scale: 0,
                    rotate: -180
                },
                animate: {
                    scale: 1,
                    rotate: 0
                },
                transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative rounded-full p-8",
                    style: {
                        background: 'rgba(0, 32, 78, 0.6)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(139, 92, 246, 0.5)',
                        boxShadow: '0 0 40px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(139, 92, 246, 0.1)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                            width: 280,
                            height: 280,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                data: data,
                                cx: 140,
                                cy: 140,
                                startAngle: 90,
                                endAngle: 450,
                                innerRadius: 90,
                                outerRadius: 130,
                                dataKey: "value",
                                strokeWidth: 0,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                        fill: "#10B981"
                                    }, void 0, false, {
                                        fileName: "[project]/app/ui/GradeGauge.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                        fill: "rgba(255,255,255,0.1)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/ui/GradeGauge.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/ui/GradeGauge.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/ui/GradeGauge.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex flex-col items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "text-7xl font-black tracking-tighter",
                                    style: {
                                        background: 'linear-gradient(135deg, #10B981 0%, #8B5CF6 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    },
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.5
                                    },
                                    children: [
                                        currentGrade,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/ui/GradeGauge.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "text-xs uppercase tracking-[0.3em] mt-2",
                                    style: {
                                        color: '#10B981'
                                    },
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.7
                                    },
                                    children: "Current Grade"
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/GradeGauge.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ui/GradeGauge.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/ui/GradeGauge.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/ui/GradeGauge.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-0 left-0",
                initial: {
                    opacity: 0,
                    x: -20
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    delay: 0.3
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-2xl font-black uppercase tracking-wider",
                    style: {
                        color: '#8B5CF6'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block w-3 h-3 rounded-full bg-[#10B981] mr-3 animate-pulse",
                            style: {
                                boxShadow: '0 0 10px #10B981'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/ui/GradeGauge.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        "Vital Signs"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/ui/GradeGauge.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/ui/GradeGauge.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ui/GradeGauge.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = GradeGauge;
var _c;
__turbopack_context__.k.register(_c, "GradeGauge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/ui/ProphetSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProphetSidebar",
    ()=>ProphetSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// import { motion, AnimatePresence } from 'motion/react';
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2d$pattern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/fingerprint-pattern.js [app-client] (ecmascript) <export default as Fingerprint>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ProphetSidebar({ milestones, currentGrade, archetype = "Visionary Architect", insight = "Your conceptual grasp is elite, but technical precision is your final frontier." }) {
    _s();
    const [targetGPA, setTargetGPA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3.7);
    const hasData = milestones && milestones.length > 0;
    // Logic to determine required grade based on UofT scale approximation
    const targetPercentage = Math.round((targetGPA - 1) / 3 * 100);
    const calculateProjectedGrade = ()=>{
        const achievedWeight = milestones.filter((m)=>m.score !== undefined).reduce((sum, m)=>sum + m.weight, 0);
        const achievedPoints = milestones.filter((m)=>m.score !== undefined).reduce((sum, m)=>sum + m.score * (m.weight / 100), 0);
        const remainingWeight = 100 - achievedWeight;
        if (achievedWeight === 0) return currentGrade > 0 ? currentGrade : 0;
        return Math.round(achievedPoints + currentGrade * (remainingWeight / 100));
    };
    const projectedGrade = calculateProjectedGrade();
    // IDENTITY SIGNAL: Are we meeting the resonance threshold?
    const isOnTrack = projectedGrade >= targetPercentage;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full p-6 overflow-y-auto relative border-l border-white/10",
        style: {
            background: 'rgba(5, 10, 25, 0.95)',
            backdropFilter: 'blur(40px)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-xl flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#8B5CF6] to-[#EC4899]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2d$pattern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__["Fingerprint"], {
                                    className: "w-6 h-6 text-white relative z-10"
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                isOnTrack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-0 bg-white/20",
                                    animate: {
                                        opacity: [
                                            0,
                                            1,
                                            0
                                        ]
                                    },
                                    transition: {
                                        duration: 1.5,
                                        repeat: Infinity
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ui/ProphetSidebar.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-black uppercase tracking-tighter text-white",
                                    children: "Academic Persona"
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `text-[10px] uppercase tracking-[0.2em] font-bold ${isOnTrack ? 'text-emerald-400' : 'text-[#EC4899]'}`,
                                    children: isOnTrack ? 'Signal Harmonized' : 'Identity Alignment'
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ui/ProphetSidebar.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/ui/ProphetSidebar.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/ui/ProphetSidebar.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: !hasData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-20 text-center text-white/20 uppercase tracking-widest text-xs",
                    children: "Awaiting Signal"
                }, void 0, false, {
                    fileName: "[project]/app/ui/ProphetSidebar.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: isOnTrack ? {
                                scale: [
                                    1,
                                    1.02,
                                    1
                                ]
                            } : {},
                            transition: {
                                duration: 2,
                                repeat: Infinity
                            },
                            className: `p-4 rounded-2xl border-2 transition-all duration-500 ${isOnTrack ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]' : 'bg-[#8B5CF6]/10 border-[#8B5CF6]/30'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            isOnTrack ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                className: "w-5 h-5 text-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                                lineNumber: 98,
                                                columnNumber: 32
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                className: "w-5 h-5 text-[#8B5CF6]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                                lineNumber: 98,
                                                columnNumber: 87
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `text-[10px] font-black uppercase tracking-widest ${isOnTrack ? 'text-emerald-400' : 'text-[#8B5CF6]'}`,
                                                        children: isOnTrack ? 'Identity Resonating' : 'Archetype Status'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-white",
                                                        children: archetype
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this),
                                    isOnTrack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        className: "w-4 h-4 text-emerald-400 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                        lineNumber: 106,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/ui/ProphetSidebar.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 rounded-2xl border border-white/10 bg-white/5 relative overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                    className: "w-4 h-4 text-[#EC4899]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs uppercase tracking-wider text-white/60 font-bold",
                                                    children: "Target GPA"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-2xl font-black transition-colors ${isOnTrack ? 'text-emerald-400' : 'text-white'}`,
                                            children: targetGPA.toFixed(1)
                                        }, void 0, false, {
                                            fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "2.0",
                                    max: "4.0",
                                    step: "0.1",
                                    value: targetGPA,
                                    onChange: (e)=>setTargetGPA(parseFloat(e.target.value)),
                                    className: "w-full h-1.5 rounded-full appearance-none bg-white/10 accent-[#EC4899] cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[9px] text-white/40 mt-3 font-mono italic",
                                    children: [
                                        "Requires ≈ ",
                                        targetPercentage,
                                        "% resonance"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this),
                                isOnTrack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute bottom-0 left-0 h-[2px] bg-emerald-400",
                                    initial: {
                                        width: 0
                                    },
                                    animate: {
                                        width: '100%'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ui/ProphetSidebar.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-5 rounded-2xl border transition-colors duration-500 ${isOnTrack ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-[#EC4899]/30 bg-[#EC4899]/5'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-xs uppercase tracking-wider font-bold flex items-center gap-2 ${isOnTrack ? 'text-emerald-400' : 'text-white/60'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                isOnTrack ? 'Full Resonance' : 'Identity Resonance'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[10px] font-black ${isOnTrack ? 'text-emerald-400' : 'text-[#EC4899]'}`,
                                            children: [
                                                projectedGrade,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-end gap-1 h-12",
                                    children: [
                                        ...Array(12)
                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: `flex-1 rounded-t-sm ${isOnTrack ? 'bg-emerald-400/40' : 'bg-[#EC4899]/20'}`,
                                            animate: {
                                                height: isOnTrack ? [
                                                    `${40 + Math.random() * 60}%`,
                                                    `${70 + Math.random() * 30}%`
                                                ] : [
                                                    `${20 + Math.random() * 60}%`,
                                                    `${40 + Math.random() * 50}%`
                                                ]
                                            },
                                            transition: {
                                                duration: isOnTrack ? 0.5 : 1.5,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: i * 0.05
                                            }
                                        }, i, false, {
                                            fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                            lineNumber: 153,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ui/ProphetSidebar.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] uppercase tracking-[0.2em] text-white/30 font-black",
                                    children: "Growth Chronicle"
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                milestones.map((m, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center p-3 rounded-xl bg-white/[0.02] border border-white/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-bold text-white/70",
                                                children: m.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xs font-black ${m.score !== undefined ? 'text-emerald-400' : 'text-white/10'}`,
                                                children: m.score !== undefined ? `${m.score}%` : `${m.weight}%`
                                            }, void 0, false, {
                                                fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                                lineNumber: 169,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/app/ui/ProphetSidebar.tsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ui/ProphetSidebar.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/ui/ProphetSidebar.tsx",
                    lineNumber: 85,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/ui/ProphetSidebar.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ui/ProphetSidebar.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(ProphetSidebar, "lm358y64R+HNUW7mXkRwIwwcewc=");
_c = ProphetSidebar;
var _c;
__turbopack_context__.k.register(_c, "ProphetSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/ui/AICard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AICard",
    ()=>AICard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
"use client";
;
;
;
const AICard = ({ questionNumber, detectedMistake, aiTip, unitId, delay = 0 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.4,
            delay
        },
        className: "relative group w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl transition-all duration-300 group-hover:border-[#8B5CF6]/40 group-hover:bg-white/[0.04]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-[#8B5CF6]/10 rounded-2xl border border-[#8B5CF6]/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                        className: "w-5 h-5 text-[#8B5CF6]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/ui/AICard.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/AICard.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-black uppercase tracking-[0.2em] text-white/20",
                                            children: "Telemetry Detail"
                                        }, void 0, false, {
                                            fileName: "[project]/app/ui/AICard.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-2xl font-black uppercase tracking-tighter",
                                            children: [
                                                "Question ",
                                                questionNumber
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/ui/AICard.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/ui/AICard.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ui/AICard.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-1.5 rounded-full bg-white/5 border border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono font-bold text-white/40 tracking-widest uppercase",
                                children: [
                                    "Unit: ",
                                    unitId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/ui/AICard.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/ui/AICard.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/ui/AICard.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-rose-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/ui/AICard.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-black uppercase tracking-widest",
                                            children: "Anomaly Detected"
                                        }, void 0, false, {
                                            fileName: "[project]/app/ui/AICard.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/ui/AICard.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 rounded-2xl bg-rose-500/5 border border-rose-500/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-white/70 leading-relaxed italic",
                                        children: [
                                            '"',
                                            detectedMistake,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ui/AICard.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/AICard.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ui/AICard.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-[#D946EF]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/ui/AICard.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-black uppercase tracking-widest",
                                            children: "Neural Guidance"
                                        }, void 0, false, {
                                            fileName: "[project]/app/ui/AICard.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/ui/AICard.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 rounded-2xl bg-[#D946EF]/5 border border-[#D946EF]/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-white/70 leading-relaxed",
                                        children: aiTip
                                    }, void 0, false, {
                                        fileName: "[project]/app/ui/AICard.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/AICard.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ui/AICard.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/ui/AICard.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                }, void 0, false, {
                    fileName: "[project]/app/ui/AICard.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/ui/AICard.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/ui/AICard.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}; // 'use client';
 // import { motion, useMotionValue, useTransform } from 'motion/react';
 // import { Brain, AlertCircle, Lightbulb } from 'lucide-react';
 // import { useState, useRef } from 'react';
 // interface AICardProps {
 //   questionNumber: number;
 //   detectedMistake: string;
 //   aiTip: string;
 //   unitId: string;
 //   delay?: number;
 // }
 // export function AICard({ questionNumber, detectedMistake, aiTip, unitId, delay = 0 }: AICardProps) {
 //   const [revealed, setRevealed] = useState(false);
 //   const cardRef = useRef<HTMLDivElement>(null);
 //   // 3D tilt effect
 //   const x = useMotionValue(0);
 //   const y = useMotionValue(0);
 //   const rotateX = useTransform(y, [-100, 100], [10, -10]);
 //   const rotateY = useTransform(x, [-100, 100], [-10, 10]);
 //   const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
 //     if (!cardRef.current) return;
 //     const rect = cardRef.current.getBoundingClientRect();
 //     const centerX = rect.left + rect.width / 2;
 //     const centerY = rect.top + rect.height / 2;
 //     x.set(event.clientX - centerX);
 //     y.set(event.clientY - centerY);
 //   };
 //   const handleMouseLeave = () => {
 //     x.set(0);
 //     y.set(0);
 //   };
 //   return (
 //     <motion.div
 //       ref={cardRef}
 //       className="relative group"
 //       initial={{ opacity: 0, y: 20 }}
 //       animate={{ opacity: 1, y: 0 }}
 //       transition={{ delay }}
 //       onMouseMove={handleMouseMove}
 //       onMouseLeave={handleMouseLeave}
 //       style={{
 //         rotateX,
 //         rotateY,
 //         transformStyle: 'preserve-3d',
 //       }}
 //       whileHover={{ scale: 1.02 }}
 //     >
 //       {/* Rotating conic border effect */}
 //       <div className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
 //         <motion.div
 //           className="absolute inset-0 rounded-lg"
 //           style={{
 //             background: 'conic-gradient(from 0deg, #8B5CF6, #10B981, #F59E0B, #8B5CF6)',
 //           }}
 //           animate={{ rotate: 360 }}
 //           transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
 //         />
 //       </div>
 //       {/* Card Content */}
 //       <div
 //         className="relative rounded-lg p-6"
 //         style={{
 //           background: 'rgba(0, 32, 78, 0.85)',
 //           backdropFilter: 'blur(24px)',
 //           border: '1px solid rgba(139, 92, 246, 0.4)',
 //           boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(139, 92, 246, 0.1)',
 //         }}
 //       >
 //         {/* Question Badge */}
 //         <div className="flex items-start justify-between mb-4">
 //           <motion.div
 //             className="px-4 py-2 rounded-md font-black text-sm uppercase tracking-wider relative overflow-hidden"
 //             style={{
 //               background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
 //               boxShadow: '0 0 25px rgba(139, 92, 246, 0.6), 5px 5px 0 rgba(139, 92, 246, 0.35)',
 //             }}
 //             whileHover={{ scale: 1.05 }}
 //           >
 //             <span className="relative z-10">Question #{questionNumber}</span>
 //             {/* Shimmer on badge */}
 //             <motion.div
 //               className="absolute inset-0"
 //               style={{
 //                 background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
 //               }}
 //               animate={{
 //                 x: ['-100%', '200%'],
 //               }}
 //               transition={{
 //                 duration: 2,
 //                 repeat: Infinity,
 //                 ease: 'linear',
 //                 delay: delay,
 //               }}
 //             />
 //           </motion.div>
 //           <div className="flex items-center gap-2">
 //             <Brain className="w-5 h-5 text-[#8B5CF6]" />
 //             <div className="text-xs text-white/40 uppercase tracking-wider" style={{ fontFamily: 'monospace' }}>
 //               {unitId.toUpperCase()}
 //             </div>
 //           </div>
 //         </div>
 //         {/* Detected Mistake Section */}
 //         <div className="mb-4">
 //           <div className="flex items-center gap-2 mb-2">
 //             <AlertCircle className="w-4 h-4 text-[#EF4444]" />
 //             <div className="text-xs uppercase tracking-wider text-[#EF4444] font-bold">
 //               Detected Mistake
 //             </div>
 //           </div>
 //           <div
 //             className="relative p-4 rounded-md overflow-hidden cursor-pointer"
 //             onClick={() => setRevealed(!revealed)}
 //             style={{
 //               background: 'rgba(239, 68, 68, 0.15)',
 //               border: '1px solid rgba(239, 68, 68, 0.4)',
 //             }}
 //           >
 //             {/* Blur-reveal overlay with animated redaction bars */}
 //             {!revealed && (
 //               <motion.div
 //                 className="absolute inset-0 flex items-center justify-center"
 //                 initial={{ opacity: 1 }}
 //                 whileHover={{ opacity: 0.8 }}
 //               >
 //                 {/* Animated redaction bars */}
 //                 <div className="absolute inset-0 overflow-hidden">
 //                   {[...Array(6)].map((_, i) => (
 //                     <motion.div
 //                       key={i}
 //                       className="absolute w-full h-3"
 //                       style={{
 //                         top: `${10 + i * 15}%`,
 //                         background: 'rgba(239, 68, 68, 0.9)',
 //                         boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
 //                       }}
 //                       initial={{ scaleX: 0.3 }}
 //                       animate={{
 //                         scaleX: [0.3, 0.95, 0.3],
 //                         opacity: [0.9, 1, 0.9],
 //                       }}
 //                       transition={{
 //                         duration: 2,
 //                         repeat: Infinity,
 //                         delay: i * 0.1,
 //                         ease: 'easeInOut',
 //                       }}
 //                     />
 //                   ))}
 //                 </div>
 //                 <div
 //                   className="relative z-10 px-4 py-2 rounded-md"
 //                   style={{
 //                     background: 'rgba(0, 32, 78, 0.95)',
 //                     border: '1px solid #EF4444',
 //                   }}
 //                 >
 //                   <div className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2">
 //                     <motion.div
 //                       animate={{ opacity: [0.5, 1, 0.5] }}
 //                       transition={{ duration: 1.5, repeat: Infinity }}
 //                     >
 //                       🔒
 //                     </motion.div>
 //                     Click to Reveal
 //                   </div>
 //                 </div>
 //               </motion.div>
 //             )}
 //             <motion.div
 //               className="text-sm text-white/90 leading-relaxed"
 //               animate={{
 //                 opacity: revealed ? 1 : 0,
 //                 filter: revealed ? 'blur(0px)' : 'blur(8px)',
 //               }}
 //               transition={{ duration: 0.5 }}
 //             >
 //               {detectedMistake}
 //             </motion.div>
 //           </div>
 //         </div>
 //         {/* AI Study Tip */}
 //         <motion.div
 //           initial={{ opacity: 0, height: 0 }}
 //           animate={{ opacity: 1, height: 'auto' }}
 //           transition={{ delay: delay + 0.3 }}
 //         >
 //           <div className="flex items-center gap-2 mb-2">
 //             <Lightbulb className="w-4 h-4 text-[#10B981]" />
 //             <div className="text-xs uppercase tracking-wider text-[#10B981] font-bold">
 //               AI Study Tip
 //             </div>
 //           </div>
 //           <div
 //             className="relative p-4 rounded-md overflow-hidden"
 //             style={{
 //               background: 'rgba(16, 185, 129, 0.15)',
 //               border: '2px solid #10B981',
 //               boxShadow: '0 0 20px rgba(16, 185, 129, 0.4), inset 0 0 20px rgba(16, 185, 129, 0.1)',
 //             }}
 //           >
 //             <div className="text-sm text-white/90 leading-relaxed relative z-10">{aiTip}</div>
 //             {/* Neon bloom effect */}
 //             <motion.div
 //               className="absolute -top-10 -right-10 w-24 h-24 rounded-full"
 //               style={{
 //                 background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
 //                 filter: 'blur(20px)',
 //               }}
 //               animate={{
 //                 scale: [1, 1.2, 1],
 //                 opacity: [0.3, 0.5, 0.3],
 //               }}
 //               transition={{
 //                 duration: 3,
 //                 repeat: Infinity,
 //                 ease: 'easeInOut',
 //               }}
 //             />
 //           </div>
 //         </motion.div>
 //       </div>
 //     </motion.div>
 //   );
 // }
_c = AICard;
var _c;
__turbopack_context__.k.register(_c, "AICard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/drizzle/db/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://xtzqoktokspwkwhhyvss.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "sb_publishable_UjoQcCP4KJM13EghtZLxLA_on2C3TDB");
const createClient = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(supabaseUrl, supabaseKey);
const supabase = createClient();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lib/data:ad2b0c [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSubmissionAction",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60262169a5b5349a23c0ba9e0de1f8c2583ccbe701":"createSubmissionAction"},"app/lib/actions.tsx",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60262169a5b5349a23c0ba9e0de1f8c2583ccbe701", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createSubmissionAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vZHJpenpsZS9pbmRleCc7XG5pbXBvcnQgeyBjb3Vyc2VzLCBzdWJtaXNzaW9ucyB9IGZyb20gJy4uLy4uL2RyaXp6bGUvZGIvc2NoZW1hJztcbmltcG9ydCB7IGVxIH0gZnJvbSAnZHJpenpsZS1vcm0nO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcblxuLyoqXG4gKiBDT1VSU0UgTUFOQUdFTUVOVFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ291cnNlKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoJ2NvdXJzZU5hbWUnKSBhcyBzdHJpbmc7XG4gICAgYXdhaXQgZGIuaW5zZXJ0KGNvdXJzZXMpLnZhbHVlcyh7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNvdXJzZSBpbml0aWFsaXplZCBmb3IgYXVkaXQuXCIsXG4gICAgICAgIGN1cnJlbnRHcmFkZTogMCxcbiAgICAgICAgbWlsZXN0b25lczogW10sXG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvdXJzZShjb3Vyc2VJZDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGIuZGVsZXRlKGNvdXJzZXMpLndoZXJlKGVxKGNvdXJzZXMuaWQsIGNvdXJzZUlkKSk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xuICAgIH1cbn1cblxuLyoqXG4gKiBTWUxMQUJVUyBBVVRPTUFUSU9OIChUaGUgUm9hZG1hcClcbiAqIEFsaWduZWQgd2l0aCBTeWxsYWJ1c1JlcXVlc3QgaW4gYXBpLnB5XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzU3lsbGFidXNBY3Rpb24oY291cnNlSWQ6IHN0cmluZywgcHVibGljVXJsOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBiYWNrZW5kQmFzZSA9IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMIHx8IFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwXCI7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYWNrZW5kQmFzZX0vcHJvY2Vzcy1zeWxsYWJ1c2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgY291cnNlSWQ6IGNvdXJzZUlkLCAgIC8vXG4gICAgICAgICAgICAgICAgc3lsbGFidXNVcmw6IHB1YmxpY1VybCAvL1xuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIlN5bGxhYnVzIEF1ZGl0IEZhaWxlZFwiKTtcbiAgICAgICAgY29uc3QgYWlSZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgLy8gRklYOiBPbmx5IHVwZGF0ZSBtaWxlc3RvbmVzLCBleHBsaWNpdGx5IHJlc2V0IGdyYWRlIHRvIDBcbiAgICAgICAgYXdhaXQgZGIudXBkYXRlKGNvdXJzZXMpXG4gICAgICAgICAgICAuc2V0KHtcbiAgICAgICAgICAgICAgICBtaWxlc3RvbmVzOiBhaVJlc3VsdC5taWxlc3RvbmVzLCAvL1xuICAgICAgICAgICAgICAgIGN1cnJlbnRHcmFkZTogMCwgLy8gUHJldmVudHMgYWNjaWRlbnRhbCA4MiUgZHVyaW5nIHN5bGxhYnVzIHBoYXNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLndoZXJlKGVxKGNvdXJzZXMuaWQsIGNvdXJzZUlkKSk7XG5cbiAgICAgICAgLy8gRk9SIFZBVUxUXG4gICAgICAgIC8vIDIuIE5FVzogTG9nIHRoZSBTeWxsYWJ1cyBpbiB0aGUgc3VibWlzc2lvbnMgdGFibGUgc28gaXQgc2hvd3MgaW4gdGhlIFZhdWx0XG4gICAgICAgIGF3YWl0IGRiLmluc2VydChzdWJtaXNzaW9ucykudmFsdWVzKHtcbiAgICAgICAgICAgIGNvdXJzZUlkOiBjb3Vyc2VJZCxcbiAgICAgICAgICAgIG5hbWU6IFwiT2ZmaWNpYWwgQ291cnNlIFN5bGxhYnVzXCIsXG4gICAgICAgICAgICAvLyBXZSBzdG9yZSB0aGUgVVJMIGluIGEgSlNPTiBmaWVsZCBpZiB5b3Ugd2FudCBlYXN5IGFjY2VzcyBsYXRlclxuICAgICAgICAgICAgYW5hbHlzaXNSZXBvcnQ6IFt7IHR5cGU6IFwic3lsbGFidXNcIiwgdXJsOiBwdWJsaWNVcmwgfV1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9jb3Vyc2UvJHtjb3Vyc2VJZH1gKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTeWxsYWJ1cyBFcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiU3luYyBGYWlsZWRcIiB9O1xuICAgIH1cbn1cblxuLyoqXG4gKiBTVUJNSVNTSU9OIEFVVE9NQVRJT04gKFRoZSBQZXJmb3JtYW5jZSlcbiAqIEFsaWduZWQgd2l0aCBBbmFseXNpc1JlcXVlc3QgaW4gYXBpLnB5XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTdWJtaXNzaW9uQWN0aW9uKGNvdXJzZUlkOiBzdHJpbmcsIHBkZlVybDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYmFja2VuZEJhc2UgPSBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCB8fCBcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMFwiO1xuXG4gICAgICAgIC8vIDEuIEZldGNoIGN1cnJlbnQgY29udGV4dCBmb3IgdGhlIHdlaWdodGVkIGdyYWRlIGNhbGN1bGF0aW9uXG4gICAgICAgIGNvbnN0IGNvdXJzZSA9IGF3YWl0IGRiLnF1ZXJ5LmNvdXJzZXMuZmluZEZpcnN0KHtcbiAgICAgICAgICAgIHdoZXJlOiBlcShjb3Vyc2VzLmlkLCBjb3Vyc2VJZClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gMi4gVHJpZ2dlciBNaWR0ZXJtIEFuYWx5c2lzXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFja2VuZEJhc2V9L2FuYWx5emUtc3VibWlzc2lvbmAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc3VibWlzc2lvblVybDogcGRmVXJsLCAvL1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nTWlsZXN0b25lczogY291cnNlPy5taWxlc3RvbmVzIHx8IFtdIC8vXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiTmV1cmFsIEFuYWx5c2lzIGZldGNoIGZhaWxlZFwiKTtcbiAgICAgICAgY29uc3QgYXVkaXRSZXN1bHRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIC8vIDMuIFVwZGF0ZSB0aGUgQ291cnNlIChUaGlzIHNldHMgdGhlIDgyJSBHcmFkZSlcbiAgICAgICAgLy8gTWFwcyBQeXRob24gJ3VwZGF0ZWRfY3VycmVudF9ncmFkZScgdG8gREIgJ2N1cnJlbnRHcmFkZSdcbiAgICAgICAgYXdhaXQgZGIudXBkYXRlKGNvdXJzZXMpXG4gICAgICAgICAgICAuc2V0KHtcbiAgICAgICAgICAgICAgICBjdXJyZW50R3JhZGU6IE1hdGgucm91bmQoYXVkaXRSZXN1bHRzLnVwZGF0ZWRfY3VycmVudF9ncmFkZSB8fCAwKSwgLy8gU2NoZW1hIGlzIGludGVnZXJcbiAgICAgICAgICAgICAgICBtaWxlc3RvbmVzOiBhdWRpdFJlc3VsdHMuZnVsbF9oaXN0b3J5LCAvL1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC53aGVyZShlcShjb3Vyc2VzLmlkLCBjb3Vyc2VJZCkpO1xuXG4gICAgICAgIC8vIDQuIENyZWF0ZSB0aGUgU3VibWlzc2lvbiBSZWNvcmQgKFN0b3JlcyBLQ0wvRGlvZGUgdGlwcylcbiAgICAgICAgLy8gTWFwcyBQeXRob24gJ2FuYWx5c2lzX3JlcG9ydCcgdG8gREIgJ2FuYWx5c2lzUmVwb3J0J1xuICAgICAgICBjb25zdCBbbmV3UmVjb3JkXSA9IGF3YWl0IGRiLmluc2VydChzdWJtaXNzaW9ucykudmFsdWVzKHtcbiAgICAgICAgICAgIGNvdXJzZUlkOiBjb3Vyc2VJZCxcbiAgICAgICAgICAgIG5hbWU6IGBBdWRpdDogJHtuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpfWAsXG4gICAgICAgICAgICBhbmFseXNpc1JlcG9ydDogYXVkaXRSZXN1bHRzLmFuYWx5c2lzX3JlcG9ydCxcbiAgICAgICAgfSkucmV0dXJuaW5nKHsgaWQ6IHN1Ym1pc3Npb25zLmlkIH0pO1xuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvY291cnNlLyR7Y291cnNlSWR9YCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvJyk7XG5cbiAgICAgICAgcmV0dXJuIHsgaWQ6IG5ld1JlY29yZC5pZCwgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTdWJtaXNzaW9uIEFjdGlvbiBGYWlsdXJlOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEYXRhYmFzZSBvciBBUEkgc3luYyBlcnJvclwiIH07XG4gICAgfVxufVxuXG4vKipcbiAqIERBVEEgUkVTRVQgJiBNQUlOVEVOQU5DRVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlU3lsbGFidXNBY3Rpb24oY291cnNlSWQ6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRiLnVwZGF0ZShjb3Vyc2VzKVxuICAgICAgICAgICAgLnNldCh7XG4gICAgICAgICAgICAgICAgbWlsZXN0b25lczogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50R3JhZGU6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAud2hlcmUoZXEoY291cnNlcy5pZCwgY291cnNlSWQpKTtcblxuICAgICAgICByZXZhbGlkYXRlUGF0aChgL2NvdXJzZS8ke2NvdXJzZUlkfWApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byByZXNldCBzZWN0b3JcIiB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVN1Ym1pc3Npb25BY3Rpb24oc3VibWlzc2lvbklkOiBzdHJpbmcsIGNvdXJzZUlkOiBzdHJpbmcpIHtcbiAgICBhd2FpdCBkYi5kZWxldGUoc3VibWlzc2lvbnMpLndoZXJlKGVxKHN1Ym1pc3Npb25zLmlkLCBzdWJtaXNzaW9uSWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL2NvdXJzZS8ke2NvdXJzZUlkfWApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHVyZ2VDb3Vyc2VUZWxlbWV0cnkoY291cnNlSWQ6IHN0cmluZykge1xuICAgIGF3YWl0IGRiLnVwZGF0ZShjb3Vyc2VzKVxuICAgICAgICAuc2V0KHtcbiAgICAgICAgICAgIG1pbGVzdG9uZXM6IG51bGwsXG4gICAgICAgICAgICBjdXJyZW50R3JhZGU6IDBcbiAgICAgICAgfSlcbiAgICAgICAgLndoZXJlKGVxKGNvdXJzZXMuaWQsIGNvdXJzZUlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChgL2NvdXJzZS8ke2NvdXJzZUlkfWApO1xufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFJBZ0ZzQixtTUFBQSJ9
}),
"[project]/app/ui/CreateSubmissionBtn.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateSubmissionBtn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/drizzle/db/client.ts [app-client] (ecmascript)");
// FIX: Using createSubmissionAction
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$data$3a$ad2b0c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/data:ad2b0c [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function CreateSubmissionBtn({ courseId, userId }) {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const handleInstantSubmission = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        setStatus('syncing');
        try {
            const fileName = `${userId}/${courseId}/submissions/${Date.now()}-${file.name}`;
            const { error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('uofthacks-2026').upload(fileName, file);
            if (uploadError) throw uploadError;
            const { data: { publicUrl } } = __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('uofthacks-2026').getPublicUrl(fileName);
            // CALL: Correct action for performance audits
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$data$3a$ad2b0c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createSubmissionAction"])(courseId, publicUrl);
            if (!result.success) throw new Error(result.error);
            setStatus('success');
            setTimeout(()=>setStatus('idle'), 3000);
        } catch (error) {
            console.error("Submission Sync Error:", error);
            setStatus('idle');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                className: "hidden",
                onChange: handleInstantSubmission,
                disabled: status === 'syncing'
            }, void 0, false, {
                fileName: "[project]/app/ui/CreateSubmissionBtn.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center gap-2 transition-all ${status === 'syncing' ? 'bg-[#8B5CF6]/50 cursor-wait' : 'bg-[#8B5CF6] hover:bg-[#7C3AED]'}`,
                children: [
                    status === 'syncing' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "w-4 h-4 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/app/ui/CreateSubmissionBtn.tsx",
                        lineNumber: 48,
                        columnNumber: 41
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/app/ui/CreateSubmissionBtn.tsx",
                        lineNumber: 48,
                        columnNumber: 88
                    }, this),
                    status === 'syncing' ? "Syncing Telemetry..." : "Create Submission"
                ]
            }, void 0, true, {
                fileName: "[project]/app/ui/CreateSubmissionBtn.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ui/CreateSubmissionBtn.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, this);
}
_s(CreateSubmissionBtn, "pMVgpsUAJOHrZfHrrx/6nNCpzkc=");
_c = CreateSubmissionBtn;
var _c;
__turbopack_context__.k.register(_c, "CreateSubmissionBtn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lib/data:774fc0 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteSyllabusAction",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40c5d260e06a26e8e357801a39d7cf9fb6cba0e0f7":"deleteSyllabusAction"},"app/lib/actions.tsx",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40c5d260e06a26e8e357801a39d7cf9fb6cba0e0f7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteSyllabusAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vZHJpenpsZS9pbmRleCc7XG5pbXBvcnQgeyBjb3Vyc2VzLCBzdWJtaXNzaW9ucyB9IGZyb20gJy4uLy4uL2RyaXp6bGUvZGIvc2NoZW1hJztcbmltcG9ydCB7IGVxIH0gZnJvbSAnZHJpenpsZS1vcm0nO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcblxuLyoqXG4gKiBDT1VSU0UgTUFOQUdFTUVOVFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ291cnNlKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoJ2NvdXJzZU5hbWUnKSBhcyBzdHJpbmc7XG4gICAgYXdhaXQgZGIuaW5zZXJ0KGNvdXJzZXMpLnZhbHVlcyh7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNvdXJzZSBpbml0aWFsaXplZCBmb3IgYXVkaXQuXCIsXG4gICAgICAgIGN1cnJlbnRHcmFkZTogMCxcbiAgICAgICAgbWlsZXN0b25lczogW10sXG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvdXJzZShjb3Vyc2VJZDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGIuZGVsZXRlKGNvdXJzZXMpLndoZXJlKGVxKGNvdXJzZXMuaWQsIGNvdXJzZUlkKSk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xuICAgIH1cbn1cblxuLyoqXG4gKiBTWUxMQUJVUyBBVVRPTUFUSU9OIChUaGUgUm9hZG1hcClcbiAqIEFsaWduZWQgd2l0aCBTeWxsYWJ1c1JlcXVlc3QgaW4gYXBpLnB5XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzU3lsbGFidXNBY3Rpb24oY291cnNlSWQ6IHN0cmluZywgcHVibGljVXJsOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBiYWNrZW5kQmFzZSA9IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMIHx8IFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwXCI7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYWNrZW5kQmFzZX0vcHJvY2Vzcy1zeWxsYWJ1c2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgY291cnNlSWQ6IGNvdXJzZUlkLCAgIC8vXG4gICAgICAgICAgICAgICAgc3lsbGFidXNVcmw6IHB1YmxpY1VybCAvL1xuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIlN5bGxhYnVzIEF1ZGl0IEZhaWxlZFwiKTtcbiAgICAgICAgY29uc3QgYWlSZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgLy8gRklYOiBPbmx5IHVwZGF0ZSBtaWxlc3RvbmVzLCBleHBsaWNpdGx5IHJlc2V0IGdyYWRlIHRvIDBcbiAgICAgICAgYXdhaXQgZGIudXBkYXRlKGNvdXJzZXMpXG4gICAgICAgICAgICAuc2V0KHtcbiAgICAgICAgICAgICAgICBtaWxlc3RvbmVzOiBhaVJlc3VsdC5taWxlc3RvbmVzLCAvL1xuICAgICAgICAgICAgICAgIGN1cnJlbnRHcmFkZTogMCwgLy8gUHJldmVudHMgYWNjaWRlbnRhbCA4MiUgZHVyaW5nIHN5bGxhYnVzIHBoYXNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLndoZXJlKGVxKGNvdXJzZXMuaWQsIGNvdXJzZUlkKSk7XG5cbiAgICAgICAgLy8gRk9SIFZBVUxUXG4gICAgICAgIC8vIDIuIE5FVzogTG9nIHRoZSBTeWxsYWJ1cyBpbiB0aGUgc3VibWlzc2lvbnMgdGFibGUgc28gaXQgc2hvd3MgaW4gdGhlIFZhdWx0XG4gICAgICAgIGF3YWl0IGRiLmluc2VydChzdWJtaXNzaW9ucykudmFsdWVzKHtcbiAgICAgICAgICAgIGNvdXJzZUlkOiBjb3Vyc2VJZCxcbiAgICAgICAgICAgIG5hbWU6IFwiT2ZmaWNpYWwgQ291cnNlIFN5bGxhYnVzXCIsXG4gICAgICAgICAgICAvLyBXZSBzdG9yZSB0aGUgVVJMIGluIGEgSlNPTiBmaWVsZCBpZiB5b3Ugd2FudCBlYXN5IGFjY2VzcyBsYXRlclxuICAgICAgICAgICAgYW5hbHlzaXNSZXBvcnQ6IFt7IHR5cGU6IFwic3lsbGFidXNcIiwgdXJsOiBwdWJsaWNVcmwgfV1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9jb3Vyc2UvJHtjb3Vyc2VJZH1gKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTeWxsYWJ1cyBFcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiU3luYyBGYWlsZWRcIiB9O1xuICAgIH1cbn1cblxuLyoqXG4gKiBTVUJNSVNTSU9OIEFVVE9NQVRJT04gKFRoZSBQZXJmb3JtYW5jZSlcbiAqIEFsaWduZWQgd2l0aCBBbmFseXNpc1JlcXVlc3QgaW4gYXBpLnB5XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTdWJtaXNzaW9uQWN0aW9uKGNvdXJzZUlkOiBzdHJpbmcsIHBkZlVybDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYmFja2VuZEJhc2UgPSBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCB8fCBcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMFwiO1xuXG4gICAgICAgIC8vIDEuIEZldGNoIGN1cnJlbnQgY29udGV4dCBmb3IgdGhlIHdlaWdodGVkIGdyYWRlIGNhbGN1bGF0aW9uXG4gICAgICAgIGNvbnN0IGNvdXJzZSA9IGF3YWl0IGRiLnF1ZXJ5LmNvdXJzZXMuZmluZEZpcnN0KHtcbiAgICAgICAgICAgIHdoZXJlOiBlcShjb3Vyc2VzLmlkLCBjb3Vyc2VJZClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gMi4gVHJpZ2dlciBNaWR0ZXJtIEFuYWx5c2lzXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFja2VuZEJhc2V9L2FuYWx5emUtc3VibWlzc2lvbmAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc3VibWlzc2lvblVybDogcGRmVXJsLCAvL1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nTWlsZXN0b25lczogY291cnNlPy5taWxlc3RvbmVzIHx8IFtdIC8vXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiTmV1cmFsIEFuYWx5c2lzIGZldGNoIGZhaWxlZFwiKTtcbiAgICAgICAgY29uc3QgYXVkaXRSZXN1bHRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIC8vIDMuIFVwZGF0ZSB0aGUgQ291cnNlIChUaGlzIHNldHMgdGhlIDgyJSBHcmFkZSlcbiAgICAgICAgLy8gTWFwcyBQeXRob24gJ3VwZGF0ZWRfY3VycmVudF9ncmFkZScgdG8gREIgJ2N1cnJlbnRHcmFkZSdcbiAgICAgICAgYXdhaXQgZGIudXBkYXRlKGNvdXJzZXMpXG4gICAgICAgICAgICAuc2V0KHtcbiAgICAgICAgICAgICAgICBjdXJyZW50R3JhZGU6IE1hdGgucm91bmQoYXVkaXRSZXN1bHRzLnVwZGF0ZWRfY3VycmVudF9ncmFkZSB8fCAwKSwgLy8gU2NoZW1hIGlzIGludGVnZXJcbiAgICAgICAgICAgICAgICBtaWxlc3RvbmVzOiBhdWRpdFJlc3VsdHMuZnVsbF9oaXN0b3J5LCAvL1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC53aGVyZShlcShjb3Vyc2VzLmlkLCBjb3Vyc2VJZCkpO1xuXG4gICAgICAgIC8vIDQuIENyZWF0ZSB0aGUgU3VibWlzc2lvbiBSZWNvcmQgKFN0b3JlcyBLQ0wvRGlvZGUgdGlwcylcbiAgICAgICAgLy8gTWFwcyBQeXRob24gJ2FuYWx5c2lzX3JlcG9ydCcgdG8gREIgJ2FuYWx5c2lzUmVwb3J0J1xuICAgICAgICBjb25zdCBbbmV3UmVjb3JkXSA9IGF3YWl0IGRiLmluc2VydChzdWJtaXNzaW9ucykudmFsdWVzKHtcbiAgICAgICAgICAgIGNvdXJzZUlkOiBjb3Vyc2VJZCxcbiAgICAgICAgICAgIG5hbWU6IGBBdWRpdDogJHtuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpfWAsXG4gICAgICAgICAgICBhbmFseXNpc1JlcG9ydDogYXVkaXRSZXN1bHRzLmFuYWx5c2lzX3JlcG9ydCxcbiAgICAgICAgfSkucmV0dXJuaW5nKHsgaWQ6IHN1Ym1pc3Npb25zLmlkIH0pO1xuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvY291cnNlLyR7Y291cnNlSWR9YCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvJyk7XG5cbiAgICAgICAgcmV0dXJuIHsgaWQ6IG5ld1JlY29yZC5pZCwgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTdWJtaXNzaW9uIEFjdGlvbiBGYWlsdXJlOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJEYXRhYmFzZSBvciBBUEkgc3luYyBlcnJvclwiIH07XG4gICAgfVxufVxuXG4vKipcbiAqIERBVEEgUkVTRVQgJiBNQUlOVEVOQU5DRVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlU3lsbGFidXNBY3Rpb24oY291cnNlSWQ6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRiLnVwZGF0ZShjb3Vyc2VzKVxuICAgICAgICAgICAgLnNldCh7XG4gICAgICAgICAgICAgICAgbWlsZXN0b25lczogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50R3JhZGU6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAud2hlcmUoZXEoY291cnNlcy5pZCwgY291cnNlSWQpKTtcblxuICAgICAgICByZXZhbGlkYXRlUGF0aChgL2NvdXJzZS8ke2NvdXJzZUlkfWApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byByZXNldCBzZWN0b3JcIiB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVN1Ym1pc3Npb25BY3Rpb24oc3VibWlzc2lvbklkOiBzdHJpbmcsIGNvdXJzZUlkOiBzdHJpbmcpIHtcbiAgICBhd2FpdCBkYi5kZWxldGUoc3VibWlzc2lvbnMpLndoZXJlKGVxKHN1Ym1pc3Npb25zLmlkLCBzdWJtaXNzaW9uSWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL2NvdXJzZS8ke2NvdXJzZUlkfWApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHVyZ2VDb3Vyc2VUZWxlbWV0cnkoY291cnNlSWQ6IHN0cmluZykge1xuICAgIGF3YWl0IGRiLnVwZGF0ZShjb3Vyc2VzKVxuICAgICAgICAuc2V0KHtcbiAgICAgICAgICAgIG1pbGVzdG9uZXM6IG51bGwsXG4gICAgICAgICAgICBjdXJyZW50R3JhZGU6IDBcbiAgICAgICAgfSlcbiAgICAgICAgLndoZXJlKGVxKGNvdXJzZXMuaWQsIGNvdXJzZUlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChgL2NvdXJzZS8ke2NvdXJzZUlkfWApO1xufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFJBb0lzQixpTUFBQSJ9
}),
"[project]/app/ui/DeleteSyllabusBtn.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeleteSyllabusBtn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-ccw.js [app-client] (ecmascript) <export default as RefreshCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$data$3a$774fc0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/data:774fc0 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
// frontend/app/ui/DeleteSyllabusBtn.tsx
'use client';
;
;
;
function DeleteSyllabusBtn({ courseId }) {
    _s();
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirm, setConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleDelete = async ()=>{
        if (!confirm) {
            setConfirm(true);
            setTimeout(()=>setConfirm(false), 3000); // Reset after 3 seconds
            return;
        }
        setIsDeleting(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$data$3a$774fc0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteSyllabusAction"])(courseId);
        } catch (err) {
            alert("Failed to reset syllabus.");
        } finally{
            setIsDeleting(false);
            setConfirm(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleDelete,
        disabled: isDeleting,
        className: `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${confirm ? 'bg-red-500 text-white animate-pulse' : 'bg-white/5 text-white/40 hover:bg-red-500/20 hover:text-red-400'}`,
        children: isDeleting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "w-4 h-4 animate-spin"
        }, void 0, false, {
            fileName: "[project]/app/ui/DeleteSyllabusBtn.tsx",
            lineNumber: 40,
            columnNumber: 17
        }, this) : confirm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Confirm Reset?"
        }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/app/ui/DeleteSyllabusBtn.tsx",
                    lineNumber: 45,
                    columnNumber: 21
                }, this),
                "Reset Syllabus"
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/app/ui/DeleteSyllabusBtn.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, this);
}
_s(DeleteSyllabusBtn, "/A2cDXkR2UNhIFHXhJJ228F8HQc=");
_c = DeleteSyllabusBtn;
var _c;
__turbopack_context__.k.register(_c, "DeleteSyllabusBtn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/ui/FileUploader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FileUploader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/drizzle/db/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FileUploader({ bucket, userID, courseID, folder, onSuccess }) {
    _s();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleUpload = async ()=>{
        // Guard: Ensure identity and file are present
        if (!file || !userID) {
            setStatus({
                type: 'error',
                msg: "IDENTITY ERROR: Signature missing."
            });
            return;
        }
        setUploading(true);
        setStatus(null);
        try {
            const timestamp = Date.now();
            // Clean filename for system compatibility
            const safeName = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
            /**
             * N3XU$ VAULT HIERARCHY
             * Path: [user_id] / [course_id] / [folder_type] / [file]
             */ const filePath = `${userID}/${courseID}/${folder}/${timestamp}-${safeName}`;
            // 1. Transmit asset to Supabase Storage
            const { error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$drizzle$2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from(bucket).upload(filePath, file, {
                cacheControl: '3600',
                upsert: false
            });
            if (uploadError) throw uploadError;
            // 2. Trigger Neural Audit (Server Action)
            if (onSuccess) {
                await onSuccess(filePath);
            }
            setStatus({
                type: 'success',
                msg: "TRANSMISSION SUCCESS: Sector Vaulted."
            });
            setFile(null);
        } catch (err) {
            setStatus({
                type: 'error',
                msg: `CRITICAL ERROR: ${err.message}`
            });
        } finally{
            setUploading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-md space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30",
                        onChange: (e)=>setFile(e.target.files?.[0] ?? null),
                        disabled: uploading
                    }, void 0, false, {
                        fileName: "[project]/app/ui/FileUploader.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-8 rounded-[2rem] border-2 border-dashed transition-all duration-500 flex flex-col items-center justify-center gap-4 ${file ? 'bg-emerald-500/5 border-emerald-500/40' : 'bg-white/5 border-white/10 group-hover:border-[#8B5CF6]/40'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-2xl bg-white/5 border border-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                    className: `w-8 h-8 ${file ? 'text-emerald-400' : 'text-white/20'}`
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/FileUploader.tsx",
                                    lineNumber: 81,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/ui/FileUploader.tsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-black uppercase tracking-[0.3em] text-white/40",
                                children: file ? file.name : "Select Asset Payload"
                            }, void 0, false, {
                                fileName: "[project]/app/ui/FileUploader.tsx",
                                lineNumber: 83,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/ui/FileUploader.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ui/FileUploader.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleUpload,
                disabled: !file || uploading,
                className: "w-full py-4 rounded-2xl bg-[#8B5CF6] text-white font-black uppercase tracking-[0.2em] text-[10px] shadow-lg shadow-[#8B5CF6]/20 transition-all hover:bg-[#7C3AED] disabled:opacity-20 flex items-center justify-center gap-3",
                children: uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "w-4 h-4 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/app/ui/FileUploader.tsx",
                            lineNumber: 97,
                            columnNumber: 25
                        }, this),
                        "Syncing with Vault..."
                    ]
                }, void 0, true) : "Transmit to N3XU$ Vault"
            }, void 0, false, {
                fileName: "[project]/app/ui/FileUploader.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, this),
            status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-3 rounded-xl border text-[10px] uppercase tracking-widest text-center flex items-center justify-center gap-2 ${status.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-400'}`,
                children: [
                    status.type === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "w-3 h-3"
                    }, void 0, false, {
                        fileName: "[project]/app/ui/FileUploader.tsx",
                        lineNumber: 107,
                        columnNumber: 50
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "w-3 h-3"
                    }, void 0, false, {
                        fileName: "[project]/app/ui/FileUploader.tsx",
                        lineNumber: 107,
                        columnNumber: 89
                    }, this),
                    status.msg
                ]
            }, void 0, true, {
                fileName: "[project]/app/ui/FileUploader.tsx",
                lineNumber: 105,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ui/FileUploader.tsx",
        lineNumber: 67,
        columnNumber: 9
    }, this);
}
_s(FileUploader, "3R4YhvnKhLoMEshLs1Fm9th3oxg=");
_c = FileUploader;
var _c;
__turbopack_context__.k.register(_c, "FileUploader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_de0441ab._.js.map