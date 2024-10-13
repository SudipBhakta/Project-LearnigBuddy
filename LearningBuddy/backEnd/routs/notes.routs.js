import express from "express";
import { getNotes, searchNotes } from "../controller/notes.controller.js";

const notes_router=express.Router()

notes_router.get("/", getNotes)
notes_router.get("/search", searchNotes);  // Link the route to the controller

export default notes_router;