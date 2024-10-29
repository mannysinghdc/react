import { createContext, useEffect, useState } from "react"

export const CurdContext = createContext({
    data: [],
})

const CurdContextProvider = ({ children }) => {
    const [detail, setDetail] = useState({ name: "", email: "", age: "", date: "" })
    const [data, setData] = useState([])
    const [flag, setFlag] = useState(false)
    const [id, setId] = useState(undefined)

    //Get data from create
    const addData = (val) => {
        const newData = { id: data.length, ...val }
        setData([newData, ...data])
    }
    //Select id after clicked on edit button on read cmpt
    const editHandler = (id) => {
        setFlag(true)
        setId(id)
    }

    // Submit handler
    //add data by form input
    const submitHandler = (e, action) => {
        e.preventDefault()
        if (action == "add") {
            addData(detail)
            setDetail({ name: "", email: "", age: "", date: "" })
            alert("Create successfully")
        }
        if (action == "update") {                     // update 
            //First Calculate index of id
            const index = data.map((item) => (
                item.id
            )).indexOf(id)

            if (!detail.name || !detail.email || !detail.age || !detail.date) {
                alert("Please enter all detail")
            } else {
                const updateData = [...data]
                updateData[index].name = detail.name
                updateData[index].email = detail.email
                updateData[index].age = detail.age
                updateData[index].date = detail.date
                setData(updateData)
                setFlag(false)

                alert("Update successfully")
                setDetail({ name: "", email: "", age: "", date: "" })

            }
        }

    }

    //Refill data based on id
    const editHandlerId = () => {
        const dt = data.filter(e => e.id === id)
        // console.log(Math.random)
        if (id !== undefined) {
            setDetail({ name: dt[0].name, email: dt[0].email, age: dt[0].age, date: dt[0].date })
        }
    }

    // ChangeHanlder of input
    const changeHandler = (e) => {
        const name = e.target.name
        setDetail({ ...detail, [name]: e.target.value })
    }

    //Delete Functionility
    const deleteHandler = (id) => {
        const deleteData = data.filter(e => e.id !== id)
        if (id !== undefined) {
            if (confirm("Are to sure want to delete this item?")) {
                setData(deleteData)
            }
        }
    }

    useEffect(() => {
        if (flag && id !== undefined) {
            editHandlerId()
        }

    }, [id, flag])

    return <CurdContext.Provider value={{ data, setData, flag, detail, editHandler, deleteHandler, changeHandler, submitHandler, editHandlerId }}>
        {children}
    </CurdContext.Provider>
}

export default CurdContextProvider