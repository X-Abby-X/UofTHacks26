// // import { db } from '@/drizzle/index';
// // import { courses, submissions } from '@/drizzle/db/schema';
// // import { eq, desc } from 'drizzle-orm';
// // import { notFound } from 'next/navigation';
// // import { GradeGauge } from '@/app/ui/GradeGauge';
// // import { ProphetSidebar } from '@/app/ui/ProphetSidebar';
// // import { AICard } from '@/app/ui/AICard';
// // import CreateSubmissionBtn from '@/app/ui/CreateSubmissionBtn';
// // import DeleteSyllabusBtn from '@/app/ui/DeleteSyllabusBtn';
// // import FileUploader from '@/app/ui/FileUploader';
// // import { processSyllabusAction } from '@/app/lib/actions';

// // export default async function CourseDetailPage({ params }: { params: { id: string } }) {
// //     const { id } = await params;

// //     // 1. Fetch Course and latest Submissions
// //     const course = await db.query.courses.findFirst({
// //         where: eq(courses.id, id),
// //     });

// //     const allSubmissions = await db.query.submissions.findMany({
// //         where: eq(submissions.courseId, id),
// //         orderBy: [desc(submissions.createdAt)],
// //     });

// //     if (!course) notFound();

// //     const latestSubmission = allSubmissions[0];
// //     const milestones = (course.milestones as any[]) || [];
// //     const currentGrade = course.currentGrade || 0;

// //     return (
// //         <div className="flex h-screen bg-[#020617] text-white overflow-hidden">
// //             {/* LEFT: Neural Analysis Feed */}
// //             <main className="flex-1 overflow-y-auto p-12 custom-scrollbar">
// //                 <header className="flex justify-between items-start mb-12">
// //                     <div>
// //                         <h1 className="text-5xl font-black tracking-tighter uppercase italic text-white mb-2">
// //                             {course.name}
// //                         </h1>
// //                         <p className="text-white/40 text-xs font-mono tracking-widest uppercase">
// //                             Sector: ECE231 // Node: {id.slice(0, 8)}
// //                         </p>
// //                     </div>
// //                     <div className="flex gap-4">
// //                         <DeleteSyllabusBtn courseId={id} />
// //                         <CreateSubmissionBtn courseId={id} userId="system-user" />
// //                     </div>
// //                 </header>

// //                 {/* 2. SYLLABUS INITIALIZATION: Only show if no milestones exist */}
// //                 {milestones.length === 0 ? (
// //                     <div className="flex flex-col items-center justify-center h-[50vh] border-2 border-dashed border-white/10 rounded-[3rem] bg-white/[0.02]">
// //                         <h3 className="text-xl font-black uppercase tracking-widest mb-6">Initialize Neural Roadmap</h3>
// //                         <FileUploader
// //                             bucket="uofthacks-2026"
// //                             userID="system-user"
// //                             courseID={id}
// //                             folder="syllabus_files"
// //                             onSuccess={async (path) => {
// //                                 'use server';
// //                                 await processSyllabusAction(id, path);
// //                             }}
// //                         />
// //                     </div>
// //                 ) : (
// //                     <div className="space-y-8">
// //                         <GradeGauge currentGrade={currentGrade} />

// //                         <div className="space-y-6">
// //                             <h2 className="text-xs font-black uppercase tracking-[0.4em] text-white/20">Neural Guidance Feed</h2>
// //                             {/* 3. Display KCL/Diode AI Cards from Python Report */}
// //                             {latestSubmission?.analysisReport?.map((item: any, idx: number) => (
// //                                 <AICard
// //                                     key={idx}
// //                                     questionNumber={item.question_number}
// //                                     detectedMistake={item.detected_error}
// //                                     aiTip={item.study_tip}
// //                                     unitId={item.unit_id}
// //                                     delay={idx * 0.1}
// //                                 />
// //                             ))}
// //                         </div>
// //                     </div>
// //                 )}
// //             </main>

