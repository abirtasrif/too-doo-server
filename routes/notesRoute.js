const express = require("express");
const {
  postNote,
  getAllNotes,
  getSingleNote,
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
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a note" });
});

// UPDATE a new note
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a note" });
});

module.exports = router;
