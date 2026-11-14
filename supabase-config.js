
const SUPABASE_URL = "https://kzntazqifjhtlwjxgkyy.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_CxQImSUlcCCEJBncp_Z3lw_KQMZMJ5P";

if (!window.supabase) {
    console.error("Supabase library failed to load.");
} else {
    window.odaSupabase = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );
}
