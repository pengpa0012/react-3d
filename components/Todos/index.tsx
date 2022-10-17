import { SetStateAction, useState } from "react"
import Button from "../Button"

interface Props {
  todos: Array<String | number>,
  setTodos: React.Dispatch<SetStateAction<any[]>>
}

const Todos: React.FC<Props> = ({todos, setTodos}) => {
  const deleteTodo = (todos: Array<String | number> , index: number) => {
    setTodos(todos.filter(e => index !== todos.indexOf(e)))
  }
  return (
    <div>
      {
        todos.map((todo, index) => (
          <p className="flex">{todo}<Button onClick={() => deleteTodo(todos, index)} remove={true}/></p>
        ))
      }
    </div>
  )
}

export default Todos
