import express from "express";
import {
filterJoyas,
getJoyasWithHateoas,
} from "../../src/api/v1/controllers/joyasControllers.js";
const router = express.Router();

router.get("/joyas", getJoyasWithHateoas);
router.get("/joyas/filtros", filterJoyas);


export default router;