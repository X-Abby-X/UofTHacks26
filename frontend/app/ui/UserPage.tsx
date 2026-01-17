"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/drizzle/db/client";
import FileUploader from "@/storage/components/FileUploader";
import { Fingerprint, LogOut, Loader2, ShieldCheck, Database } from "lucide-react";

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
                // Optional: Redirect to auth page if signed out
                window.location.href = '/auth';
            }
        });

        return () => subscription.subscription.unsubscribe();
    }, []);

    if (loading) return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-[#8B5CF6] animate-spin" />
        </div>
    );

    if (!userId) return (
        <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-12 text-center">
            <ShieldCheck className="w-16 h-16 text-rose-500 mb-6 opacity-20" />
            <h1 className="text-2xl font-black uppercase tracking-widest text-white/40">Access Denied</h1>
            <p className="text-white/20 italic mt-2">Authentication required to access Skule Swap records.</p>
            <button onClick={() => window.location.href = '/auth'} className="mt-8 px-8 py-3 bg-[#8B5CF6] rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#7C3AED] transition-all">
                Redirect to Protocol Auth
            </button>
        </div>
    );

    return (
        <main className="min-h-screen bg-[#020617] text-white p-12">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 flex justify-between items-center">
                    <h1 className="text-4xl font-black tracking-tighter uppercase">
                        Neural <span className="text-[#8B5CF6]">Signature</span>
                    </h1>
                    <button onClick={signOut} className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-rose-500/30 text-rose-500 hover:bg-rose-500 hover:text-white transition-all font-bold uppercase tracking-widest text-[10px]">
                        <LogOut className="w-3 h-3" /> Terminate Session
                    </button>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Identity Card */}
                    <div className="md:col-span-1 space-y-8">
                        <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden group">
                            <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#8B5CF6]/10 blur-[40px] rounded-full" />
                            <div className="relative z-10">
                                <Fingerprint className="w-10 h-10 text-[#8B5CF6] mb-6" />
                                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] block mb-2">Unique Identifier</span>
                                <code className="text-xs text-white/60 break-all leading-relaxed block font-mono">
                                    {userId}
                                </code>
                            </div>
                        </div>

                        <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10">
                            <Database className="w-5 h-5 text-emerald-500 mb-4" />
                            <h3 className="text-xs font-black uppercase tracking-widest text-white/40">Storage Quota</h3>
                            <p className="text-sm mt-2 text-white/60">Connected to <code>uofthacks-2026</code></p>
                        </div>
                    </div>

                    {/* File Upload Section */}
                    <div className="md:col-span-2">
                        <div className="h-full p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5 border-dashed flex flex-col items-center justify-center">
                            <FileUploader bucket="uofthacks-2026" userID={userId} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}