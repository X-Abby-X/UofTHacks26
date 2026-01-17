"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../storage/lib/supabaseClient";
import FileUploader from "@/storage/components/FileUploader";

export default function UserPage() {
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Get initial session
    const getInitialUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUserId(user.id);
        localStorage.setItem("userId", user.id);
      }

      setLoading(false);
    };

    getInitialUser();

    // 2. Listen for auth changes
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUserId(session.user.id);
          localStorage.setItem("userId", session.user.id);
        } else {
          setUserId(null);
          localStorage.removeItem("userId");
        }
      }
    );

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!userId) return <p>User not logged in</p>;

  return (
    <div>
        <div>
            <h1>User Dashboard</h1>
            <p>Your user ID:</p>
            <code>{userId}</code>
        </div>
        {userId && 
        <div>
            <FileUploader bucket="uofthacks-2026" userID={userId} />
        </div>}


    </div>
  );
}
