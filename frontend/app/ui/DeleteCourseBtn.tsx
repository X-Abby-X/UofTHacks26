'use client';

import { Trash2, Loader2 } from 'lucide-react';
import { deleteCourse } from '@/app/lib/actions';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';

export function DeleteCourseBtn({ courseId }: { courseId: string }) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handlePurge = async (e: React.MouseEvent) => {
        // These are crucial to prevent the Link from firing
        e.preventDefault();
        e.stopPropagation();

        if (!window.confirm("Purge this identity from the Nexus?")) return;

        // This proves the button is receiving the click
        console.log("PURGE BUTTON: Captured click for ID", courseId);

        startTransition(async () => {
            try {
                const result = await deleteCourse(courseId);
                if (result?.success) {
                    router.refresh(); // Refresh the Server Component grid
                }
            } catch (err) {
                console.error("PURGE ERROR:", err);
            }
        });
    };

    return (
        <button
            type="button"
            disabled={isPending}
            onClick={handlePurge}
            // pointer-events-auto ensures this button stays clickable 
            // even if something else is trying to cover it.
            className={`p-2.5 rounded-xl border transition-all pointer-events-auto relative shadow-2xl ${isPending
                ? 'bg-rose-500/50 cursor-not-allowed opacity-100'
                : 'bg-[#020617] border-rose-500/30 text-rose-500 hover:bg-rose-500 hover:text-white active:scale-95'
                }`}
        >
            {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
        </button>
    );
}