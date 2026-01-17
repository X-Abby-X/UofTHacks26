'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Loader2, Fingerprint, CheckCircle2, AlertCircle } from 'lucide-react';
import { processSyllabusAction } from '@/app/lib/actions';
import { supabase } from '@/drizzle/db/client';

interface SyllabusUploadProps {
    courseId: string;
    courseName: string;
}

export default function SyllabusUploadSection({ courseId, courseName }: SyllabusUploadProps) {
    const [status, setStatus] = useState<'idle' | 'uploading' | 'analyzing' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setStatus('uploading');
        setMessage('Uploading to Storage...');

        try {
            // 1. Upload to Supabase Storage
            const fileName = `${courseId}/syllabus-${Date.now()}.pdf`;
            const { error: storageError } = await supabase.storage
                .from('syllabus_files')
                .upload(fileName, file, { upsert: true });

            if (storageError) throw storageError;

            // 2. Get Public URL
            const { data: { publicUrl } } = supabase.storage
                .from('syllabus_files')
                .getPublicUrl(fileName);

            setStatus('analyzing');
            setMessage(`Analyzing ${courseName} DNA...`);

            // 3. Trigger Backend Audit (In DEV_MODE, this populates ECE231 data automatically)
            const result = await processSyllabusAction(courseId, publicUrl);
            if (!result.success) throw new Error(result.error);

            setStatus('success');
            setMessage('Identity Synchronized');
        } catch (error: any) {
            console.error("Syllabus upload failed:", error);
            setStatus('error');
            setMessage('Analysis Failed');
        }
    };

    return (
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl relative overflow-hidden">
            {/* Background Aura */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#8B5CF6]/10 blur-[100px] rounded-full pointer-events-none" />

            <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
                <div className="p-2 bg-[#8B5CF6]/20 rounded-lg">
                    <Fingerprint className="w-5 h-5 text-[#8B5CF6]" />
                </div>
                Course Initialization
            </h3>

            <div
                className={`
                    border-2 border-dashed rounded-3xl p-12 text-center transition-all cursor-pointer group
                    ${status === 'idle' ? 'border-white/10 hover:border-[#8B5CF6]/40 bg-white/[0.02]' : 'border-transparent bg-white/5'}
                `}
                onClick={() => status === 'idle' && fileInputRef.current?.click()}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="hidden"
                />

                <AnimatePresence mode="wait">
                    {status === 'idle' ? (
                        <motion.div
                            key="idle"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-4"
                        >
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:bg-[#8B5CF6]/10 transition-all duration-500">
                                <Upload className="w-8 h-8 text-white/20 group-hover:text-[#8B5CF6] transition-colors" />
                            </div>
                            <div>
                                <p className="text-lg font-bold text-white mb-1">
                                    Upload {courseName} Syllabus
                                </p>
                                <p className="text-xs text-white/30 font-medium uppercase tracking-widest">
                                    to define your academic trajectory
                                </p>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="status"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center py-4"
                        >
                            {status === 'uploading' || status === 'analyzing' ? (
                                <div className="relative">
                                    <Loader2 className="w-10 h-10 text-[#8B5CF6] animate-spin mb-4" />
                                    <motion.div
                                        className="absolute inset-0 bg-[#8B5CF6]/20 blur-xl rounded-full"
                                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </div>
                            ) : status === 'success' ? (
                                <CheckCircle2 className="w-10 h-10 text-emerald-500 mb-4" />
                            ) : (
                                <AlertCircle className="w-10 h-10 text-rose-500 mb-4" />
                            )}
                            <p className="text-sm font-black uppercase tracking-[0.2em] text-white/90">{message}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {status === 'success' && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-center"
                >
                    <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">
                        Resonance Established. Identity Hub Updated.
                    </p>
                </motion.div>
            )}
        </div>
    );
}