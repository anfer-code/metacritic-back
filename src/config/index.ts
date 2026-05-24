import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: Number(process.env.PORT ?? 3000),
  baseUrl: process.env.BASE_URL ?? 'http://localhost',
  supabaseUrl: process.env.SUPABASE_URL ?? '',
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
};

export function hasSupabaseConfig(): boolean {
  return Boolean(config.supabaseUrl && config.supabaseServiceRoleKey);
}