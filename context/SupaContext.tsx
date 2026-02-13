'use client';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type SupaContext = {
    supa: SupabaseClient,
    user: User | null,
};

const supabaseUrl = 'https://sbyqtmurhrlrhmcvhjlj.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
const supa = createClient(supabaseUrl, supabaseKey);
const SupabaseContext = createContext<SupaContext>({supa, user: null});

export function SupaProvider({children}: {children: ReactNode}) {
    const [ user, setUser ] = useState<User | null>(null);    

    useEffect(() => {
        const { data } = supa.auth.onAuthStateChange((event, session) => {
        setUser(session?.user ?? null);
    })
    return () => data.subscription.unsubscribe();
    }, [])
    
    return <SupabaseContext value={{supa, user}}>{children}</SupabaseContext>
}

export function useSupa() {
    return useContext(SupabaseContext);
} 