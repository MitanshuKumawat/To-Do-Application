import { useState } from "react";

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    return <div>
        <input id='title' type="text" placeholder="title" onChange={(e)=>{
            setTitle(e.target.value);
        }} style={{
            padding:10,
            margin:10
        }}></input><br/>
        <input id='desc' type="text" placeholder="description" onChange={(e)=>{
            setDesc(e.target.value);
        }}  style={{
            padding:10,
            margin:10
        }}></input><br/>

        <button onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body:JSON.stringify({       
                    title:title,        
                    description:desc
                }),
                headers:{
                    "Content-type":"application/json"
                } 
            })
            .then(async(res)=>{
                const json = await res.json();
                alert("To-do added");
            });
        }}>Add To-Do</button>
    </div>
}