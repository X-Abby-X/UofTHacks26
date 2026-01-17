'use client'; // This allows for interactive state

import { useState } from 'react';
import AddCourseModal from './AddCourseModal';
import { Plus } from 'lucide-react';

export function AddCourseButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 px-6 py-3 bg-[#8B5CF6] text-white font-black uppercase tracking-widest rounded-2xl shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            >
                <Plus className="w-5 h-5" />
                Add Course
            </button>

            <AddCourseModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}