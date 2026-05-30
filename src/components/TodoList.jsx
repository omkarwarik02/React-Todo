function TodoList({todos,onDelete,onToggle}) {
    if(todos.length === 0){
        return <p className="text-center text-gray-400">No Todos yet! Add one above</p>
    }  

    return (
        <div className="flex flex-col gap-3">
            {todos.map(todo => (
                <div
                key={todo.id}
                className="flex items-center justify-center bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3"
                >
                    <p
                        onClick={() => onToggle(todo.id)}
                        className={`flex-1 text-gray-700 font-medium cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""}`}
                    >{todo.text}</p>
                    <button onClick={()=>onDelete(todo.id)} className="text-red-400 hover:text-red-600 font-bold transition-all">  ❌</button>
                </div>
            ))}
        </div>
    )
}

export default TodoList