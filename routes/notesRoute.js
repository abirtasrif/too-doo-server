const express = require("express");

//router
const router = express.Router();

//GET all notes
router.get("/", (req, res) => {
  res.json({ message: "GET all notes" });
});

//GET single notes
router.get("/:id", (req, res) => {
  res.json({ message: "GET a single note" });
});

// POST a new note
router.post("/", (req, res) => {
  res.json({ message: "POST a new note" });
});

// DELETE a new note
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a note" });
});

// UPDATE a new note
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a note" });
});

module.exports = router;
