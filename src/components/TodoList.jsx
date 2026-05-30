function TodoList({todos}) {
    if(todos.length === 0){
        return <p className="text-center text-gray-400">No Todos yet! Add one above</p>
    }  

    return (
        <div className="flex flex-col gap-3">
            {todos.map(todo => (
                <div
                key={todo.id}
                className="flex items-center justify-center justify-between bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3"
                >
                    <p className="text-gray-700 font-medium">{todo.text}</p>
                    <button className="text-red-400 hover:text-red-600 font-bold transition-all">  ❌</button>
                </div>
            ))}
        </div>
    )
}

export default TodoList