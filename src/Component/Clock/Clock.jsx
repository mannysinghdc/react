import { useEffect, useState } from "react"
import Greeting from "./Greeting"

const Clock = () => {
    const [date, setDate] = useState(new Date())
    //Style css
    const styleCss = {
        width: "35%",
        border: '1px solid',
        backgroundColor: '#fcffff',
        borderRadius: '10px',
        boxShadow: '2px 1px 3px 1px #fcd5dc'
    }

    useEffect(() => {
        document.title = "Digital Clock" //Title

        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(timer)
            // clear timer when component unmouts
        }
    }, [])


    return (
        <>
            <div className="container text-center my-4" style={styleCss}  >
                <h2 className="text-info my-4">Digital Clock</h2>
                <h3>{date.toLocaleTimeString()}</h3>
                <p>Date: {date.toLocaleDateString()}</p>
            </div>
            {/* Greeting */}
            <Greeting />
        </>
    )
}

export default Clock