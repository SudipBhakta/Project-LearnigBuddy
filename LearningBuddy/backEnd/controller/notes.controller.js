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

export const searchNotes = async (req, res) => {
    const { query } = req.query;  // Get search query from request
    try {
        // Find notes matching the query in name, title, or category
        const results = await Notes.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { title: { $regex: query, $options: 'i' } },
                { category: { $regex: query, $options: 'i' } }
            ]
        });
        res.json(results);  // Send results as JSON response
    } catch (err) {
        res.status(500).send(err);  // Handle errors
    }
};