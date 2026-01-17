"use client";

import { motion } from "framer-motion";
import { AlertCircle, Lightbulb, Hash, Zap } from "lucide-react";

interface AICardProps {
  questionNumber: number | string;
  detectedMistake: string;
  aiTip: string;
  unitId: string;
  delay?: number;
}

export const AICard = ({
  questionNumber,
  detectedMistake,
  aiTip,
  unitId,
  delay = 0
}: AICardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="relative group w-full"
    >
      {/* Main Card Body */}
      <div className="relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl transition-all duration-300 group-hover:border-[#8B5CF6]/40 group-hover:bg-white/[0.04]">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#8B5CF6]/10 rounded-2xl border border-[#8B5CF6]/20">
              <Hash className="w-5 h-5 text-[#8B5CF6]" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Telemetry Detail</span>
              <h4 className="text-2xl font-black uppercase tracking-tighter">Question {questionNumber}</h4>
            </div>
          </div>

          <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono font-bold text-white/40 tracking-widest uppercase">
              Unit: {unitId}
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Error Detection */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-rose-400">
              <AlertCircle className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Anomaly Detected</span>
            </div>
            <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/10">
              <p className="text-sm text-white/70 leading-relaxed italic">
                "{detectedMistake}"
              </p>
            </div>
          </div>

          {/* AI Logic / Study Tip */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#D946EF]">
              <Lightbulb className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Neural Guidance</span>
            </div>
            <div className="p-5 rounded-2xl bg-[#D946EF]/5 border border-[#D946EF]/10">
              <p className="text-sm text-white/70 leading-relaxed">
                {aiTip}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Aura Bar */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

// 'use client';
// import { motion, useMotionValue, useTransform } from 'motion/react';
// import { Brain, AlertCircle, Lightbulb } from 'lucide-react';
// import { useState, useRef } from 'react';

// interface AICardProps {
//   questionNumber: number;
//   detectedMistake: string;
//   aiTip: string;
//   unitId: string;
//   delay?: number;
// }

// export function AICard({ questionNumber, detectedMistake, aiTip, unitId, delay = 0 }: AICardProps) {
//   const [revealed, setRevealed] = useState(false);
//   const cardRef = useRef<HTMLDivElement>(null);

//   // 3D tilt effect
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const rotateX = useTransform(y, [-100, 100], [10, -10]);
//   const rotateY = useTransform(x, [-100, 100], [-10, 10]);

//   const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;
//     x.set(event.clientX - centerX);
//     y.set(event.clientY - centerY);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       className="relative group"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         rotateX,
//         rotateY,
//         transformStyle: 'preserve-3d',
//       }}
//       whileHover={{ scale: 1.02 }}
//     >
//       {/* Rotating conic border effect */}
//       <div className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//         <motion.div
//           className="absolute inset-0 rounded-lg"
//           style={{
//             background: 'conic-gradient(from 0deg, #8B5CF6, #10B981, #F59E0B, #8B5CF6)',
//           }}
//           animate={{ rotate: 360 }}
//           transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
//         />
//       </div>

//       {/* Card Content */}
//       <div
//         className="relative rounded-lg p-6"
//         style={{
//           background: 'rgba(0, 32, 78, 0.85)',
//           backdropFilter: 'blur(24px)',
//           border: '1px solid rgba(139, 92, 246, 0.4)',
//           boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(139, 92, 246, 0.1)',
//         }}
//       >
//         {/* Question Badge */}
//         <div className="flex items-start justify-between mb-4">
//           <motion.div
//             className="px-4 py-2 rounded-md font-black text-sm uppercase tracking-wider relative overflow-hidden"
//             style={{
//               background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
//               boxShadow: '0 0 25px rgba(139, 92, 246, 0.6), 5px 5px 0 rgba(139, 92, 246, 0.35)',
//             }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <span className="relative z-10">Question #{questionNumber}</span>
//             {/* Shimmer on badge */}
//             <motion.div
//               className="absolute inset-0"
//               style={{
//                 background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
//               }}
//               animate={{
//                 x: ['-100%', '200%'],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: 'linear',
//                 delay: delay,
//               }}
//             />
//           </motion.div>
//           <div className="flex items-center gap-2">
//             <Brain className="w-5 h-5 text-[#8B5CF6]" />
//             <div className="text-xs text-white/40 uppercase tracking-wider" style={{ fontFamily: 'monospace' }}>
//               {unitId.toUpperCase()}
//             </div>
//           </div>
//         </div>

//         {/* Detected Mistake Section */}
//         <div className="mb-4">
//           <div className="flex items-center gap-2 mb-2">
//             <AlertCircle className="w-4 h-4 text-[#EF4444]" />
//             <div className="text-xs uppercase tracking-wider text-[#EF4444] font-bold">
//               Detected Mistake
//             </div>
//           </div>
//           <div
//             className="relative p-4 rounded-md overflow-hidden cursor-pointer"
//             onClick={() => setRevealed(!revealed)}
//             style={{
//               background: 'rgba(239, 68, 68, 0.15)',
//               border: '1px solid rgba(239, 68, 68, 0.4)',
//             }}
//           >
//             {/* Blur-reveal overlay with animated redaction bars */}
//             {!revealed && (
//               <motion.div
//                 className="absolute inset-0 flex items-center justify-center"
//                 initial={{ opacity: 1 }}
//                 whileHover={{ opacity: 0.8 }}
//               >
//                 {/* Animated redaction bars */}
//                 <div className="absolute inset-0 overflow-hidden">
//                   {[...Array(6)].map((_, i) => (
//                     <motion.div
//                       key={i}
//                       className="absolute w-full h-3"
//                       style={{
//                         top: `${10 + i * 15}%`,
//                         background: 'rgba(239, 68, 68, 0.9)',
//                         boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
//                       }}
//                       initial={{ scaleX: 0.3 }}
//                       animate={{
//                         scaleX: [0.3, 0.95, 0.3],
//                         opacity: [0.9, 1, 0.9],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         delay: i * 0.1,
//                         ease: 'easeInOut',
//                       }}
//                     />
//                   ))}
//                 </div>
//                 <div
//                   className="relative z-10 px-4 py-2 rounded-md"
//                   style={{
//                     background: 'rgba(0, 32, 78, 0.95)',
//                     border: '1px solid #EF4444',
//                   }}
//                 >
//                   <div className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2">
//                     <motion.div
//                       animate={{ opacity: [0.5, 1, 0.5] }}
//                       transition={{ duration: 1.5, repeat: Infinity }}
//                     >
//                       🔒
//                     </motion.div>
//                     Click to Reveal
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//             <motion.div
//               className="text-sm text-white/90 leading-relaxed"
//               animate={{
//                 opacity: revealed ? 1 : 0,
//                 filter: revealed ? 'blur(0px)' : 'blur(8px)',
//               }}
//               transition={{ duration: 0.5 }}
//             >
//               {detectedMistake}
//             </motion.div>
//           </div>
//         </div>

//         {/* AI Study Tip */}
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: 'auto' }}
//           transition={{ delay: delay + 0.3 }}
//         >
//           <div className="flex items-center gap-2 mb-2">
//             <Lightbulb className="w-4 h-4 text-[#10B981]" />
//             <div className="text-xs uppercase tracking-wider text-[#10B981] font-bold">
//               AI Study Tip
//             </div>
//           </div>
//           <div
//             className="relative p-4 rounded-md overflow-hidden"
//             style={{
//               background: 'rgba(16, 185, 129, 0.15)',
//               border: '2px solid #10B981',
//               boxShadow: '0 0 20px rgba(16, 185, 129, 0.4), inset 0 0 20px rgba(16, 185, 129, 0.1)',
//             }}
//           >
//             <div className="text-sm text-white/90 leading-relaxed relative z-10">{aiTip}</div>
//             {/* Neon bloom effect */}
//             <motion.div
//               className="absolute -top-10 -right-10 w-24 h-24 rounded-full"
//               style={{
//                 background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
//                 filter: 'blur(20px)',
//               }}
//               animate={{
//                 scale: [1, 1.2, 1],
//                 opacity: [0.3, 0.5, 0.3],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }


