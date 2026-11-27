import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("URL:", supabaseUrl);
console.log("KEY:", Boolean(supabaseKey));
console.log(import.meta.env.VITE_SUPABASE_URL);

/*if (!supabaseUrl || !supabaseKey) {
    throw new Error("Faltan las variables de entorno de Supabase");
}*/

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);