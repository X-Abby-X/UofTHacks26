'use client';
import { motion } from 'motion/react';
import { TrendingUp, Target } from 'lucide-react';

interface GlobalProphetWidgetProps {
  currentGPA: number;
  targetGPA: number;
}

export function GlobalProphetWidget({ currentGPA, targetGPA }: GlobalProphetWidgetProps) {
  const gpaData = [
    { semester: 'F23', gpa: 3.4 },
    { semester: 'W24', gpa: 3.6 },
    { semester: 'F24', gpa: currentGPA },
  ];

  const maxGPA = 4.0;
  const trend = currentGPA > gpaData[1].gpa ? 'up' : 'down';

  return (
    <motion.div
      className="p-6 rounded-xl relative overflow-hidden"
      style={{
        background: 'rgba(0, 32, 78, 0.8)',
        backdropFilter: 'blur(20px)',
        border: '2px solid rgba(139, 92, 246, 0.4)',
        boxShadow: '0 0 40px rgba(139, 92, 246, 0.4), inset 0 0 20px rgba(139, 92, 246, 0.1)',
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-black uppercase tracking-wider text-[#8B5CF6]">
            Sessional GPA
          </h2>
          <p className="text-xs text-white/60 mt-1">Fall 2024 Performance</p>
        </div>
        <TrendingUp
          className="w-6 h-6"
          style={{ color: trend === 'up' ? '#10B981' : '#F59E0B' }}
        />
      </div>

      {/* GPA Display */}
      <div className="flex items-baseline gap-3 mb-6">
        <motion.div
          className="text-6xl font-black"
          style={{
            background: 'linear-gradient(135deg, #8B5CF6 0%, #10B981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: 'spring' }}
        >
          {currentGPA.toFixed(2)}
        </motion.div>
        <div className="text-2xl font-black text-white/50">/ 4.0</div>
      </div>

      {/* GPA Trajectory Line Graph */}
      <div className="mb-6">
        <div className="text-xs uppercase tracking-wider text-white/60 mb-3 font-bold">
          GPA Trajectory
        </div>
        <div className="relative h-24">
          <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="0"
                y1={100 - (i / 4) * 100}
                x2="300"
                y2={100 - (i / 4) * 100}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            ))}

            {/* Path */}
            <motion.path
              d={`M 0 ${100 - (gpaData[0].gpa / maxGPA) * 100} L 150 ${100 - (gpaData[1].gpa / maxGPA) * 100} L 300 ${100 - (gpaData[2].gpa / maxGPA) * 100}`}
              fill="none"
              stroke="url(#gpaGradient)"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />

            {/* Gradient definition */}
            <defs>
              <linearGradient id="gpaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>

            {/* Data points */}
            {gpaData.map((d, i) => (
              <motion.circle
                key={d.semester}
                cx={i * 150}
                cy={100 - (d.gpa / maxGPA) * 100}
                r="5"
                fill="#10B981"
                stroke="#fff"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1, type: 'spring' }}
                style={{ filter: 'drop-shadow(0 0 8px #10B981)' }}
              />
            ))}
          </svg>

          {/* Labels */}
          <div className="flex justify-between mt-2">
            {gpaData.map((d) => (
              <div key={d.semester} className="text-xs text-white/40" style={{ fontFamily: 'monospace' }}>
                {d.semester}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Target GPA */}
      <div
        className="p-3 rounded-md flex items-center justify-between"
        style={{
          background: 'rgba(245, 158, 11, 0.1)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
        }}
      >
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-[#F59E0B]" />
          <span className="text-xs font-bold text-white">Target GPA</span>
        </div>
        <span className="text-lg font-black text-[#F59E0B]">{targetGPA.toFixed(1)}</span>
      </div>

      {/* Background glow */}
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
}
