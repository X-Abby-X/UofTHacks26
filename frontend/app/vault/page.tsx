import { db } from '@/drizzle/index';
import { submissions, courses } from '@/drizzle/db/schema';
import { eq, desc } from 'drizzle-orm';
import { FileText, ExternalLink, HardDrive, Zap } from 'lucide-react';

export default async function DocumentVaultPage() {
    // Fetch all files linked to their course names
    const vaultItems = await db.select({
        id: submissions.id,
        name: submissions.name,
        createdAt: submissions.createdAt,
        courseName: courses.name,
        // Assuming we store the URL in the analysisReport for retrieval
        reportData: submissions.analysisReport
    })
        .from(submissions)
        .innerJoin(courses, eq(submissions.courseId, courses.id))
        .orderBy(desc(submissions.createdAt));

    return (
        <main className="p-12 bg-[#020617] min-h-screen text-white">
            <header className="mb-12">
                <div className="flex items-center gap-3 mb-2">
                    <HardDrive className="w-5 h-5 text-[#8B5CF6]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">N3XU$ // Secure Storage</span>
                </div>
                <h1 className="text-5xl font-black tracking-tighter uppercase">Identity <span className="text-[#8B5CF6]">Archive</span></h1>
            </header>

            <div className="space-y-4">
                {vaultItems.map((item) => {
                    // Fallback link logic - in a real app, you'd store the URL explicitly
                    const isSyllabus = item.name.includes("Syllabus");

                    return (
                        <div key={item.id} className="group flex items-center justify-between p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#8B5CF6]/40 transition-all hover:bg-white/[0.04]">
                            <div className="flex items-center gap-6">
                                <div className={`p-4 rounded-2xl border ${isSyllabus ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-[#8B5CF6]/10 border-[#8B5CF6]/20'}`}>
                                    <FileText className={`w-6 h-6 ${isSyllabus ? 'text-emerald-400' : 'text-[#8B5CF6]'}`} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg tracking-tight uppercase">{item.name}</h3>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="text-[10px] font-black text-[#8B5CF6] uppercase tracking-widest">{item.courseName}</span>
                                        <span className="text-[10px] font-mono text-white/20">{new Date(item.createdAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>

                            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest hover:bg-[#8B5CF6] transition-all group-hover:scale-105">
                                <ExternalLink className="w-4 h-4" />
                                Retrieve Asset
                            </button>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}