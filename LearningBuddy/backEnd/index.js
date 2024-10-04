import express from"express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import router from "./routs/notes.routs.js";

const app = express();


dotenv.config();
const Port = process.env.PORT;
const MongoDBURI = process.env.MongoDBURI
try {
    mongoose.connect(MongoDBURI,{
    useNewUrlParser : true,
    useUnifiedTopology : true
    });
    console.log("Connected To MongoDB")
} catch (error) {
    console.log("Error",error)
}

// Routs
app.use("/note",router)

app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`);
});
