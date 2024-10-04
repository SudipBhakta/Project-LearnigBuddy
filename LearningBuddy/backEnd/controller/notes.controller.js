import Notes from "../model/notes.model.js";

 export const getNotes = async (req, res) => {
    try {
        const notes = await Notes.find().lean(); // Converts Mongoose documents to plain objects
        res.json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving notes' });
    }
};