// //             {/* RIGHT: Prophet Sidebar (Resonance & Chronology) */}
// //             <aside className="w-[400px]">
// //                 <ProphetSidebar
// //                     milestones={milestones}
// //                     currentGrade={currentGrade}
// //                 />
// //             </aside>
// //         </div>
// //     );
// // }

// // WORKING VERSION 2
// import { db } from '@/drizzle/index';
// import { courses, submissions } from '@/drizzle/db/schema';
// import { eq, desc } from 'drizzle-orm';
// import { notFound } from 'next/navigation';
// import Link from 'next/link';
// import * as motion from "framer-motion/client"; // Use client-side motion for Server Components
// import { Cpu, ChevronRight } from 'lucide-react';
// import { GradeGauge } from '@/app/ui/GradeGauge';
// import { ProphetSidebar } from '@/app/ui/ProphetSidebar';
// import { AICard } from '@/app/ui/AICard';
// import CreateSubmissionBtn from '@/app/ui/CreateSubmissionBtn';
// import DeleteSyllabusBtn from '@/app/ui/DeleteSyllabusBtn';
// import FileUploader from '@/app/ui/FileUploader';
// import { processSyllabusAction } from '@/app/lib/actions';

// export default async function CourseDetailPage({ params }: { params: { id: string } }) {
//     const { id } = await params;

//     // 1. Fetch Course and latest Submissions
//     const course = await db.query.courses.findFirst({
//         where: eq(courses.id, id),
//     });

//     const allSubmissions = await db.query.submissions.findMany({
//         where: eq(submissions.courseId, id),
//         orderBy: [desc(submissions.createdAt)],
//     });

//     if (!course) notFound();

//     const latestSubmission = allSubmissions[0];
//     const milestones = (course.milestones as any[]) || [];
//     const currentGrade = course.currentGrade || 0;

//     // Logic: Submission is posted if at least one milestone has a score
//     const hasSubmission = milestones.some(m => m.score !== undefined && m.score !== null);

//     return (
//         <div className="flex h-screen bg-[#020617] text-white overflow-hidden">
//             {/* LEFT: Neural Analysis Feed */}
//             <main className="flex-1 overflow-y-auto p-12 custom-scrollbar">
//                 <header className="flex justify-between items-start mb-12">
//                     <div>
//                         <h1 className="text-5xl font-black tracking-tighter uppercase italic text-white mb-2">
//                             {course.name}
//                         </h1>
//                         <p className="text-white/40 text-xs font-mono tracking-widest uppercase">
//                             Sector: ECE231 // Node: {id.slice(0, 8)}
//                         </p>
//                     </div>
//                     <div className="flex gap-4">
//                         <DeleteSyllabusBtn courseId={id} />
//                         <CreateSubmissionBtn courseId={id} userId="system-user" />
//                     </div>
//                 </header>

//                 {/* 2. SYLLABUS INITIALIZATION */}
//                 {milestones.length === 0 ? (
//                     <div className="flex flex-col items-center justify-center h-[50vh] border-2 border-dashed border-white/10 rounded-[3rem] bg-white/[0.02]">
//                         <h3 className="text-xl font-black uppercase tracking-widest mb-6">Initialize Neural Roadmap</h3>
//                         <FileUploader
//                             bucket="uofthacks-2026"
//                             userID="system-user"
//                             courseID={id}
//                             folder="syllabus_files"
//                             onSuccess={async (path) => {
//                                 'use server';
//                                 await processSyllabusAction(id, "system-user", path);
//                             }}
//                         />
//                     </div>
//                 ) : (
//                     <div className="space-y-8">
//                         <GradeGauge currentGrade={currentGrade} />

