import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());



app.get("/",(req,res)=>{

res.send("Backend is running");

});



app.post("/generate",(req,res)=>{


console.log("Received Data:");

console.log(req.body);



const {

restaurantName,
cuisine,
address,
phone,
hours,
menu

}=req.body;



const website={

title:restaurantName,

description:
`Welcome to ${restaurantName}. 
Enjoy authentic ${cuisine} cuisine with fresh ingredients and amazing taste.`,

address,
phone,
hours,
menu

};



res.json(website);



});



app.listen(5000,()=>{

console.log("Server running on port 5000");

});