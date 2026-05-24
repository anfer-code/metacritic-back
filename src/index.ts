import cors from "cors";
import express from "express";

import { config } from "./config/index.js";
import routes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/games", routes);

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
  console.log(`${config.baseUrl}:${config.port}`);
});

export default app;
