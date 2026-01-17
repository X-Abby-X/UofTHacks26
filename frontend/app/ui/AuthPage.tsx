"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/drizzle/db/client"; //
import { Loader2, ArrowRight } from "lucide-react";

export default function AuthPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [userId, setUserId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [isAuthPending, setIsAuthPending] = useState(false);

    const signUp = async () => {
        setIsAuthPending(true);
        const { error } = await supabase.auth.signUp({ email, password });
        setMessage(error ? error.message : "Account created. Verify email or sign in.");
        setIsAuthPending(false);
    };

    const signIn = async () => {
        setIsAuthPending(true);
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        setMessage(error ? error.message : "Authorized. Initializing...");
        setIsAuthPending(false);
    };

    useEffect(() => {
        const init = async () => {
            const { data } = await supabase.auth.getSession();
            setUserId(data.session?.user.id ?? null);
            setLoading(false);
        };
        init();

        const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === "SIGNED_OUT") setUserId(null);
            if (event === "SIGNED_IN") setUserId(session?.user.id ?? null);
        });

        return () => subscription.subscription.unsubscribe();
    }, []);

    if (loading) return <Loader2 className="w-6 h-6 text-[#8B5CF6] animate-spin mx-auto" />;

    return (
        <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            {userId ? (
                <div className="text-center space-y-6">
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                        <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Protocol Active</p>
                        <code className="text-[10px] text-white/40 block mt-2 truncate">{userId}</code>
                    </div>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="w-full p-4 rounded-2xl bg-[#8B5CF6] text-white font-black uppercase tracking-widest hover:bg-[#7C3AED] transition-all flex items-center justify-center gap-2"
                    >
                        Access Vaults <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            ) : (
                <div className="space-y-4">
                    <input
                        type="email"
                        placeholder="UofT Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Auth Key"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <button onClick={signUp} disabled={isAuthPending}>Register</button>
                        <button onClick={signIn} disabled={isAuthPending}>Authorize</button>
                    </div>
                </div>
            )}
            {message && <p className="mt-4">{message}</p>}
        </div>
    );
}