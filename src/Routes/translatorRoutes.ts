import express from "express";
import { translateEnglightTofrench } from "../Controlller/translatorController"


const router = express.Router();

router.post("/englishToFrench", translateEnglightTofrench);


export default router;