// frontend/app/ui/DeleteSyllabusBtn.tsx
'use client';

import { useState } from 'react';
import { Trash2, RefreshCcw, Loader2 } from 'lucide-react';
import { deleteSyllabusAction } from '@/app/lib/actions';

export default function DeleteSyllabusBtn({ courseId }: { courseId: string }) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [confirm, setConfirm] = useState(false);

    const handleDelete = async () => {
        if (!confirm) {
            setConfirm(true);
            setTimeout(() => setConfirm(false), 3000); // Reset after 3 seconds
            return;
        }

        setIsDeleting(true);
        try {
            await deleteSyllabusAction(courseId);
        } catch (err) {
            alert("Failed to reset syllabus.");
        } finally {
            setIsDeleting(false);
            setConfirm(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${confirm
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-white/5 text-white/40 hover:bg-red-500/20 hover:text-red-400'
                }`}
        >
            {isDeleting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
            ) : confirm ? (
                <>Confirm Reset?</>
            ) : (
                <>
                    <RefreshCcw className="w-4 h-4" />
                    Reset Syllabus
                </>
            )}
        </button>
    );
}