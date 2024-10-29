import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext()


const TodoContextProvider = ({ children }) => {
    const [todo, setTodo] = useState([])
    const [detail, setDetail] = useState({ name: "", date: "" })
    const [flag, setFlag] = useState(false)
    const [id, setId] = useState("")

    // Create new todo by gatting data from form addTodo input
    const addTodo = (data) => {
        const addNewTodo = { id: todo.length, ...data }
        // setTodo([addNewTodo, ...todo])  // old way

        setTodo((curValue) => [addNewTodo, ...curValue])  // new way and it depend on previous value callded Functional Update
    }

    //Submit handler and add data by form input 
    const submitHandler = (e) => {
        e.preventDefault()
        if (!detail.name || !detail.date) {
            alert("Please fill all details!")
        } else {
            addTodo(detail)
            alert("New todod created!")
            setDetail({ name: "", date: "" })
        }

    }


    //Input handler or change handler for form
    const inputHandler = (e, property) => {
        setDetail({ ...detail, [property]: e.target.value })
    }

    //Refill data based on id
    const edithandlerId = () => {
        if (id !== "") {
            const dt = todo.filter(item => item.id === id)
            setDetail({ name: dt[0].name, date: dt[0].date })
        }
    }

    //Update funtionility
    const updateHandler = (e) => {
        e.preventDefault()
        //First Calculate index of id
        const index = todo.map((item) => (
            item.id
        )).indexOf(id)

        if (!detail.name || !detail.date) {
            alert("Please enter all detail")
        } else {
            const updateTodo = [...todo]
            updateTodo[index].name = detail.name
            updateTodo[index].date = detail.date
            setTodo(updateTodo)
            setFlag(false)
            setDetail({ name: "", date: "" })
            alert("Update successfully")
        }
    }

    //Delete funtionility
    const deleteHanlder = (id) => {
        if (id !== undefined) {
            if (confirm("Are you sure to delete this todo?")) {
                const deleteTodo = todo.filter((e) => e.id !== id)
                setTodo(deleteTodo)
                setFlag(false)
                setDetail({ name: "", date: "" })
            }
        }
    }

    //edit funtionility
    const editTodoItem = (id) => {
        setId(id)
        setFlag(true)
    }

    useEffect(() => {
        if (flag && id !== undefined) {
            edithandlerId()
        }
    }, [id, flag])

    return <TodoContext.Provider value={{ todo, flag, detail, deleteHanlder, editTodoItem,submitHandler, inputHandler, updateHandler }}>
        {children}
    </TodoContext.Provider>
}

export default TodoContextProvider