//                         {/* 3. SYNTHETIC EXAM BUTTON (Condition: Submission Detected)
//                         {hasSubmission && (
//                             <Link href="/genQuestions">
//                                 <motion.div 
//                                     whileHover={{ scale: 1.02, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
//                                     whileTap={{ scale: 0.98 }}
//                                     className="group flex items-center justify-between p-4 rounded-2xl transition-all border bg-white/5 border-white/10 hover:border-[#8B5CF6]/40"
//                                 >
//                                     <div className="flex items-center gap-4">
//                                         <div className="p-2.5 rounded-xl transition-colors bg-white/5 text-white/40 group-hover:text-[#8B5CF6]">
//                                             <Cpu className="w-4 h-4" />
//                                         </div>
//                                         <div>
//                                             <span className="block text-[11px] font-black uppercase tracking-widest text-white">Synthetic Exam</span>
//                                             <span className="block text-[9px] text-emerald-400 font-mono uppercase tracking-tighter animate-pulse">Neural_Link_Active</span>
//                                         </div>
//                                     </div>
//                                     <ChevronRight className="w-4 h-4 transition-all text-white/10 group-hover:text-[#8B5CF6] group-hover:translate-x-1" />
//                                 </motion.div>
//                             </Link>
//                         )} */}
//                         {/* 3. SYNTHETIC EXAM BUTTON: Refined N3XU$ Aesthetic */}
//                         {hasSubmission && (
//                             <Link href="/genQuestions">
//                                 <motion.div 
//                                     whileHover={{ scale: 1.01, borderColor: 'rgba(139, 92, 246, 0.5)' }}
//                                     whileTap={{ scale: 0.99 }}
//                                     className="group relative flex items-center justify-between p-6 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.04] shadow-2xl"
//                                 >
//                                     {/* Inner Glow Effect */}
//                                     <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
                                    
//                                     <div className="flex items-center gap-6 relative z-10">
//                                         {/* Icon Container with Dual-Ring Border */}
//                                         <div className="relative">
//                                             <div className="absolute inset-0 bg-[#8B5CF6]/20 blur-xl rounded-full group-hover:bg-[#8B5CF6]/40 transition-colors" />
//                                             <div className="relative p-4 rounded-2xl bg-[#0a0f1d] border border-white/10 group-hover:border-[#8B5CF6]/50 transition-colors">
//                                                 <Cpu className="w-6 h-6 text-[#8B5CF6]" />
//                                             </div>
//                                         </div>

//                                         <div>
//                                             <div className="flex items-center gap-2 mb-1.5">
//                                                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
//                                                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500/80 font-mono">
//                                                     Neural Link: Active
//                                                 </span>
//                                             </div>
//                                             <h3 className="text-xl font-black uppercase tracking-tighter text-white italic group-hover:text-[#8B5CF6] transition-colors">
//                                                 Synthetic Practice Sector
//                                             </h3>
//                                             <p className="text-[10px] text-white/30 font-mono uppercase tracking-widest mt-0.5">
//                                                 Generate schematics based on detected errors
//                                             </p>
//                                         </div>
//                                     </div>
                                    
//                                     <div className="flex flex-col items-end gap-1 relative z-10">
//                                         <div className="flex items-center gap-2 text-white/20 group-hover:text-white transition-colors">
//                                             <span className="text-[9px] font-black uppercase tracking-[0.2em]">Initialize</span>
//                                             <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                                         </div>
//                                         <div className="w-24 h-[1px] bg-white/5 overflow-hidden">
//                                             <motion.div 
//                                                 className="h-full bg-[#8B5CF6]"
//                                                 animate={{ x: [-100, 100] }}
//                                                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                                             />
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             </Link>
//                         )}

//                         <div className="space-y-6">
//                             <br />
//                             <h2 className="text-xs font-black uppercase tracking-[0.4em] text-white/20">Neural Guidance Feed</h2>
//                             {/* 4. Display AI Cards */}
//                             {latestSubmission?.analysisReport?.map((item: any, idx: number) => (
//                                 <AICard
//                                     key={idx}
//                                     questionNumber={item.question_number}
//                                     detectedMistake={item.detected_error}
//                                     aiTip={item.study_tip}
//                                     unitId={item.unit_id}
//                                     delay={idx * 0.1}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 )}
//             </main>

