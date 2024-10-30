import { useState, useEffect, useContext } from "react"
import { ColorContext } from "../../store/Color-Item"
import { useLocation } from "react-router-dom"
import { MDBBtn } from 'mdb-react-ui-kit'


const Color3 = () => {
    const [bg, setBg] = useState("")
    let {pathname} = useLocation()
    const { flag, setFlag } = useContext(ColorContext)
    const bodyElm = document.querySelector("body")


    const colorArr = ["red", 'yellow', 'pink', 'olive', 'orange',"green"]

    useEffect(() => {
        if (pathname == "/color/color3") {
            bodyElm.style.backgroundColor = bg
            setFlag(true)
        }
        // if (pathname == "/color") {
        //     bodyElm.style.backgroundColor = ""
        // }


    }, [bg, flag])

    return (
        <>
            {/* Button */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                {
                    colorArr.map((item, i) => (
                        <MDBBtn key={i} rounded className="mx-1" onClick={() => setBg(item)}>{item}</MDBBtn>
                    ))
                }
            </div>
        </>
    )
}

export default Color3
