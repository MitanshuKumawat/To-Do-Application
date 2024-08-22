const express = require("express");
const {createTodo, updateTodo} = require("./types.js");
const cors = require("cors");
const {todo} = require("./db.js");

const app = new express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173"
}))

app.post("/todo", async (req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(403).json({
            msg:"Invalid inputs!!"
        });
        return;
    }

    await todo.create({               
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    });

    res.json({
        msg:"To-do created..."
    })
});

app.get("/todos", async (req,res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    })
});

app.put("/completed", async (req, res)=>{
    const createPayload = req.body;
    const parsePayload = updateTodo.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(403).json({
            msg:"Invalid inputs!!"
        });
        return;
    }

    await todo.updateOne({
        _id:createPayload.id
    },{
        completed:true
    });

    res.json({
        msg:"Marked as done"
    })
});

app.listen(PORT);