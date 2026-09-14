// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vojggqddkmtdktkvhvwe.supabase.co'
const supabaseKey = 'TU_PUBLISHABLE_KEY_AQUI'

export const supabase = createClient(supabaseUrl, supabaseKey)