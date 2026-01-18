// // // WORKING VERSION
// // // "use client";

// // // import React, { useState } from 'react';
// // // import { motion } from 'framer-motion';
// // // import { Cpu, ChevronRight, ChevronLeft, Layers, Info } from 'lucide-react';
// // // import generatedQuestions from '../../generated_questions.json'; // '@/generated_questions.json'; // Ensure this path matches your project structure

// // // export default function AssessmentPage() {
// // //     const [currentIdx, setCurrentIdx] = useState(0);
// // //     const questions = generatedQuestions.questions;
// // //     const currentQuestion = questions[currentIdx];

// // //     const nextQuestion = () => {
// // //         if (currentIdx < questions.length - 1) setCurrentIdx(currentIdx + 1);
// // //     };

// // //     const prevQuestion = () => {
// // //         if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
// // //     };

// // //     return (
// // //         <div className="min-h-screen bg-[#001533] text-white p-8 md:p-12 selection:bg-[#8B5CF6]/30">
// // //             {/* Header Telemetry */}
// // //             <div className="max-w-6xl mx-auto flex justify-between items-center mb-16 border-b border-white/5 pb-8">
// // //                 <div>
// // //                     <div className="flex items-center gap-2 mb-2">
// // //                         <Cpu className="w-4 h-4 text-[#8B5CF6] animate-pulse" />
// // //                         <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 font-mono">
// // //                             N3XU$ // Assessment Module
// // //                         </span>
// // //                     </div>
// // //                     <h1 className="text-4xl font-black uppercase tracking-tighter italic">
// // //                         Synthetic Exam <span className="text-[#8B5CF6]">v1.0</span>
// // //                     </h1>
// // //                 </div>
// // //                 <div className="text-right font-mono">
// // //                     <p className="text-[10px] text-white/20 uppercase tracking-widest">Question Sector</p>
// // //                     <p className="text-2xl font-black text-[#8B5CF6]">
// // //                         {currentIdx + 1} <span className="text-white/20">/</span> {questions.length}
// // //                     </p>
// // //                 </div>
// // //             </div>

// // //             <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
// // //                 {/* Left: Content Area */}
// // //                 <motion.div 
// // //                     key={`text-${currentIdx}`}
// // //                     initial={{ opacity: 0, x: -20 }}
// // //                     animate={{ opacity: 1, x: 0 }}
// // //                     className="space-y-8"
// // //                 >
// // //                     <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
// // //                         <Layers className="w-3 h-3 text-[#D946EF]" />
// // //                         <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
// // //                             Unit: {currentQuestion.unit}
// // //                         </span>
// // //                     </div>

// // //                     <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl relative group">
// // //                         <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#8B5CF6] rounded-2xl flex items-center justify-center font-black text-xl italic shadow-lg shadow-[#8B5CF6]/20">
// // //                             Q{currentQuestion.question_id}
// // //                         </div>
// // //                         <p className="text-xl leading-relaxed font-medium text-white/90 pt-4">
// // //                             {currentQuestion.question_text}
// // //                         </p>
// // //                     </div>

// // //                     <div className="flex items-center gap-4 pt-8">
// // //                         <button 
// // //                             onClick={prevQuestion}
// // //                             disabled={currentIdx === 0}
// // //                             className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-20 transition-all"
// // //                         >
// // //                             <ChevronLeft className="w-6 h-6" />
// // //                         </button>
// // //                         <button 
// // //                             onClick={nextQuestion}
// // //                             disabled={currentIdx === questions.length - 1}
// // //                             className="flex-1 p-4 rounded-2xl bg-[#8B5CF6] hover:bg-[#7C3AED] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#8B5CF6]/20"
// // //                         >
// // //                             Next Question <ChevronRight className="w-4 h-4" />
// // //                         </button>
// // //                     </div>
// // //                 </motion.div>

// // //                 {/* Right: Visual/Circuit Area */}
// // //                 <motion.div 
// // //                     key={`img-${currentIdx}`}
// // //                     initial={{ opacity: 0, scale: 0.95 }}
// // //                     animate={{ opacity: 1, scale: 1 }}
// // //                     className="relative group"
// // //                 >
// // //                     <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/10 to-[#D946EF]/10 rounded-[3rem] blur-2xl opacity-50" />
// // //                     <div className="relative aspect-square rounded-[3rem] bg-[#001b3d] border border-white/10 overflow-hidden flex items-center justify-center p-12 shadow-2xl">
// // //                         {/* Note: Ensure your image paths are correctly exposed 
// // //                            via the public folder or a local server.
// // //                         */}
// // //                         <img 
// // //                             src={`/${currentQuestion.rendered_image_path.replace(/\\/g, '/')}`} 
// // //                             alt="Circuit Schematic"
// // //                             className="max-w-full max-h-full object-contain filter invert opacity-90 group-hover:opacity-100 transition-opacity"
// // //                         />
                        
// // //                         <div className="absolute bottom-6 right-6 flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-md rounded-lg border border-white/5">
// // //                             <Info className="w-3 h-3 text-white/40" />
// // //                             <span className="text-[9px] font-mono text-white/40 uppercase tracking-tighter">Rendered Schematic v2.4</span>
// // //                         </div>
// // //                     </div>
// // //                 </motion.div>
// // //             </main>

