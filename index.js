import express from "express";
import cors from "cors";
//import songsRoutes from './routes/songRoutes.js';


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());

//app.use(songsRoutes);
const { } = require('./server')
app.listen(PORT, console.log(`¡Servidor encendido en el puerto! ${PORT}`));