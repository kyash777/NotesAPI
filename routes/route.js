import express from "express"
import { signUp,login } from "../controllers/user-controller.js";
import { createNote,getNotes,getNote,updateNote,deleteNote } from "../controllers/notes-controller.js";
import CheckAuth from "../middleware/auth.js";

const router=express.Router();


//Post Routes
router.post("/signup",signUp)
router.post("/login",login)
router.post("/create",CheckAuth,createNote)

//Get Routes

router.get("/notes",CheckAuth,getNotes)
router.get("/note/:id",CheckAuth,getNote)

//Update Route
router.put("/update/:id",CheckAuth,updateNote)

//Delete Route
router.delete("/delete/:id",CheckAuth,deleteNote)


export default router;