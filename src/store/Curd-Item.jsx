import { createContext, useEffect, useState } from "react"

export const CurdContext = createContext({
    data: [],
})

const CurdContextProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [detail, setDetail] = useState({ name: "", email: "", age: "", date: "" })
    const [flag, setFlag] = useState(false)
    const [id, setId] = useState(null)



    // ChangeHanlder of input
    const changeHandler = (e) => {
        const name = e.target.name
        setDetail({ ...detail, [name]: e.target.value })
    }



    //Submit
    const submitHandler = (e) => {
        e.preventDefault()
        const trimmedName = detail.name.trim() // Remove whitespace and empty string
        //add new user
        const addUser = {
            id: data.length,
            name: trimmedName,
            email: detail.email,
            age: detail.age,
            date: detail.date,
            checked: false
        }
        // Validation for empty fields
        if (!trimmedName || !detail.age || !detail.email || !detail.date) {
            alert("Please enter all details!")
            return
        }
        // Validation for duplicates
        if (data.some((elm) => elm.name === trimmedName || elm.email === detail.email)) {
            alert("This name is already present!")
            setDetail({ name: "", age: "", email: "", date: "" })
            return
        }
        setData((prev) => [addUser, ...prev])
        setDetail({ name: "", age: "", email: "", date: "" })

    }


    // Submit handler
    //add data by form input
    // const submitHandler = (e, action) => {
    //     e.preventDefault()
    //     if (action == "add") {
    //         addData(detail)
    //         setDetail({ name: "", email: "", age: "", date: "" })
    //         alert("Create successfully")
    //     }
    //     if (action == "update") {                     // update 
    //         //First Calculate index of id
    //         const index = data.map((item) => (
    //             item.id
    //         )).indexOf(id)

    //         if (!detail.name || !detail.email || !detail.age || !detail.date) {
    //             alert("Please enter all detail")
    //         } else {
    //             const updateData = [...data]
    //             updateData[index].name = detail.name
    //             updateData[index].email = detail.email
    //             updateData[index].age = detail.age
    //             updateData[index].date = detail.date
    //             setData(updateData)
    //             setFlag(false)

    //             alert("Update successfully")
    //             setDetail({ name: "", email: "", age: "", date: "" })

    //         }
    //     }

    // }

    //Refill data based on id
    const editHandler = (id) => {
        const dt = data.filter(e => e.id === id)
        setDetail({ name: dt[0].name, age: dt[0].age, email: dt[0].email, date: dt[0].date })
        setFlag(true)
        setId(id)
    }

    //Update Functionility
    const updateHandler = (e) => {
        e.preventDefault()
        const trimmedName = detail.name.trim()

        // Validation for empty fields
        if (!trimmedName || !detail.age || !detail.email || !detail.date) {
            alert("Please enter details!")
            return;
        }

        // Avoid duplicate names
        // if (data.some((elm) => elm.name === trimmedName || elm.id !== id)) {
        //     alert("This name is already present!");
        //     return
        // }

        setData((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, name: trimmedName, age: detail.age, email: detail.email, date: detail.date }
                    : item
            )
        )

        setDetail({ name: "", age: "", email: "", date: "" })
        setFlag(false)
        setId(null)
    }

    //Delete Functionility
    const deleteHandler = (id) => {
        const deleteData = data.filter(e => e.id !== id)
        if (confirm("Are to sure want to delete this item?")) {
            setData(deleteData)
        }
    }

    // useEffect(() => {
    //     if (flag && id !== undefined) {
    //         editHandlerId()
    //     }

    // }, [id, flag])

    return <CurdContext.Provider value={{ flag, data, setData, detail, setDetail, changeHandler, updateHandler, submitHandler, deleteHandler, editHandler }}>
        {children}
    </CurdContext.Provider>
}

export default CurdContextProvider