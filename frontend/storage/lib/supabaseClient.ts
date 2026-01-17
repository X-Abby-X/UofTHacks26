


import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;


if (!supabaseAnonKey || !supabaseUrl){
    throw new Error ("Missing Supabase environment variables");
}

// remove persistSession if wanting the user to be continuously signed in no matter what
//export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false }
});