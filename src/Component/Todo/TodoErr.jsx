import { useContext } from "react"
import { TodoContext } from "../../store/Todo-Item"


const TodoErr = () => {
    const { todo } = useContext(TodoContext)
    return (
        <>
            {
                todo.length == 0 && <p className="text-center lead">Enjoy your day</p>
            }
        </>

    )
}

export default TodoErr
