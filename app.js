import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import Router from "./routes/route.js"
import Connection from "./database/db.js"
dotenv.config()


const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",Router);
app.use(cors());

app.listen(8000,()=>{
    console.log("server started at port 8000")
})

Connection()

