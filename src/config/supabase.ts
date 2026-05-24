import { createClient, type SupabaseClient } from '@supabase/supabase-js';

import { config, hasSupabaseConfig } from './index.js';

let supabaseClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
	if (!hasSupabaseConfig()) {
		throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment variables.');
	}

	if (!supabaseClient) {
		supabaseClient = createClient(config.supabaseUrl, config.supabaseServiceRoleKey);
	}

	return supabaseClient;
}