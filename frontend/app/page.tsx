import { db } from '@/drizzle/index';
import { courses } from '@/drizzle/db/schema';
import Link from 'next/link';
import { AddCourseButton } from '@/app/ui/AddCourseButton';
import { DeleteCourseBtn } from '@/app/ui/DeleteCourseBtn';
import { Fingerprint, Zap, Sparkles, UserCircle } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function GlobalHub() {
  const allCourses = await db.query.courses.findMany();

  return (
    <main className="p-12 relative min-h-screen bg-[#020617] text-white overflow-x-hidden">
      {/* NARRATIVE HEADER */}
      <header className="mb-16 flex justify-between items-end w-full pr-8 relative z-50">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#8B5CF6] animate-pulse" />
            {/* Unified Branding: N3XU$ Identity Protocol */}
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
              N<span className="text-[#8B5CF6]">3</span>XU<span className="text-[#D946EF]">$</span> // Identity Protocol
            </span>
          </div>
          <h1 className="text-6xl font-black text-white tracking-tighter leading-none">
            Identity <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">Vaults</span>
          </h1>
        </div>

        <div className="flex items-center gap-4 relative">
          <AddCourseButton />
          <Link href="/user" className="p-3 bg-white/5 rounded-2xl border border-white/10 hover:border-[#8B5CF6]/50 transition-all group shadow-lg shadow-[#8B5CF6]/5">
            <UserCircle className="w-6 h-6 text-white/40 group-hover:text-[#8B5CF6]" />
          </Link>
        </div>
      </header>

      {/* IDENTITY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {allCourses.map((course) => {
          const mastery = course.currentGrade || 0;
          return (
            <div key={course.id} className="group relative h-full">
              {/* NAVIGATION LAYER */}
              <Link href={`/course/${course.id}`} className="block h-full">
                <div className="h-full p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl overflow-hidden transition-all hover:border-[#8B5CF6]/50 hover:bg-white/[0.05]">
                  {/* Persona Glow Aura */}
                  <div className={`absolute -right-12 -top-12 w-40 h-40 blur-[80px] rounded-full transition-all duration-700 opacity-20 group-hover:opacity-40 ${mastery > 80 ? 'bg-[#8B5CF6]' : 'bg-emerald-500'
                    }`} />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform duration-500">
                        <Fingerprint className="w-6 h-6 text-white/40 group-hover:text-[#8B5CF6]" />
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Resonance</span>
                        <div className="text-2xl font-black text-white">{mastery}%</div>
                      </div>
                    </div>

                    <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                      {course.name}
                    </h2>

                    {/* Identity Progress Track */}
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mt-4">
                      <div
                        className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] transition-all duration-1000"
                        style={{ width: `${mastery}%` }}
                      />
                    </div>
                  </div>
                </div>
              </Link>

              {/* ACTION LAYER - Purge Course */}
              <div className="absolute top-6 right-6 z-40 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <DeleteCourseBtn courseId={course.id} />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}