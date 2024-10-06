import express from "express";
import { getNotes } from "../controller/notes.controller.js";

const notes_router=express.Router()

notes_router.get("/", getNotes)

export default notes_router;