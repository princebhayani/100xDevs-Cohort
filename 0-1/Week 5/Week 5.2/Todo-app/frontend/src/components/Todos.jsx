
function Todos({todos}) {
    return(
        <div>
            {todos.map(function (todo,i) {
                return(<div key={i}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button >{todo.completed == true ? "Completed" :"Mark as Complete" }</button>
                </div>)
            })}
        </div>)
}

export default Todos;