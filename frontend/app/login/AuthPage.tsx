// "use client";

// import { useState } from "react";
// import { supabase } from "../../storage/lib/supabaseClient";

// export default function AuthPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//     const [userId, setUserId] = useState<string | null>(null);
//     const [loading, setLoading] = useState(true);

//   const signUp = async () => {
//     const { error } = await supabase.auth.signUp({ email, password });
//     setMessage(error ? error.message : "Check your email to confirm");
// };


//   const signIn = async () => {
//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) setMessage(error.message);
//     else setMessage("Signed in!");
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Auth</h1>

//       <input
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <br />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />

//       <button onClick={signUp}>Sign Up</button>
//       <button onClick={signIn}>Sign In</button>

//       <p>{message}</p>
//       <br />
//     </div>
//   );
// }

// VERSION 2
// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "../../storage/lib/supabaseClient";

// export default function AuthPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [userId, setUserId] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);

//   const signUp = async () => {
//     const { error } = await supabase.auth.signUp({ email, password });
//     setMessage(error ? error.message : "Check your email to confirm");
//   };

//   const signIn = async () => {
//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     setMessage(error ? error.message : "Signed in!");
//   };

//   useEffect(() => {
//     // 1️⃣ Get initial session
//     const getInitialUser = async () => {
//       const {
//         data: { user },
//       } = await supabase.auth.getUser();

//       setUserId(user ? user.id : null);
//       setLoading(false);
//     };

//     getInitialUser();

//     // 2️⃣ Listen for auth changes (sign in / sign out)
//     const { data: subscription } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         setUserId(session?.user?.id ?? null);
//       }
//     );

//     return () => {
//       subscription.subscription.unsubscribe();
//     };
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Auth</h1>

//       {userId ? (
//         <p>✅ Signed in as: <code>{userId}</code></p>
//       ) : (
//         <>
//           <input
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <br />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br />

//           <button onClick={signUp}>Sign Up</button>
//           <button onClick={signIn}>Sign In</button>
//         </>
//       )}

//       <p>{message}</p>
//     </div>
//   );
// }


// VERSION 3
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../storage/lib/supabaseClient";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // SIGN UP WITH EMAIL CONFIRMATION
//   const signUp = async () => {
//     const { error } = await supabase.auth.signUp({ email, password });
//     setMessage(error ? error.message : "Check your email to confirm");
//   };
// const signUp = async () => {
//   const { error } = await supabase.auth.signUp({ email, password });

//   if (error) {
//     setMessage(error.message);
//   } else {
//     setMessage(
//       "Check your email to confirm. If you already have an account, please sign in instead."
//     );
//   }
// };
    // SIGN UP WITHOUT EMAIL CONFIRMATION
    const signUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
        setMessage(error.message);
    } else {
        setMessage("Account created! You can now sign in.");
    }
    };



  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setMessage(error ? error.message : "Signed in!");
  };

  useEffect(() => {
    // 1️⃣ Initial session check
    const init = async () => {
      const { data } = await supabase.auth.getSession();
      setUserId(data.session?.user.id ?? null);
      setLoading(false);
    };

    init();

    // 2️⃣ Auth listener
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_OUT") {
          setUserId(null);
          setMessage("Signed out");
          setEmail("");
          setPassword("");
        }

        if (event === "SIGNED_IN") {
          setUserId(session?.user.id ?? null);
          setMessage("Signed in!");
        }
      }
    );

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Auth</h1>

      {userId ? (
        <p>
          ✅ Signed in as <code>{userId}</code>
        </p>
      ) : (
        <>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <button onClick={signUp}>Sign Up</button>
          <button onClick={signIn}>Sign In</button>
        </>
      )}

      <p>{message}</p>
    </div>
  );
}
