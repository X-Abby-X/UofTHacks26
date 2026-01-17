// frontend/app/ui/AddCourseModal.tsx
'use client';

// import { motion, AnimatePresence } from 'motion/react';
import { motion, AnimatePresence } from 'framer-motion'; // ✅ correct

import { X } from 'lucide-react';
import { createCourse } from '@/app/lib/actions';

interface AddCourseModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AddCourseModal({ isOpen, onClose }: AddCourseModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-full max-w-md bg-[#00204E] border-2 border-[#8B5CF6]/50 rounded-[2.5rem] p-8 shadow-[0_0_50px_rgba(139,92,246,0.3)]"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-black text-white uppercase italic">New Course</h2>
                            <button onClick={onClose} className="text-white/40 hover:text-white">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form action={async (formData) => {
                            await createCourse(formData);
                            onClose(); // Closes modal after server action completes
                        }} className="space-y-6">
                            <div>
                                <label className="text-[10px] font-black text-[#8B5CF6] uppercase tracking-[0.2em] mb-2 block">Course Name</label>
                                <input
                                    name="courseName"
                                    placeholder="e.g. MAT223 Linear Algebra"
                                    required
                                    autoFocus
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#8B5CF6] transition-all"
                                />
                            </div>
                            <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#8B5CF6] to-[#10B981] text-white font-black uppercase tracking-widest rounded-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all">
                                Initialize Course
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}