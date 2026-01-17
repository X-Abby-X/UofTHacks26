'use client';

import { useState } from 'react';
import AddCourseModal from '@/app/ui/AddCourseModal';

export default function DashboardHeader() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <header className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight">Courses</h2>
                    <p className="text-slate-500 font-medium mt-2">Track your progress and analyze exam gaps.</p>
                </div>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-200 active:scale-95"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    Add Course
                </button>
            </header>

            {/* The Modal itself */}
            <AddCourseModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}