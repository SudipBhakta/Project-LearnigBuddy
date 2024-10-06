import express from "express";
import { signup } from "../controller/user.controller.js";
import{login} from "../controller/user.controller.js"

const users_router = express.Router();
users_router.post("/signup", signup);
users_router.post("/login",login)


export default users_router;
