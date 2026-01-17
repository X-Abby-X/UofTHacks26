'use client';

// import { motion, AnimatePresence } from 'motion/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, Circle, Fingerprint, Activity, Target, Zap, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

interface Milestone {
  name: string;
  weight: number;
  score?: number;
  date?: string;
}

interface ProphetSidebarProps {
  milestones: Milestone[];
  currentGrade: number;
  archetype?: string;
  insight?: string;
}

export function ProphetSidebar({
  milestones,
  currentGrade,
  archetype = "Visionary Architect",
  insight = "Your conceptual grasp is elite, but technical precision is your final frontier."
}: ProphetSidebarProps) {
  const [targetGPA, setTargetGPA] = useState(3.7);
  const hasData = milestones && milestones.length > 0;

  // Logic to determine required grade based on UofT scale approximation
  const targetPercentage = Math.round(((targetGPA - 1) / 3) * 100);

  const calculateProjectedGrade = () => {
    const achievedWeight = milestones
      .filter((m) => m.score !== undefined)
      .reduce((sum, m) => sum + m.weight, 0);

    const achievedPoints = milestones
      .filter((m) => m.score !== undefined)
      .reduce((sum, m) => sum + (m.score! * (m.weight / 100)), 0);

    const remainingWeight = 100 - achievedWeight;

    if (achievedWeight === 0) return currentGrade > 0 ? currentGrade : 0;
    return Math.round(achievedPoints + (currentGrade * (remainingWeight / 100)));
  };

  const projectedGrade = calculateProjectedGrade();

  // IDENTITY SIGNAL: Are we meeting the resonance threshold?
  const isOnTrack = projectedGrade >= targetPercentage;

  return (
    <div
      className="h-full p-6 overflow-y-auto relative border-l border-white/10"
      style={{ background: 'rgba(5, 10, 25, 0.95)', backdropFilter: 'blur(40px)' }}
    >
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#8B5CF6] to-[#EC4899]">
            <Fingerprint className="w-6 h-6 text-white relative z-10" />
            {isOnTrack && (
              <motion.div
                className="absolute inset-0 bg-white/20"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </div>
          <div>
            <h2 className="text-xl font-black uppercase tracking-tighter text-white">Academic Persona</h2>
            <div className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isOnTrack ? 'text-emerald-400' : 'text-[#EC4899]'}`}>
              {isOnTrack ? 'Signal Harmonized' : 'Identity Alignment'}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!hasData ? (
          <div className="py-20 text-center text-white/20 uppercase tracking-widest text-xs">Awaiting Signal</div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">

            {/* 1. Flashy Status Signal */}
            <motion.div
              animate={isOnTrack ? { scale: [1, 1.02, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
              className={`p-4 rounded-2xl border-2 transition-all duration-500 ${isOnTrack
                  ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                  : 'bg-[#8B5CF6]/10 border-[#8B5CF6]/30'
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {isOnTrack ? <ShieldCheck className="w-5 h-5 text-emerald-400" /> : <Activity className="w-5 h-5 text-[#8B5CF6]" />}
                  <div>
                    <h3 className={`text-[10px] font-black uppercase tracking-widest ${isOnTrack ? 'text-emerald-400' : 'text-[#8B5CF6]'}`}>
                      {isOnTrack ? 'Identity Resonating' : 'Archetype Status'}
                    </h3>
                    <p className="text-sm font-bold text-white">{archetype}</p>
                  </div>
                </div>
                {isOnTrack && <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />}
              </div>
            </motion.div>

            {/* 2. Target GPA Slider */}
            <div className="p-5 rounded-2xl border border-white/10 bg-white/5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#EC4899]" />
                  <span className="text-xs uppercase tracking-wider text-white/60 font-bold">Target GPA</span>
                </div>
                <span className={`text-2xl font-black transition-colors ${isOnTrack ? 'text-emerald-400' : 'text-white'}`}>
                  {targetGPA.toFixed(1)}
                </span>
              </div>
              <input
                type="range"
                min="2.0"
                max="4.0"
                step="0.1"
                value={targetGPA}
                onChange={(e) => setTargetGPA(parseFloat(e.target.value))}
                className="w-full h-1.5 rounded-full appearance-none bg-white/10 accent-[#EC4899] cursor-pointer"
              />
              <div className="text-[9px] text-white/40 mt-3 font-mono italic">
                Requires ≈ {targetPercentage}% resonance
              </div>

              {isOnTrack && (
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-emerald-400"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                />
              )}
            </div>

            {/* 3. Identity Resonance (Frequency) */}
            <div className={`p-5 rounded-2xl border transition-colors duration-500 ${isOnTrack ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-[#EC4899]/30 bg-[#EC4899]/5'}`}>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs uppercase tracking-wider font-bold flex items-center gap-2 ${isOnTrack ? 'text-emerald-400' : 'text-white/60'}`}>
                  <Sparkles className="w-3 h-3" /> {isOnTrack ? 'Full Resonance' : 'Identity Resonance'}
                </span>
                <span className={`text-[10px] font-black ${isOnTrack ? 'text-emerald-400' : 'text-[#EC4899]'}`}>{projectedGrade}%</span>
              </div>
              <div className="flex items-end gap-1 h-12">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`flex-1 rounded-t-sm ${isOnTrack ? 'bg-emerald-400/40' : 'bg-[#EC4899]/20'}`}
                    animate={{ height: isOnTrack ? [`${40 + Math.random() * 60}%`, `${70 + Math.random() * 30}%`] : [`${20 + Math.random() * 60}%`, `${40 + Math.random() * 50}%`] }}
                    transition={{ duration: isOnTrack ? 0.5 : 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }}
                  />
                ))}
              </div>
            </div>

            {/* 4. Chronicle of Growth */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-black">Growth Chronicle</span>
              {milestones.map((m, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[11px] font-bold text-white/70">{m.name}</span>
                  <span className={`text-xs font-black ${m.score !== undefined ? 'text-emerald-400' : 'text-white/10'}`}>
                    {m.score !== undefined ? `${m.score}%` : `${m.weight}%`}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}