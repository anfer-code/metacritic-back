import type { Request, Response } from "express";
import { gameService } from "../services/game-service.js";

export async function gameController(
  _req: Request,
  res: Response,
): Promise<void> {
  try {
    const data = await gameService();
    res.json(data);
  } catch (error) {
    console.error("Error in gameController:", error);
    res.status(500).send("Internal Server Error");
    return;
  }
}
