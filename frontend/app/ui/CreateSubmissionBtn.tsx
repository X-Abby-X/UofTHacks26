'use client';

import { useState } from 'react';
import { Plus, Loader2, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/drizzle/db/client';
// FIX 1: Import the correct action for midterms
import { createSubmissionAction } from '@/app/lib/actions';

export default function CreateSubmissionBtn({ courseId, userId }: { courseId: string, userId: string }) {
    const [status, setStatus] = useState<'idle' | 'syncing' | 'success'>('idle');

    const handleInstantSubmission = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setStatus('syncing');

        try {
            // 1. Vault the asset in the specific user/course hierarchy
            const fileName = `${userId}/${courseId}/submissions/${Date.now()}-${file.name}`;
            const { error: uploadError } = await supabase.storage
                .from('uofthacks-2026')
                .upload(fileName, file);

            if (uploadError) throw uploadError;

            // 2. Get the public URL for the Python backend
            const { data: { publicUrl } } = supabase.storage
                .from('uofthacks-2026')
                .getPublicUrl(fileName);

            // FIX 2: Call the Submission Action, not the Syllabus Action
            // This triggers the dummy 82% grade and KCL/Diode analysis
            const result = await createSubmissionAction(courseId, publicUrl);

            if (!result.success) throw new Error(result.error);

            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error("Submission Sync Error:", error);
            setStatus('idle');
        }
    };

    return (
        <label className="cursor-pointer">
            <input
                type="file"
                className="hidden"
                onChange={handleInstantSubmission}
                disabled={status === 'syncing'}
            />
            <div className={`px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center gap-2 transition-all ${status === 'syncing' ? 'bg-[#8B5CF6]/50 cursor-wait' : 'bg-[#8B5CF6] hover:bg-[#7C3AED]'
                }`}>
                {status === 'syncing' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                ) : status === 'success' ? (
                    <CheckCircle2 className="w-4 h-4" />
                ) : (
                    <Plus className="w-4 h-4" />
                )}
                {status === 'syncing' ? "Syncing Telemetry..." : status === 'success' ? "Synced" : "Create Submission"}
            </div>
        </label>
    );
}