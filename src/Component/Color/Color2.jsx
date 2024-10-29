import { useContext, useState, useEffect } from "react"  // Color changer by get random number index of given color arrary
import { useNavigate } from "react-router-dom"
import { MDBBtn } from 'mdb-react-ui-kit';
import { ColorContext } from "../../store/Color-Item";


const Color2 = () => {
    const [bg, setBg] = useState("")
    const navigate = useNavigate()
    const { flag, setFlag } = useContext(ColorContext)
    const colorArr = ["red", 'yellow', 'pink', 'olive', 'orange', 'aqua', 'red', 'black', 'blue', 'violet', 'Lime']

    //Random color pick function
    const randomColor = () => {
        const index = Math.floor(Math.random() * colorArr.length)
        setBg(colorArr[index])
    }

    //Color remove on doubleclick function
    const doubleHandler = () => {
        setBg("")
        alert("Background Color has been removed!")
    }

    useEffect(() => {
        document.title = "Color2" //Title
    }, [flag])

    return (
        <>
            <p className="text-center">color2</p>
            <div style={{ backgroundColor: bg, height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

                {/* Color cmpt navigation */}
                <span title="Color" style={{ color: 'gray', cursor: "pointer", fontSize: "20px", position: "fixed", top: "70px", left: "15px" }} onClick={() => { navigate('/color'), setFlag(false) }}><i className="fa-solid fa-droplet"></i></span>
                <MDBBtn rounded className="btn btn-primary btn-sm" onClick={randomColor} onDoubleClick={doubleHandler}>{bg ? bg : "Color"}</MDBBtn>

            </div>
        </>
    )
}

export default Color2
