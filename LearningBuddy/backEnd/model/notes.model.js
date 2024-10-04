import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    
    name:String,
    price:Number,
    category:String,
    title:String,
    image:String
})
const Notes = mongoose.model("Notes",noteSchema);
export default Notes;