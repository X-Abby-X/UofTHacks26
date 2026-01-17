'use client';
import { motion } from 'motion/react';
import { PieChart, Pie, Cell } from 'recharts';

interface UpcomingWeight {
  name: string;
  weight: number;
  color: string;
}

const upcomingWeights: UpcomingWeight[] = [
  { name: 'Midterm 2', weight: 25, color: '#8B5CF6' },
  { name: 'Final Exam', weight: 40, color: '#F59E0B' },
  { name: 'Project', weight: 15, color: '#10B981' },
];

export function GradeGauge({ currentGrade }: { currentGrade: number }) {

  const data = [
    { name: 'Current', value: currentGrade },
    { name: 'Remaining', value: 100 - currentGrade },
  ];

  return (
    <div className="relative flex items-center justify-center py-12">
      {/* Orbital Ring with Nodes */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="500" height="500" viewBox="0 0 500 500" className="absolute">
          {/* Dotted orbit circle */}
          <motion.circle
            cx="250"
            cy="250"
            r="200"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="2"
            strokeDasharray="8 12"
            opacity="0.4"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '250px 250px' }}
          />
        </svg>

        {/* Orbital Nodes */}
        {upcomingWeights.map((weight, idx) => {
          const angle = (idx * 360) / upcomingWeights.length;
          const radian = (angle * Math.PI) / 180;
          const x = 250 + 200 * Math.cos(radian - Math.PI / 2);
          const y = 250 + 200 * Math.sin(radian - Math.PI / 2);

          return (
            <motion.div
              key={weight.name}
              className="absolute"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: idx * 0.2, type: 'spring' }}
            >
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                {/* Glowing node */}
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: weight.color,
                    boxShadow: `0 0 20px ${weight.color}`,
                  }}
                />
                {/* Tooltip */}
                <div
                  className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
                  style={{
                    background: 'rgba(0, 32, 78, 0.95)',
                    backdropFilter: 'blur(12px)',
                    border: `1px solid ${weight.color}`,
                    boxShadow: `0 0 10px ${weight.color}`,
                  }}
                >
                  <div className="px-3 py-2 text-xs">
                    <div className="font-bold" style={{ color: weight.color }}>
                      {weight.name}
                    </div>
                    <div className="text-white/70">{weight.weight}%</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Central Gauge */}
      <motion.div
        className="relative z-10"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        <div
          className="relative rounded-full p-8"
          style={{
            background: 'rgba(0, 32, 78, 0.6)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(139, 92, 246, 0.5)',
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(139, 92, 246, 0.1)',
          }}
        >
          <PieChart width={280} height={280}>
            <Pie
              data={data}
              cx={140}
              cy={140}
              startAngle={90}
              endAngle={450}
              innerRadius={90}
              outerRadius={130}
              dataKey="value"
              strokeWidth={0}
            >
              <Cell fill="#10B981" />
              <Cell fill="rgba(255,255,255,0.1)" />
            </Pie>
          </PieChart>

          {/* Center Grade Display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              className="text-7xl font-black tracking-tighter"
              style={{
                background: 'linear-gradient(135deg, #10B981 0%, #8B5CF6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {currentGrade}%
            </motion.div>
            <motion.div
              className="text-xs uppercase tracking-[0.3em] mt-2"
              style={{ color: '#10B981' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Current Grade
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Vital Signs Header */}
      <motion.div
        className="absolute top-0 left-0"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="text-2xl font-black uppercase tracking-wider" style={{ color: '#8B5CF6' }}>
          <span className="inline-block w-3 h-3 rounded-full bg-[#10B981] mr-3 animate-pulse" style={{ boxShadow: '0 0 10px #10B981' }} />
          Vital Signs
        </div>
      </motion.div>
    </div>
  );
}