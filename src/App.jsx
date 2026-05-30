import { useState } from "react"

import TodoInput from './components/TodoInput' 


import TodoList from './components/TodoList'



function App() {
const [todos, setTodos] = useState([]);




function deleteTodo(id){
  setTodos(todos.filter(todo => todo.id !== id))
}

function toggleTodo(id){
  setTodos(todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed}: todo))
}


function addTodo(text){

  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false
  }

  setTodos([...todos, newTodo])

}

  return (
    <div className=" min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
         <h1 className="text-purple-600 text-3xl font-bold mb-6">
        Todo App
      </h1>
      <TodoInput onAdd ={addTodo}></TodoInput>
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo}></TodoList>
      </div>
    </div>
  )
}
export default App