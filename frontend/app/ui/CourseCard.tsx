'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';

// Define the interface based on your Drizzle Schema
interface CourseCardProps {
    course: {
        id: string;
        name: string;
        grade: string | null;
        units: number;
    };
    onDelete: (id: string) => Promise<void>;
}

export const CourseCard = ({ course, onDelete }: CourseCardProps) => {
    const [isPending, startTransition] = useTransition();

    const handleDelete = async () => {
        if (confirm(`Are you sure you want to delete ${course.name}?`)) {
            startTransition(async () => {
                await onDelete(course.id);
            });
        }
    };

    return (
        <div className={`group relative bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all duration-200 ${isPending ? 'opacity-50 pointer-events-none' : ''}`}>

            {/* Top Section: Icon and Grade */}
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                </div>
                <div className="text-right">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Grade</span>
                    <p className="text-xl font-bold text-slate-800">{course.grade || 'N/A'}</p>
                </div>
            </div>

            {/* Middle Section: Course Info */}
            <Link href={`/course/${course.id}`} className="block mb-6">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                    {course.name}
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                    {course.units} syllabus units extracted
                </p>

                {/* Decorative Progress Bar */}
                <div className="w-full bg-slate-100 h-1.5 rounded-full">
                    <div
                        className="bg-blue-500 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: course.units > 0 ? '70%' : '5%' }}
                    ></div>
                </div>
            </Link>

            {/* Bottom Section: Actions */}
            <div className="flex items-center gap-2 pt-2">
                <Link
                    href={`/course/${course.id}/upload`}
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-700 font-semibold py-2.5 px-3 rounded-xl text-sm transition-all border border-transparent hover:border-blue-100"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                    Upload
                </Link>

                <button
                    onClick={handleDelete}
                    disabled={isPending}
                    className="p-2.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                    aria-label="Delete Course"
                >
                    {isPending ? (
                        <div className="h-5 w-5 border-2 border-red-500 border-t-transparent animate-spin rounded-full"></div>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};