"use client";

import { useState } from "react";
import { supabase } from "@/drizzle/db/client";
import { Upload, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";

type Props = {
    bucket: string;
    userID: string;
    courseID: string;
    folder: "student_submissions" | "syllabus_files";
    onSuccess?: (filePath: string) => Promise<void>;
};

export default function FileUploader({ bucket, userID, courseID, folder, onSuccess }: Props) {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

    const handleUpload = async () => {
        // Guard: Ensure identity and file are present
        if (!file || !userID) {
            setStatus({ type: 'error', msg: "IDENTITY ERROR: Signature missing." });
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
             */
            const filePath = `${userID}/${courseID}/${folder}/${timestamp}-${safeName}`;

            // 1. Transmit asset to Supabase Storage
            const { error: uploadError } = await supabase.storage
                .from(bucket)
                .upload(filePath, file, {
                    cacheControl: '3600',
                    upsert: false
                });

            if (uploadError) throw uploadError;

            // 2. Trigger Neural Audit (Server Action)
            if (onSuccess) {
                await onSuccess(filePath);
            }

            setStatus({ type: 'success', msg: "TRANSMISSION SUCCESS: Sector Vaulted." });
            setFile(null);

        } catch (err: any) {
            setStatus({ type: 'error', msg: `CRITICAL ERROR: ${err.message}` });
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="w-full max-w-md space-y-6">
            {/* Selection Interface */}
            <div className="relative group">
                <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30"
                    onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                    disabled={uploading}
                />
                <div className={`p-8 rounded-[2rem] border-2 border-dashed transition-all duration-500 flex flex-col items-center justify-center gap-4 ${file
                        ? 'bg-emerald-500/5 border-emerald-500/40'
                        : 'bg-white/5 border-white/10 group-hover:border-[#8B5CF6]/40'
                    }`}>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <Upload className={`w-8 h-8 ${file ? 'text-emerald-400' : 'text-white/20'}`} />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                        {file ? file.name : "Select Asset Payload"}
                    </p>
                </div>
            </div>

            {/* Upload Trigger */}
            <button
                onClick={handleUpload}
                disabled={!file || uploading}
                className="w-full py-4 rounded-2xl bg-[#8B5CF6] text-white font-black uppercase tracking-[0.2em] text-[10px] shadow-lg shadow-[#8B5CF6]/20 transition-all hover:bg-[#7C3AED] disabled:opacity-20 flex items-center justify-center gap-3"
            >
                {uploading ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Syncing with Vault...
                    </>
                ) : "Transmit to N3XU$ Vault"}
            </button>

            {/* Status Indicators */}
            {status && (
                <div className={`p-3 rounded-xl border text-[10px] uppercase tracking-widest text-center flex items-center justify-center gap-2 ${status.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                    }`}>
                    {status.type === 'success' ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                    {status.msg}
                </div>
            )}
        </div>
    );
}