import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-supabase-url.supabase.co'; // আপনার প্রজেক্টের ইউআরএল দিন
const supabaseAnonKey = 'your-supabase-anon-key'; // আপনার প্রজেক্টের অ্যানন কি দিন

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
