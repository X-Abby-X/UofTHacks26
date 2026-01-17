import { db } from '@/drizzle/index';
import { courses, submissions } from '@/drizzle/db/schema';
import { eq, desc } from 'drizzle-orm';
import { notFound, redirect } from 'next/navigation';
import { createClient } from '@/drizzle/db/server';

// UI Components
import { GradeGauge } from '@/app/ui/GradeGauge';
import { KnowledgeGapFlow } from '@/app/ui/KnowledgeGapFlow';
import { AICard } from '@/app/ui/AICard';
import { ProphetSidebar } from '@/app/ui/ProphetSidebar';
import CreateSubmissionBtn from '@/app/ui/CreateSubmissionBtn';
import SyllabusUploadSection from '@/app/ui/SyllabusUploadSection';
import DeleteSyllabusBtn from '@/app/ui/DeleteSyllabusBtn';
import { Sparkles } from 'lucide-react';

export default async function CourseDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id: courseId } = await params;
    const supabaseServer = await createClient();
    const { data: { user } } = await supabaseServer.auth.getUser();

    if (!user) {
        redirect('/login');
    }

    const userId = user.id;

    const course = await db.query.courses.findFirst({
        where: eq(courses.id, courseId),
    });

    if (!course) return notFound();

    const latestSubmission = await db.query.submissions.findFirst({
        where: eq(submissions.courseId, courseId),
        orderBy: [desc(submissions.createdAt)],
    });

    const report = (latestSubmission?.analysisReport as any[]) || [];
    const hasSyllabus = course.milestones && (course.milestones as any[]).length > 0;

    return (
        <div className="relative flex min-h-screen bg-[#00204E] text-white">
            <div className="flex-1 p-12 ml-20 overflow-y-auto">
                <header className="flex justify-between items-start mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-3 h-3 text-[#8B5CF6] animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 font-mono">
                                N<span className="text-[#8B5CF6]">3</span>XU<span className="text-[#D946EF]">$</span> // SEC. {courseId}
                            </span>
                        </div>
                        <h1 className="text-6xl font-black uppercase tracking-tighter">
                            {course.name}
                        </h1>
                        <div className="flex items-center gap-4 mt-2">
                            <p className="text-[#8B5CF6] font-mono uppercase tracking-widest text-sm">
                                Real-time Intelligence Detail
                            </p>
                            {hasSyllabus && <DeleteSyllabusBtn courseId={courseId} />}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {/* Directed to student_submissions folder */}
                        <CreateSubmissionBtn
                            courseId={courseId}
                            userId={userId}
                            folder="student_submissions"
                        />
                    </div>
                </header>

                {!hasSyllabus && (
                    <section className="mb-16 p-10 border-2 border-dashed border-[#8B5CF6]/40 rounded-[2.5rem] bg-[#8B5CF6]/5 flex flex-col items-center text-center">
                        <h2 className="text-2xl font-black uppercase mb-4 italic">Initialize Course Audit</h2>
                        <p className="text-white/50 mb-8 max-w-md">
                            Upload your syllabus to initialize the Marking Scheme.
                        </p>
                        {/* Directed to syllabus_files folder */}
                        <SyllabusUploadSection
                            courseId={courseId}
                            userId={userId}
                            folder="syllabus_files"
                        />
                    </section>
                )}

                <section className="mb-20">
                    <GradeGauge currentGrade={course.currentGrade || 0} />
                </section>

                <section className="mb-20">
                    <KnowledgeGapFlow report={report} />
                </section>

                <section className="grid grid-cols-1 gap-8">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-2 font-mono">
                        &gt; Telemetry Reports
                    </h3>
                    {report.length > 0 ? (report.map((item, idx) => (
                        <AICard
                            key={idx}
                            questionNumber={item.question_number}
                            detectedMistake={item.detected_error}
                            aiTip={item.study_tip}
                            unitId={item.unit_id || "General"}
                            delay={idx * 0.1}
                        />
                    ))) : (
                        <div className="p-12 border-2 border-dashed border-white/10 rounded-3xl text-center text-white/20 italic font-mono text-sm">
                            {"\u003E No assessment telemetry detected in system."}
                        </div>
                    )}
                </section>
            </div>

            <aside className="w-[400px] sticky top-0 h-screen border-l border-white/5">
                <ProphetSidebar
                    milestones={(course.milestones as any[]) || []}
                    currentGrade={course.currentGrade || 0}
                />
            </aside>
        </div>
    );
}