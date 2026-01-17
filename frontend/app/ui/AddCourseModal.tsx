'use client';

import { useState } from 'react';
import { createCourse } from '@/app/lib/actions';

export default function AddCourseModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">New Course</h2>
                <p className="text-slate-500 mb-6 text-sm">What subject are we tackling today?</p>

                {/* We use a standard form with the action prop */}
                <form action={async (formData) => {
                    await createCourse(formData);
                    onClose(); // Close modal after success
                }}>
                    <input
                        name="courseName"
                        autoFocus
                        required
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800"
                        placeholder="e.g. MAT137 Calculus"
                    />

                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-3 text-slate-600 font-semibold hover:bg-slate-100 rounded-xl transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}