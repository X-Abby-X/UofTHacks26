(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/storage/lib/supabaseClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://xtzqoktokspwkwhhyvss.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_UjoQcCP4KJM13EghtZLxLA_on2C3TDB");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: false
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/storage/components/FileUploader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FileUploader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storage$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storage/lib/supabaseClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// "use client";
// import { useState } from "react";
// import { supabase } from "../lib/supabaseClient"; // relative import
// type Props = {
//   bucket: string;
//   userID: string;
// };
// export default function FileUploader({ bucket, userID }: Props) {
//   const [file, setFile] = useState<File | null>(null);
//   const [uploading, setUploading] = useState(false);
//   const [message, setMessage] = useState<string | null>(null);
//   const [signedUrl, setSignedUrl] = useState<string | null>(null);
//   const uploadFile = async () => {
//     if (!file) return;
//     setUploading(true);
//     setMessage(null);
//     setSignedUrl(null);
//     // create a unique file name
//     const safeFileName = encodeURIComponent(file.name);
//     const filePath = `${userID}/${Date.now()}-${safeFileName}`;
//     // const filePath = `${userID}/${Date.now()}-${file.name}`;
//     // Upload to private bucket
//     // const { error } = await supabase.storage
//     //   .from(bucket)
//     //   .upload(filePath, file);
//     const { data: uploadData, error } = await supabase.storage.from(bucket).upload(filePath, file);
//     if (error) {
//       setMessage(`❌ Upload failed: ${error.message}`);
//       setUploading(false);
//       return;
//     }
//     console.log("Uploaded file data:", uploadData);
//     setMessage("✅ File uploaded successfully!");
//     // Generate a signed URL (valid 60 seconds)
//     const { data, error: urlError } = await supabase.storage
//       .from(bucket)
//       .createSignedUrl(filePath, 60);
//     if (urlError) {
//       setMessage(`❌ Signed URL error: ${urlError.message}`);
//     } else {
//       setSignedUrl(data.signedUrl);
//     }
//     setUploading(false);
//   };
//   return (
//     <div style={{ border: "1px solid #ccc", padding: "1rem", width: 350 }}>
//       <input
//         type="file"
//         onChange={(e) => setFile(e.target.files?.[0] ?? null)}
//       />
//       <button
//         onClick={uploadFile}
//         disabled={!file || uploading}
//         style={{ marginTop: "0.5rem" }}
//       >
//         {uploading ? "Uploading..." : "Upload"}
//       </button>
//       {message && <p style={{ marginTop: "0.5rem" }}>{message}</p>}
//       {signedUrl && (
//         <div style={{ marginTop: "0.5rem" }}>
//           <p>Preview URL (expires in 60s):</p>
//           <a href={signedUrl} target="_blank" rel="noopener noreferrer">
//             Open File
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }
// VERSION 2
// "use client";
// import { useState } from "react";
// import { supabase } from "../lib/supabaseClient";
// type Props = {
//   bucket: string;
//   userID: string;
// };
// export default function FileUploader({ bucket, userID }: Props) {
//   const [file, setFile] = useState<File | null>(null);
//   const [uploading, setUploading] = useState(false);
//   const [message, setMessage] = useState<string | null>(null);
//   const [signedUrl, setSignedUrl] = useState<string | null>(null);
//   const uploadFile = async () => {
//     if (!file) return;
//     setUploading(true);
//     setMessage(null);
//     setSignedUrl(null);
//     try {
//       // Make filename safe for URLs
//       const safeFileName = encodeURIComponent(file.name);
//       const filePath = `${userID}/${Date.now()}-${safeFileName}`;
//       // Upload to the private bucket
//       const { data: uploadData, error: uploadError } = await supabase.storage
//         .from(bucket)
//         .upload(filePath, file);
//       if (uploadError) {
//         setMessage(`❌ Upload failed: ${uploadError.message}`);
//         setUploading(false);
//         return;
//       }
//       // Confirm file exists before generating signed URL
//       const { data: urlData, error: urlError } = await supabase.storage
//         .from(bucket)
//         .createSignedUrl(filePath, 60); // URL valid for 60 seconds
//       if (urlError) {
//         setMessage(`❌ Signed URL error: ${urlError.message}`);
//       } else {
//         setSignedUrl(urlData.signedUrl);
//         setMessage("✅ File uploaded and signed URL generated!");
//       }
//     } catch (err: any) {
//       setMessage(`❌ Unexpected error: ${err.message}`);
//     } finally {
//       setUploading(false);
//     }
//   };
//   return (
//     <div style={{ border: "1px solid #ccc", padding: "1rem", width: 350 }}>
//       <input
//         type="file"
//         onChange={(e) => setFile(e.target.files?.[0] ?? null)}
//       />
//       <button
//         onClick={uploadFile}
//         disabled={!file || uploading}
//         style={{ marginTop: "0.5rem" }}
//       >
//         {uploading ? "Uploading..." : "Upload"}
//       </button>
//       {message && <p style={{ marginTop: "0.5rem" }}>{message}</p>}
//       {signedUrl && (
//         <div style={{ marginTop: "0.5rem" }}>
//           <p>Preview URL (expires in 60s):</p>
//           <a href={signedUrl} target="_blank" rel="noopener noreferrer">
//             Open File
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }
// VERSION 3
"use client";
;
;
function FileUploader({ bucket, userID }) {
    _s();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [signedUrl, setSignedUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const uploadFile = async ()=>{
        if (!file) return;
        setUploading(true);
        setMessage(null);
        setSignedUrl(null);
        try {
            // Make filename safe for URLs
            const timestamp = Date.now();
            const safeFileName = encodeURIComponent(file.name);
            const filePath = `${userID}/${timestamp}-${safeFileName}`;
            // Upload the file
            const { data: uploadData, error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$storage$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from(bucket).upload(filePath, file, {
                cacheControl: "3600",
                upsert: false
            });
            if (uploadError) {
                setMessage(`❌ Upload failed: ${uploadError.message}`);
                return;
            }
            // ✅ Verify the uploaded file exists
            const { data: listData, error: listError } = await __TURBOPACK__imported__module__$5b$project$5d2f$storage$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from(bucket).list(userID);
            if (listError) {
                setMessage(`❌ Could not verify file: ${listError.message}`);
                return;
            }
            const uploadedFileExists = listData.some((f)=>f.name === `${timestamp}-${file.name}` || f.name === safeFileName);
            if (!uploadedFileExists) {
                setMessage(`❌ Uploaded file not found in bucket!`);
                return;
            }
            // Generate signed URL (valid 5 minutes)
            const { data: urlData, error: urlError } = await __TURBOPACK__imported__module__$5b$project$5d2f$storage$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from(bucket).createSignedUrl(filePath, 300);
            if (urlError) {
                setMessage(`❌ Signed URL error: ${urlError.message}`);
            } else {
                setSignedUrl(urlData.signedUrl);
                setMessage("✅ File uploaded and signed URL generated!");
            }
        } catch (err) {
            setMessage(`❌ Unexpected error: ${err.message}`);
        } finally{
            setUploading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            border: "1px solid #ccc",
            padding: "1rem",
            width: 350
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                onChange: (e)=>setFile(e.target.files?.[0] ?? null)
            }, void 0, false, {
                fileName: "[project]/storage/components/FileUploader.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: uploadFile,
                disabled: !file || uploading,
                style: {
                    marginTop: "0.5rem"
                },
                children: uploading ? "Uploading..." : "Upload"
            }, void 0, false, {
                fileName: "[project]/storage/components/FileUploader.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    marginTop: "0.5rem"
                },
                children: message
            }, void 0, false, {
                fileName: "[project]/storage/components/FileUploader.tsx",
                lineNumber: 267,
                columnNumber: 19
            }, this),
            signedUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "0.5rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Preview URL (expires in 5 min):"
                    }, void 0, false, {
                        fileName: "[project]/storage/components/FileUploader.tsx",
                        lineNumber: 271,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: signedUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Open File"
                    }, void 0, false, {
                        fileName: "[project]/storage/components/FileUploader.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/storage/components/FileUploader.tsx",
                lineNumber: 270,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/storage/components/FileUploader.tsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
}
_s(FileUploader, "jKDQ7xb2pGG9aCjf3+ISdhbujgM=");
_c = FileUploader;
var _c;
__turbopack_context__.k.register(_c, "FileUploader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/login/UserPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storage$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storage/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storage$2f$components$2f$FileUploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storage/components/FileUploader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function UserPage() {
    _s();
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserPage.useEffect": ()=>{
            // 1. Get initial session
            const getInitialUser = {
                "UserPage.useEffect.getInitialUser": async ()=>{
                    const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$storage$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                    if (user) {
                        setUserId(user.id);
                        localStorage.setItem("userId", user.id);
                    }
                    setLoading(false);
                }
            }["UserPage.useEffect.getInitialUser"];
            getInitialUser();
            // 2. Listen for auth changes
            const { data: subscription } = __TURBOPACK__imported__module__$5b$project$5d2f$storage$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange({
                "UserPage.useEffect": (_event, session)=>{
                    if (session?.user) {
                        setUserId(session.user.id);
                        localStorage.setItem("userId", session.user.id);
                    } else {
                        setUserId(null);
                        localStorage.removeItem("userId");
                    }
                }
            }["UserPage.useEffect"]);
            return ({
                "UserPage.useEffect": ()=>{
                    subscription.subscription.unsubscribe();
                }
            })["UserPage.useEffect"];
        }
    }["UserPage.useEffect"], []);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/app/login/UserPage.tsx",
        lineNumber: 46,
        columnNumber: 23
    }, this);
    if (!userId) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "User not logged in"
    }, void 0, false, {
        fileName: "[project]/app/login/UserPage.tsx",
        lineNumber: 47,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "User Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/app/login/UserPage.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Your user ID:"
                    }, void 0, false, {
                        fileName: "[project]/app/login/UserPage.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: userId
                    }, void 0, false, {
                        fileName: "[project]/app/login/UserPage.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/login/UserPage.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this),
            userId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$storage$2f$components$2f$FileUploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    bucket: "uofthacks-2026",
                    userID: userId
                }, void 0, false, {
                    fileName: "[project]/app/login/UserPage.tsx",
                    lineNumber: 58,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/login/UserPage.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/login/UserPage.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(UserPage, "6EgIDmnK86NR1s8vi4KZjvfztCE=");
_c = UserPage;
var _c;
__turbopack_context__.k.register(_c, "UserPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/login/AuthPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$storage$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/storage/lib/supabaseClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AuthPage() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const signUp = async ()=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$storage$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
            email,
            password
        });
        setMessage(error ? error.message : "Check your email to confirm");
    };
    const signIn = async ()=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$storage$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
            email,
            password
        });
        if (error) setMessage(error.message);
        else setMessage("Signed in!");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Auth"
            }, void 0, false, {
                fileName: "[project]/app/login/AuthPage.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                placeholder: "Email",
                value: email,
                onChange: (e)=>setEmail(e.target.value)
            }, void 0, false, {
                fileName: "[project]/app/login/AuthPage.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/login/AuthPage.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "password",
                placeholder: "Password",
                value: password,
                onChange: (e)=>setPassword(e.target.value)
            }, void 0, false, {
                fileName: "[project]/app/login/AuthPage.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/login/AuthPage.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: signUp,
                children: "Sign Up"
            }, void 0, false, {
                fileName: "[project]/app/login/AuthPage.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: signIn,
                children: "Sign In"
            }, void 0, false, {
                fileName: "[project]/app/login/AuthPage.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: message
            }, void 0, false, {
                fileName: "[project]/app/login/AuthPage.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/login/AuthPage.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/login/AuthPage.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(AuthPage, "s7C0CXXiuUHhlRlvkNKOC498sg0=");
_c = AuthPage;
var _c;
__turbopack_context__.k.register(_c, "AuthPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_5d713bb6._.js.map