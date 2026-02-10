import { createClient } from '@supabase/supabase-js';
import { createContext, ReactNode, useContext } from 'react';

const supabaseUrl = 'https://sbyqtmurhrlrhmcvhjlj.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const SupabaseContext = createContext(supabase);

export function SupaProvider({children}: {children: ReactNode}) {
    return <SupabaseContext value={supabase}>{children}</SupabaseContext>
}

