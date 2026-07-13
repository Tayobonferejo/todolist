 const express = require("express");
 const mongoose = require("mongoose");
 const cors = require("cors");
 const dbURL = "mongodb+srv://todo:todo@cluster0.7dusyup.mongodb.net/tododb?appName=Cluster0"
 const todoModel = require("./models/todo")

 const app = express();

 app.use(cors());
 app.use(express.json());

 mongoose.connect(dbURL)
   .then( () => {
      console.log("MongoDB is connectd")
   })
   .catch((error) => {
      console.error("connection Error")
   });
 
 app.get("/get", (request, response) => {
   todoModel.find()
   .then(result => response.json(result))
   .catch(err => response.json(err))
 })
 app.post("/add", (request, response) =>{
    const task = request.body.task;
    todoModel.create({
      task: task
    }).then(result => response.json(result))
      .catch(err => response.json(err))
 })

 app.listen(5000, () => {
    console.log("server is Running");
 })
