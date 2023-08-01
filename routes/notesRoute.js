const express = require("express");
const {
  postNote,
  getAllNotes,
  getSingleNote,
  deleteNote,
  updateNote,
} = require("../controllers/projectController");

//router
const router = express.Router();

//GET all notes
router.get("/", getAllNotes);

//GET single notes
router.get("/:id", getSingleNote);

// POST a new note
router.post("/", postNote);

// DELETE a new note
router.delete("/:id", deleteNote);

// UPDATE a new note
router.patch("/:id", updateNote);

module.exports = router;
