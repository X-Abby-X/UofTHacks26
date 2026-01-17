import { db } from '@/drizzle/index';
import { courses } from '@/drizzle/db/schema';
import { CourseCard } from '../ui/CourseCard';
import { deleteCourse } from '../lib/actions';
import DashboardHeader from '../ui/DashboardHeader';

export default async function DashboardPage() {
    // Fetch data on the server
    const allCourses = await db.select().from(courses);

    return (
        <div className="min-h-screen bg-slate-50">
            <main className="max-w-7xl mx-auto p-8 md:p-12">

                {/* CLIENT COMPONENT: Handles the "Add" button and Modal state */}
                <DashboardHeader />

                {allCourses.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                        <p className="text-slate-400 font-medium text-lg">Your dashboard is empty.</p>
                        <p className="text-slate-400 text-sm">Click "Add Course" to get started.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allCourses.map((course) => (
                            <CourseCard
                                key={course.id}
                                course={{
                                    id: course.id,
                                    name: course.name,
                                    grade: course.grade,
                                    units: (course.syllabusData as any)?.units?.length || 0
                                }}
                                onDelete={deleteCourse}
                            />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}