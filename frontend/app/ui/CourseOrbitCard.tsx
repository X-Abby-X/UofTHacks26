// Inside your app/page.tsx or separate CourseCard component
import { deleteCourse } from '@/app/lib/actions';
import { Trash2, Fingerprint, Zap, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
export function CourseCard({ course }: { course: any }) {
  const mastery = course.currentGrade || 0;

  return (
    <div className="group relative">
      {/* Delete Persona Button - Positioned top-right */}
      <form
        action={async () => {
          'use server';
          await deleteCourse(course.id);
        }}
        className="absolute top-6 right-6 z-50 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <button
          className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 hover:bg-rose-500 hover:text-white transition-all shadow-lg"
          title="Purge Persona"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </form>

      <Link href={`/course/${course.id}`}>
        <div className="relative p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl overflow-hidden transition-all hover:border-[#8B5CF6]/50 hover:bg-white/[0.05]">

          {/* Background Aura */}
          <div className={`absolute -right-12 -top-12 w-40 h-40 blur-[80px] rounded-full transition-all duration-700 opacity-20 group-hover:opacity-40 ${mastery > 80 ? 'bg-[#8B5CF6]' : mastery > 0 ? 'bg-emerald-500' : 'bg-white/10'
            }`} />

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                <Fingerprint className="w-6 h-6 text-white/40 group-hover:text-[#8B5CF6]" />
              </div>
              <div className="flex flex-col items-end mr-10"> {/* Added margin for delete button */}
                <span className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Resonance</span>
                <div className="text-2xl font-black text-white group-hover:text-[#8B5CF6]">
                  {mastery}<span className="text-sm opacity-30">%</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
              {course.name}
            </h2>

            <div className="flex items-center gap-2 mb-8">
              <Zap className="w-3 h-3 text-[#8B5CF6]" />
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                {mastery > 80 ? 'Harmonized Persona' : mastery > 0 ? 'Calibrating Identity' : 'Null Signal'}
              </span>
            </div>

            <div className="relative w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] transition-all duration-1000"
                style={{ width: `${mastery}%` }}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}