// // //             {/* Background Decorative Element */}
// // //             <div className="fixed bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/20 to-transparent" />
// // //         </div>
// // //     );
// // // }
// "use client";

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//     Cpu, 
//     ChevronRight, 
//     ChevronLeft, 
//     Layers, 
//     Info, 
//     Maximize2, 
//     X,
//     Search,
//     ArrowLeft
// } from 'lucide-react';
// import generatedQuestions from '../../generated_questions.json';
// import generatedQuestions291 from '../../generated_questions_291.json';

// // interface GenQuestionsPageProps {
// //   searchParams: Promise<{ courseId?: string }>;
// // }

// export default function AssessmentPage() {
//     const router = useRouter();
//     const [currentIdx, setCurrentIdx] = useState(0);
//     const [isImageExpanded, setIsImageExpanded] = useState(false);
    
//     const questions = generatedQuestions.questions;
//     const currentQuestion = questions[currentIdx];

//     const nextQuestion = () => {
//         if (currentIdx < questions.length - 1) {
//             setCurrentIdx(currentIdx + 1);
//             setIsImageExpanded(false);
//         }
//     };

//     const prevQuestion = () => {
//         if (currentIdx > 0) {
//             setCurrentIdx(currentIdx - 1);
//             setIsImageExpanded(false);
//         }
//     };

//     const getImagePath = (path: string) => `/${path.replace(/\\/g, '/')}`;

//     return (
//         <div className="min-h-screen bg-[#001533] text-white p-8 md:p-12 selection:bg-[#8B5CF6]/30">
            
//             {/* Top Navigation Bar */}
//             <div className="max-w-6xl mx-auto mb-8">
//                 <button 
//                     onClick={() => router.back()}
//                     className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#8B5CF6]/40 transition-all group"
//                 >
//                     <ArrowLeft className="w-4 h-4 text-[#8B5CF6] group-hover:-translate-x-1 transition-transform" />
//                     <span className="text-[10px] font-black uppercase tracking-widest">Return to Command</span>
//                 </button>
//             </div>

//             {/* Header Telemetry */}
//             <div className="max-w-6xl mx-auto flex justify-between items-center mb-16 border-b border-white/5 pb-8">
//                 <div>
//                     <div className="flex items-center gap-2 mb-2">
//                         <Cpu className="w-4 h-4 text-[#8B5CF6] animate-pulse" />
//                         <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 font-mono">
//                             N3XU$ // Assessment Module
//                         </span>
//                     </div>
//                     <h1 className="text-4xl font-black uppercase tracking-tighter italic">
//                         Synthetic Exam <span className="text-[#8B5CF6]">v1.0</span>
//                     </h1>
//                 </div>
//                 <div className="text-right font-mono">
//                     <p className="text-[10px] text-white/20 uppercase tracking-widest">Question Sector</p>
//                     <p className="text-2xl font-black text-[#8B5CF6]">
//                         {currentIdx + 1} <span className="text-white/20">/</span> {questions.length}
//                     </p>
//                 </div>
//             </div>

//             <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
//                 {/* Left: Content Area */}
//                 <motion.div 
//                     key={`text-${currentIdx}`}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     className="space-y-8"
//                 >
//                     <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
//                         <Layers className="w-3 h-3 text-[#D946EF]" />
//                         <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
//                             Unit: {currentQuestion.unit}
//                         </span>
//                     </div>

//                     <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl relative group">
//                         <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#8B5CF6] rounded-2xl flex items-center justify-center font-black text-xl italic shadow-lg shadow-[#8B5CF6]/20">
//                             Q{currentQuestion.question_id}
//                         </div>
//                         <p className="text-xl leading-relaxed font-medium text-white/90 pt-4">
//                             {currentQuestion.question_text}
//                         </p>
//                     </div>

//                     <div className="flex items-center gap-4 pt-8">
//                         <button 
//                             onClick={prevQuestion}
//                             disabled={currentIdx === 0}
//                             className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-20 transition-all"
//                         >
//                             <ChevronLeft className="w-6 h-6" />
//                         </button>
//                         <button 
//                             onClick={nextQuestion}
//                             disabled={currentIdx === questions.length - 1}
//                             className="flex-1 p-4 rounded-2xl bg-[#8B5CF6] hover:bg-[#7C3AED] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#8B5CF6]/20"
//                         >
//                             Next Question <ChevronRight className="w-4 h-4" />
//                         </button>
//                     </div>
//                 </motion.div>

//                 {/* Right: Visual/Circuit Area */}
//                 <motion.div 
//                     key={`img-${currentIdx}`}
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="relative group cursor-zoom-in"
//                     onClick={() => setIsImageExpanded(true)}
//                 >
//                     <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/10 to-[#D946EF]/10 rounded-[3rem] blur-2xl opacity-50" />
//                     <div className="relative aspect-square rounded-[3rem] bg-[#001b3d] border border-white/10 overflow-hidden flex items-center justify-center p-12 shadow-2xl transition-transform hover:scale-[1.01] active:scale-[0.99]">
                        
