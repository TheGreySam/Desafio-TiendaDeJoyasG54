import express from "express";
import cors from "cors";
import joyasRoutes from "./config/routes/joyasRoutes.js";
import { logger } from "logger-express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(logger());
app.use("/api/v1", joyasRoutes);
// app.use("/api/v1", sessionsRoutes);

app.listen(PORT, console.log(`¡Servidor encendido en el puerto! ${PORT}`));