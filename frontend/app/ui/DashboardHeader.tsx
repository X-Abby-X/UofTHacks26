// frontend/app/ui/DashboardHeader.tsx
export function DashboardHeader() {
    return (
        <div className="mb-12">
            <div className="flex items-center gap-4 mb-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
                    Academic Identity Logs
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="text-center">
                <h1 className="text-5xl font-black text-white tracking-tighter mb-4">
                    Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">Learner</span>
                </h1>
                <p className="text-sm text-white/40 italic font-medium max-w-md mx-auto leading-relaxed">
                    "The identity of an engineer is not found in the grade, but in the resonance of their growth."
                </p>
            </div>
        </div>
    );
}