//                         <div className="absolute inset-0 bg-[#8B5CF6]/0 group-hover:bg-[#8B5CF6]/5 transition-colors flex items-center justify-center">
//                             <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
//                         </div>

//                         <img 
//                             src={getImagePath(currentQuestion.rendered_image_path)} 
//                             alt="Circuit Schematic"
//                             className="max-w-full max-h-full object-contain filter invert opacity-90 group-hover:opacity-100 transition-opacity"
//                         />
                        
//                         <div className="absolute bottom-6 right-6 flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-md rounded-lg border border-white/5">
//                             <Search className="w-3 h-3 text-white/40" />
//                             <span className="text-[9px] font-mono text-white/40 uppercase tracking-tighter">Click to Expand Schematic</span>
//                         </div>
//                     </div>
//                 </motion.div>
//             </main>

//             {/* Image Expansion Modal */}
//             <AnimatePresence>
//                 {isImageExpanded && (
//                     <motion.div 
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         onClick={() => setIsImageExpanded(false)}
//                         className="fixed inset-0 z-[100] bg-[#000a1a]/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-20 cursor-zoom-out"
//                     >
//                         <motion.button 
//                             initial={{ scale: 0 }}
//                             animate={{ scale: 1 }}
//                             className="absolute top-10 right-10 p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
//                         >
//                             <X className="w-6 h-6 text-white" />
//                         </motion.button>

//                         <motion.img 
//                             initial={{ scale: 0.8, opacity: 0 }}
//                             animate={{ scale: 1, opacity: 1 }}
//                             exit={{ scale: 0.8, opacity: 0 }}
//                             src={getImagePath(currentQuestion.rendered_image_path)} 
//                             alt="Expanded Schematic"
//                             className="max-w-full max-h-full object-contain filter invert drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]"
//                         />

//                         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 font-mono text-[10px] uppercase tracking-[0.5em]">
//                             N3XU$ // Optical Zoom Active
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             <div className="fixed bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/20 to-transparent" />
//         </div>
//     );
// }

// BOTH QUESTION
import { db } from '@/drizzle/index';
import { courses } from '@/drizzle/db/schema';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Cpu, Sparkles } from 'lucide-react';

// Import your JSON datasets
import eceData from '../../generated_questions.json';
import matData from '../../generated_questions_291.json';

// Define Question Interface to help TypeScript/Turbopack understand the map
interface Question {
  question_id: number;
  unit: string;
  question_text: string;
  requires_image: boolean;
  rendered_image_path?: string;
}

interface GenQuestionsPageProps {
  params: Promise<{ id: string }>; // If you use dynamic routes
  searchParams: Promise<{ courseId?: string }>;
}

export default async function GenQuestionsPage({ searchParams }: GenQuestionsPageProps) {
  const resolvedSearchParams = await searchParams;
  const courseId = resolvedSearchParams.courseId;

  if (!courseId) notFound();

  const course = await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
  });

  if (!course) notFound();

  const courseNameNormalized = course.name.toLowerCase();
  
  // Explicitly select the dataset [cite: 74, 113, 257, 283]
  const dataset = courseNameNormalized.includes('mat291') ? matData : eceData;

  return (
    <div className="min-h-screen bg-[#020617] text-white p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="flex justify-between items-center border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <Link 
              href={`/course/${courseId}`}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-black uppercase tracking-tighter italic">
                Synthetic Practice
              </h1>
              <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                Sector: {course.name} // Neural_Gen_v1.0
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30">
            <Cpu className="w-4 h-4 text-[#8B5CF6]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B5CF6]">
              {dataset.questions.length} Questions Synthesized
            </span>
          </div>
        </header>

        <div className="grid gap-8">
          {(dataset.questions as Question[]).map((q) => (
            <div 
              key={q.question_id} 
              className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-[#8B5CF6]/30 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono text-white/40 uppercase tracking-wider">
                    Unit: {q.unit}
                  </span>
                  <h2 className="mt-4 text-xl font-bold text-white/90">
                    Question {q.question_id}
                  </h2>
                </div>
                <Sparkles className="w-5 h-5 text-[#8B5CF6] opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-lg leading-relaxed text-white/70 mb-8 whitespace-pre-wrap">
                {q.question_text}
              </p>

              {q.requires_image && q.rendered_image_path && (
                <div className="relative aspect-video rounded-2xl bg-[#0a0f1d] border border-white/5 overflow-hidden flex items-center justify-center p-4">
                   <img 
                    src={`/${q.rendered_image_path}`} 
                    alt={`Schematic for Question ${q.question_id}`}
                    className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                   />
                   <div className="absolute top-4 right-4 text-[9px] font-mono text-white/20 uppercase">
                     Static_Render_Node_Alpha
                   </div>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
                <button className="px-6 py-2 rounded-xl bg-white/5 hover:bg-[#8B5CF6] hover:text-white text-xs font-black uppercase tracking-widest transition-all">
                  Show Analysis
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}