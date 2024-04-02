// write basic express boilerplate code
// with express.json()

import express, { Route } from "express";
import {createTodo,updateTodo} from "./types.js"
import {todo} from "./db.js"
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    //put in mongodb
    await todo.create({
        title:createPayload.title,
        description :createPayload.description,
        completed: false
    })
    res.json({
        msg:"Todo created"
    })
    
})

app.get("/todos",async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed",async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    ews.json({
        msg:"Todo marked as completed"
    })
})



app.listen(3000);