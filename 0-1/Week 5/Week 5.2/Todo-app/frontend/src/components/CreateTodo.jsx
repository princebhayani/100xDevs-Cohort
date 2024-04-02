import { useState } from "react";

function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div>
            <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="title"></input>
            <br /> <br />
            <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder="description"></input>
            <br /> <br />
            <button onClick={() => {
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(async function (res) {
                        await res.json();
                        alert("todo added");
                    })
            }}>Add a todo</button>
        </div>
    )
}

export default CreateTodo