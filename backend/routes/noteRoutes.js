import express from "express";
import { createNote, getNotes, deleteNote } from "../controllers/noteController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createNote);   // create new note
router.get("/", authMiddleware, getNotes);      // get user notes
router.delete("/:id", authMiddleware, deleteNote); // delete note

export default router;
