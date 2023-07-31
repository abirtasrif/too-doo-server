const Notebook = require("../models/notebookModel");
const mongoose = require("mongoose");

//get all notes
const getAllNotes = async (req, res) => {
  const notes = await Notebook.find({});

  res.status(200).json(notes);
};

//get a single note
const getSingleNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid Id" });
  }

  const note = await Notebook.findById(id);

  if (!note) {
    return res.status(404).json({ error: "Note not found" });
  }

  res.status(200).json(note);
};

//post new note
const postNote = async (req, res) => {
  const data = req.body;

  try {
    const note = await Notebook.create({
      ...data,
    });

    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  res.json({ message: "POST a new note" });
};

//delete a note

//update a note

module.exports = {
  postNote,
  getAllNotes,
  getSingleNote,
};
