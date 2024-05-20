import express from "express";
import cors from "cors";
import "dotenv/config.js";
import { db_connection } from "./src/database/db_connection.js";
import admin_route from "./src/route/admin_route.js";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

await db_connection();

app.get("/", (req, res) => {
  return res.status(200).json({ message: "I'm working fine CubeAI-Solution" });
});

app.use("/", admin_route);

//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Listening in the port...", PORT));
