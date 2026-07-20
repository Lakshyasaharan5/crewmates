import { createClient } from '@supabase/supabase-js'

const URL = 'https://lsquetlxkbtwqdhtqnlp.supabase.co/'
const API_KEY = import.meta.env.VITE_RESTCOUNTRIES_API_KEY;

export const supabase = createClient(URL, API_KEY)
