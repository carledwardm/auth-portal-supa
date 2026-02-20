'use client';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type SupaContext = {
    supa: SupabaseClient,
    user: User | null,
    loading: boolean;
};

const supabaseUrl = 'https://sbyqtmurhrlrhmcvhjlj.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
const supa = createClient(supabaseUrl, supabaseKey);
const SupabaseContext = createContext<SupaContext>({supa, user: null, loading: true});

export function SupaProvider({children}: {children: ReactNode}) {
    const [ user, setUser ] = useState<User | null>(null);    
    const [ loading, setLoading ] = useState<boolean>(true);

    useEffect(() => {
        const { data } = supa.auth.onAuthStateChange((event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
    })
    return () => data.subscription.unsubscribe();
    }, [])
    
    return <SupabaseContext value={{supa, user, loading}}>{children}</SupabaseContext>
}

export function useSupa() {
    return useContext(SupabaseContext);
} 