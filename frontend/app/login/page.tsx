"use client";

import { useEffect, useState } from "react";
import AuthPage from "@/app/ui/AuthPage";
import { ShieldCheck, Loader2, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-[#8B5CF6] animate-spin" />
    </div>
  );

  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Narrative Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shadow-2xl shadow-[#8B5CF6]/10">
              <ShieldCheck className="w-10 h-10 text-[#8B5CF6]" />
            </div>
          </div>
          {/* N3XU$ Branding: 3 for Identity Triangulation, $ for Secure Signature */}
          <h1 className="text-5xl font-black tracking-[0.2em] uppercase leading-none mb-2 font-mono">
            N<span className="text-[#8B5CF6]">3</span>XU<span className="text-[#D946EF]">$</span>
          </h1>
          <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">
            Neural Identity Protocol // V1.0.8
          </p>
        </div>

        {/* THEMED WRAPPER (Tailwind "Hole-Punching")
            - [&_label]:hidden removes overlapping text labels
            - [&_input]:pl-14 creates space for icons
            - [&_main]:p-0 removes teammate's default padding
        */}
        <div className="relative group 
          [&_label]:hidden [&_h1]:hidden [&_br]:hidden [&_main]:p-0 [&_main]:bg-transparent [&_main]:min-h-auto
          [&_input]:w-full [&_input]:bg-white/5 [&_input]:border [&_input]:border-white/10 [&_input]:rounded-2xl 
          [&_input]:p-4 [&_input]:pl-14 [&_input]:mb-3 [&_input]:text-sm [&_input]:transition-all
          [&_input:focus]:border-[#8B5CF6]/50 [&_input:focus]:outline-none [&_input:focus]:bg-white/10
          [&_button]:w-full [&_button]:p-4 [&_button]:rounded-2xl [&_button]:font-black [&_button]:uppercase 
          [&_button]:tracking-widest [&_button]:text-[10px] [&_button]:transition-all
          [&_button:nth-of-type(1)]:bg-white/5 [&_button:nth-of-type(1)]:border [&_button:nth-of-type(1)]:border-white/10 [&_button:nth-of-type(1)]:text-white/40
          [&_button:nth-of-type(2)]:bg-[#8B5CF6] [&_button:nth-of-type(2)]:text-white [&_button:nth-of-type(2)]:shadow-lg [&_button:nth-of-type(2)]:shadow-[#8B5CF6]/20
          [&_p]:text-center [&_p]:text-[10px] [&_p]:font-bold [&_p]:text-[#8B5CF6] [&_p]:mt-6 [&_p]:uppercase
        ">
          {/* ICONS: Precisely aligned with Tailwind top-X classes */}
          <div className="absolute left-5 top-[22px] z-30 pointer-events-none opacity-40 group-focus-within:opacity-100 transition-opacity">
            <Mail className="w-5 h-5 text-[#8B5CF6]" />
          </div>
          <div className="absolute left-5 top-[86px] z-30 pointer-events-none opacity-40 group-focus-within:opacity-100 transition-opacity">
            <Lock className="w-5 h-5 text-[#D946EF]" />
          </div>

          <AuthPage />
        </div>

        <p className="text-center text-[10px] text-white/10 uppercase tracking-[0.4em] mt-12 font-medium">
          Authorized Engineering Access Only
        </p>
      </div>
    </main>
  );
}