import { db } from '@/drizzle/index';
import { courses, submissions } from '@/drizzle/db/schema';
import { eq, desc } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import { GradeGauge } from '@/app/ui/GradeGauge';
import { ProphetSidebar } from '@/app/ui/ProphetSidebar';
import { AICard } from '@/app/ui/AICard';
import CreateSubmissionBtn from '@/app/ui/CreateSubmissionBtn';
import DeleteSyllabusBtn from '@/app/ui/DeleteSyllabusBtn';
import FileUploader from '@/app/ui/FileUploader';
import { processSyllabusAction } from '@/app/lib/actions';

export default async function CourseDetailPage({ params }: { params: { id: string } }) {
    const { id } = await params;

    // 1. Fetch Course and latest Submissions
    const course = await db.query.courses.findFirst({
        where: eq(courses.id, id),
    });

    const allSubmissions = await db.query.submissions.findMany({
        where: eq(submissions.courseId, id),
        orderBy: [desc(submissions.createdAt)],
    });

    if (!course) notFound();

    const latestSubmission = allSubmissions[0];
    const milestones = (course.milestones as any[]) || [];
    const currentGrade = course.currentGrade || 0;

    return (
        <div className="flex h-screen bg-[#020617] text-white overflow-hidden">
            {/* LEFT: Neural Analysis Feed */}
            <main className="flex-1 overflow-y-auto p-12 custom-scrollbar">
                <header className="flex justify-between items-start mb-12">
                    <div>
                        <h1 className="text-5xl font-black tracking-tighter uppercase italic text-white mb-2">
                            {course.name}
                        </h1>
                        <p className="text-white/40 text-xs font-mono tracking-widest uppercase">
                            Sector: ECE231 // Node: {id.slice(0, 8)}
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <DeleteSyllabusBtn courseId={id} />
                        <CreateSubmissionBtn courseId={id} userId="system-user" />
                    </div>
                </header>

                {/* 2. SYLLABUS INITIALIZATION: Only show if no milestones exist */}
                {milestones.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[50vh] border-2 border-dashed border-white/10 rounded-[3rem] bg-white/[0.02]">
                        <h3 className="text-xl font-black uppercase tracking-widest mb-6">Initialize Neural Roadmap</h3>
                        <FileUploader
                            bucket="uofthacks-2026"
                            userID="system-user"
                            courseID={id}
                            folder="syllabus_files"
                            onSuccess={async (path) => {
                                'use server';
                                await processSyllabusAction(id, path);
                            }}
                        />
                    </div>
                ) : (
                    <div className="space-y-8">
                        <GradeGauge currentGrade={currentGrade} />

                        <div className="space-y-6">
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-white/20">Neural Guidance Feed</h2>
                            {/* 3. Display KCL/Diode AI Cards from Python Report */}
                            {latestSubmission?.analysisReport?.map((item: any, idx: number) => (
                                <AICard
                                    key={idx}
                                    questionNumber={item.question_number}
                                    detectedMistake={item.detected_error}
                                    aiTip={item.study_tip}
                                    unitId={item.unit_id}
                                    delay={idx * 0.1}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </main>

            {/* RIGHT: Prophet Sidebar (Resonance & Chronology) */}
            <aside className="w-[400px]">
                <ProphetSidebar
                    milestones={milestones}
                    currentGrade={currentGrade}
                />
            </aside>
        </div>
    );
}