//             {/* RIGHT: Prophet Sidebar */}
//             <aside className="w-[400px]">
//                 <ProphetSidebar
//                     milestones={milestones}
//                     currentGrade={currentGrade}
//                 />
//             </aside>
//         </div>
//     );
// }

import { db } from '@/drizzle/index';
import { courses, submissions } from '@/drizzle/db/schema';
import { eq, desc } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import * as motion from "framer-motion/client";
import { Cpu, ChevronRight, Zap } from 'lucide-react';
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
    const hasSubmission = milestones.some(m => m.score !== undefined && m.score !== null);

    return (
        <div className="flex h-screen bg-[#020617] text-white overflow-hidden">
            {/* LEFT: Neural Analysis Feed */}
            <main className="flex-1 overflow-y-auto p-12 custom-scrollbar">
                
                {/* REFINED HEADER: Displays User Inputted Name & Course ID */}
                <header className="flex justify-between items-start mb-12">
                    <div>
                        <h1 className="text-5xl font-black tracking-tighter uppercase italic text-white mb-2 leading-none">
                            {course.name}
                        </h1>
                        <div className="flex items-center gap-3">
                            <div className="px-2 py-0.5 rounded bg-[#8B5CF6]/20 border border-[#8B5CF6]/30">
                                <p className="text-[#8B5CF6] text-[10px] font-black uppercase tracking-widest font-mono">
                                    ID: {id}
                                </p>
                            </div>
                            <p className="text-white/20 text-[10px] font-mono tracking-[0.3em] uppercase">
                                Neural Node Active
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <DeleteSyllabusBtn courseId={id} />
                        <CreateSubmissionBtn courseId={id} userId="system-user" />
                    </div>
                </header>

                {/* 2. SYLLABUS INITIALIZATION */}
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
                                await processSyllabusAction(id, "system-user", path);
                            }}
                        />
                    </div>
                ) : (
                    <div className="space-y-8">
                        <GradeGauge currentGrade={currentGrade} />

                        {/* 3. REFINED SYNTHETIC EXAM BUTTON */}
                        {hasSubmission && (
                            <Link href="/genQuestions">
                                <motion.div 
                                    whileHover={{ scale: 1.01, borderColor: 'rgba(139, 92, 246, 0.5)' }}
                                    whileTap={{ scale: 0.99 }}
                                    className="group relative flex items-center justify-between p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.04] shadow-2xl"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
                                    
                                    <div className="flex items-center gap-6 relative z-10">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-[#8B5CF6]/20 blur-xl rounded-full group-hover:bg-[#8B5CF6]/40 transition-colors" />
                                            <div className="relative p-4 rounded-2xl bg-[#0a0f1d] border border-white/10 group-hover:border-[#8B5CF6]/50 transition-colors">
                                                <Cpu className="w-6 h-6 text-[#8B5CF6]" />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2 mb-1.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                                                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500/80 font-mono">
                                                    Neural Link: Active
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-black uppercase tracking-tighter text-white italic group-hover:text-[#8B5CF6] transition-colors">
                                                Synthetic Practice Sector
                                            </h3>
                                            <p className="text-[10px] text-white/30 font-mono uppercase tracking-widest mt-0.5">
                                                Generate schematics based on detected errors
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col items-end gap-1 relative z-10">
                                        <div className="flex items-center gap-2 text-white/20 group-hover:text-white transition-colors">
                                            <span className="text-[9px] font-black uppercase tracking-[0.2em]">Initialize</span>
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                        <div className="w-24 h-[1px] bg-white/5 overflow-hidden">
                                            <motion.div 
                                                className="h-full bg-[#8B5CF6]"
                                                animate={{ x: [-100, 100] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        )}

                        <div className="space-y-6">
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-white/20">Neural Guidance Feed</h2>
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

            <aside className="w-[400px]">
                <ProphetSidebar
                    milestones={milestones}
                    currentGrade={currentGrade}
                />
            </aside>
        </div>
    );
}