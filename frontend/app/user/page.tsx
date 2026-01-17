"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/drizzle/db/client";
import FileUploader from "@/app/ui/FileUploader";
import {
    Fingerprint,
    LogOut,
    Loader2,
    ShieldCheck,
    Database,
    Cpu,
    ArrowLeft
} from "lucide-react";
import Link from "next/link";

export default function UserPage() {
    const [userId, setUserId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const signOut = async () => {
        await supabase.auth.signOut();
    };

    useEffect(() => {
        const getInitialUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                setUserId(user.id);
                localStorage.setItem("userId", user.id);
            }
            setLoading(false);
        };

        getInitialUser();

        const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session?.user) {
                setUserId(session.user.id);
                localStorage.setItem("userId", session.user.id);
            } else {
                setUserId(null);
                localStorage.removeItem("userId");
                window.location.href = '/login';
            }
        });

        return () => subscription.subscription.unsubscribe();
    }, []);

    if (loading) return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-[#8B5CF6] animate-spin" />
        </div>
    );

    if (!userId) return null; // Handled by onAuthStateChange redirect

    return (
        <main className="min-h-screen bg-[#020617] text-white p-8 md:p-12 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#8B5CF6]/10 blur-[120px] rounded-full" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* TOP NAVIGATION */}
                <header className="mb-12 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 text-white/40 hover:text-[#8B5CF6] transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Return to Vaults</span>
                    </Link>

                    <button
                        onClick={signOut}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-rose-500/30 text-rose-500 hover:bg-rose-500 hover:text-white transition-all font-bold uppercase tracking-widest text-[10px]"
                    >
                        <LogOut className="w-3 h-3" /> Terminate Session
                    </button>
                </header>

                {/* PROFILE TITLE */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-2">
                        <Cpu className="w-4 h-4 text-[#D946EF]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
                            N<span className="text-[#8B5CF6]">3</span>XU<span className="text-[#D946EF]">$</span> // Master Console
                        </span>
                    </div>
                    <h1 className="text-5xl font-black tracking-tighter uppercase leading-none">
                        Neural <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">Signature</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* IDENTITY COLUMN */}
                    <div className="space-y-8">
                        <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden">
                            <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#8B5CF6]/10 blur-[40px] rounded-full" />
                            <Fingerprint className="w-10 h-10 text-[#8B5CF6] mb-6" />
                            <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-2">Primary UID</h3>
                            <code className="text-[11px] text-white/60 break-all leading-relaxed block font-mono bg-black/20 p-4 rounded-2xl border border-white/5">
                                {userId}
                            </code>
                        </div>

                        <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 flex items-center gap-6">
                            <div className="p-4 bg-emerald-500/10 rounded-2xl">
                                <ShieldCheck className="w-6 h-6 text-emerald-500" />
                            </div>
                            <div>
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-white/30">Status</h3>
                                <p className="text-sm font-bold text-emerald-400 uppercase tracking-tighter">Connection Stable</p>
                            </div>
                        </div>
                    </div>

                    {/* TRANSMISSION COLUMN (Uploader) */}
                    <div className="lg:col-span-2">
                        <div className="h-full p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/10 border-dashed flex flex-col items-center justify-center relative group">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />

                            <div className="relative z-10 w-full flex flex-col items-center">
                                <div className="mb-8 text-center">
                                    <Database className="w-8 h-8 text-white/20 mx-auto mb-4" />
                                    <h2 className="text-xl font-black uppercase tracking-tight">Data Transmission Bay</h2>
                                    <p className="text-white/30 text-xs mt-1">Upload secure assets to your private encrypted bucket.</p>
                                </div>

                                <FileUploader bucket="uofthacks-2026" userID={userId} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}