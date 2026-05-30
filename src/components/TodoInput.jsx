import { useState } from "react";

function TodoInput({ onAdd}) {
    const [text,setText] = useState("")

    function handleAdd() {
        if(text.trim() === "") return
        onAdd(text)
        setText("")
    }
    return (
        <div className="flex gap-2 mb-6">
            <input 
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 border-2  border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400"
            
            ></input>
            <button
            onClick={handleAdd}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-xl transition-all"
            
            >
                Add

            </button>
        </div>
    )
}
export default TodoInput