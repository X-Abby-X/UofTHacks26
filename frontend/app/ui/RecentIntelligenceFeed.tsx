'use client';
import { motion } from 'framer-motion';
import { Brain, Eye } from 'lucide-react';
import Link from 'next/link';

interface IntelligenceItem {
  courseCode: string;
  courseColor: string;
  errorCount: number;
  timestamp: string;
}

interface RecentIntelligenceFeedProps {
  items: IntelligenceItem[];
}

export function RecentIntelligenceFeed({ items }: RecentIntelligenceFeedProps) {
  if (items.length === 0) {
    return (
      <div className="p-8 text-center text-white/60">
        <p>No recent intelligence reports available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <motion.div
          key={`${item.courseCode}-${idx}`}
          className="relative group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          <Link to={`/course/${item.courseCode.toLowerCase()}`}>
            <div
              className="p-4 rounded-lg cursor-pointer transition-all hover:scale-102"
              style={{
                background: 'rgba(0, 32, 78, 0.6)',
                backdropFilter: 'blur(16px)',
                border: `1px solid ${item.courseColor}40`,
                boxShadow: `0 4px 16px rgba(0, 0, 0, 0.3)`,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: `${item.courseColor}20`,
                      border: `1px solid ${item.courseColor}`,
                    }}
                  >
                    <Brain className="w-5 h-5" style={{ color: item.courseColor }} />
                  </div>
                  <div>
                    <div className="font-bold text-white">{item.courseCode}</div>
                    <div className="text-xs text-white/60">{item.timestamp}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="px-3 py-1 rounded-md text-xs font-bold"
                    style={{
                      background: 'rgba(239, 68, 68, 0.2)',
                      border: '1px solid #EF4444',
                      color: '#EF4444',
                    }}
                  >
                    {item.errorCount} Error{item.errorCount > 1 ? 's' : ''}
                  </div>
                  <Eye className="w-5 h-5 text-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
