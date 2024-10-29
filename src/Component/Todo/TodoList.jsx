import { useContext } from "react"
import { TodoContext } from "../../store/Todo-Item"
import TodoItem from "./TodoItem"


const TodoList = () => {
    const { todo } = useContext(TodoContext)
    
    return (
        <>
            {
                todo.map((item) => (
                    <TodoItem key={item.id} item={item}/>
                ))
            }
        </>
    )
}

export default TodoList
