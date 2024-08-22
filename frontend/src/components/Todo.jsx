/*
    todos=[{
        title:"go to gym",
        description:"go to gym"
    },{
        .......
    }]
*/

export function Todo({todos}){
    return <div>
        {todos.map((todo)=>{
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={()=>{
                    fetch("http://localhost:3000/completed", {
                        method:"PUT",
                        body:JSON.stringify({
                            id:todo._id,
                        }),
                        headers:{
                            "Content-type":"application/json"
                        }
                    })
                    .then(async(res)=>{
                        const json = await res.json();
                        alert("Marked as Done");
                    });
                }}>{todo.completed==true ? "Done" : "Not Done"}</button>
            </div>
        })}
    </div>
}