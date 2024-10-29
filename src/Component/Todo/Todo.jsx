import { useEffect } from "react"
import TodoContextProvider from "../../store/Todo-Item"
import AddTodo from "./AddTodo"
import Container from "./Container"
import TodoErr from "./TodoErr"
import TodoList from "./TodoList"

const Todo = () => {

    useEffect(() => {
        document.title = "Todo App" //Title
    }, [])
    
    return (
        <>

            <h2 className="text-center fst-italic mt-4">Todo App</h2>
            <Container>
                <TodoContextProvider>
                    <AddTodo />
                    <TodoErr />
                    <TodoList />
                </TodoContextProvider>
            </Container>
        </>
    )
}

export default Todo
