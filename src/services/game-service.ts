import { getSupabaseClient } from "../config/supabase.js";
import type { CardGameInfo } from "../interfaces/card-game-info.js";

export async function gameService(): Promise<CardGameInfo[]> {
  const supabase = getSupabaseClient();

  const { data, error }: { data: CardGameInfo[] | null; error: any } =
    await supabase.from("Games").select("*");

  if (error) {
    console.error("Error fetching games:", error);
    return [];
  }

  return data || [];
}
