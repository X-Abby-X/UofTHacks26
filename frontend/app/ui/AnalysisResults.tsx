'use client';
// frontend/app/ui/AnalysisResults.tsx
export default function AnalysisResults({ report }: { report: any[] }) {
    return (
        <div className="mt-8 space-y-6">
            {report.map((item, index) => (
                <div key={index} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-indigo-100 text-indigo-700 font-bold px-3 py-1 rounded-lg text-sm">
                            Question {item.question_number || index + 1}
                        </span>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Detected Error</h4>
                            <p className="text-slate-800 font-medium">{item.detected_error}</p>
                        </div>
                        <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                            <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Study Tip</h4>
                            <p className="text-emerald-800 text-sm leading-relaxed">{item.study_tip}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}