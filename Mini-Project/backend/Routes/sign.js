import express from "express" 
import {register,login} from "../Controller/sign.js";


const routes=express.Router();


routes.post("/register",register)
routes.post("/login",login)

export default routes;


