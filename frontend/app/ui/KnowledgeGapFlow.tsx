'use client';
// import { motion } from 'motion/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FileText, Zap } from 'lucide-react';

export function KnowledgeGapFlow({ report }: { report: any[] }) {
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Avoid the "window is not defined" crash by returning a placeholder during SSR
  if (!mounted || windowWidth === 0) return <div className="min-h-[500px] bg-[#00204E]/50 rounded-3xl animate-pulse" />;

  return (
    <div className="relative">
      {/* Your existing UI code... */}
      <svg className="absolute left-0 top-0 w-full h-full pointer-events-none">
        {report.map((unit, idx) => {
          // Now safely uses windowWidth calculated on the client
          const endX = windowWidth - 500;
          // ... rest of your path logic
          return null;
        })}
      </svg>
    </div>
  );
}