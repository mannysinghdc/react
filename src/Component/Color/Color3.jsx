import { useState, useEffect, useContext } from "react"
import { ColorContext } from "../../store/Color-Item"
import { useLocation } from "react-router-dom"
import { MDBBtn } from 'mdb-react-ui-kit'


const Color3 = () => {
    const [bg, setBg] = useState("")
    let location = useLocation();
    const { flag, setFlag } = useContext(ColorContext)
    const bodyElm = document.querySelector("body")
  

    const colorArr = ["red", 'yellow', 'pink', 'olive', 'orange']

    useEffect(() => {
        if (location.pathname == "/color/color3") {
            bodyElm.style.backgroundColor = bg
        }
        if(location.pathname == "/"){
            bodyElm.style.backgroundColor = ""
        }


    }, [bg,flag])

    return (
        <>
            <p className="text-center">color3</p>
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
