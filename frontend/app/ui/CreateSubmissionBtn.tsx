"use client";

import { useState } from "react";
import FileUploader from "@/app/ui/FileUploader";
import { Plus } from "lucide-react";

interface Props {
    courseId: string;
    userId: string;
    folder: string;
}

export default function CreateSubmissionBtn({ courseId, userId, folder }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-6 py-3 bg-[#8B5CF6] rounded-xl font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-[#7C3AED] transition-all"
            >
                <Plus className="w-4 h-4" /> Create Submission
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-6">
                    <div className="bg-[#00204E] border border-white/10 p-10 rounded-[3rem] max-w-lg w-full relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-8 text-white/20 hover:text-white"
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl font-black uppercase mb-2">Upload Telemetry</h2>
                        <p className="text-white/40 text-xs mb-8">Submit assessment for neural analysis.</p>

                        <FileUploader
                            bucket="uofthacks-2026"
                            userID={userId}
                            courseID={courseId}
                            folder={folder as "student_submissions"}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}