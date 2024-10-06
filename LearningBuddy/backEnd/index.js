import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import notes_router from "./routs/notes.routs.js";
import cors from "cors";
import users_router from "./routs/user.router.js";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
const Port = process.env.PORT;
const MongoDBURI = process.env.MongoDBURI;

try {
  mongoose.connect(MongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected To MongoDB");
} catch (error) {
  console.log("Error", error);
}

// Routs
app.use("/note", notes_router);

app.use("/user", users_router);

app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`);
});
