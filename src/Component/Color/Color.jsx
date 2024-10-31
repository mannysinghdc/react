import { useContext, useEffect, useState } from "react"   // Color Bg changer by npm pakage react-helmet-async
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Outlet, useNavigate } from "react-router-dom";
import { ColorContext } from "../../store/Color-Item";


const Color = () => {
    const [bg, setBg] = useState("")
    const colorArr = ["red", 'yellow', 'pink', 'olive', 'orange',"violet"]
    const navigate = useNavigate()
    const { flag, setFlag } = useContext(ColorContext) //Context API

    //Color2 and color3 Navigation
    const color2Hnalder = (route) => {
        setFlag(true)
        navigate(route)
    }


    useEffect(() => {
        document.title = "Color" //Title
        

    }, [flag])
    return (
        <>

            {
                !flag && <HelmetProvider>
                    <div className="application">
                        <Helmet>
                            <style>{`body { background-color: ${bg}}`}</style>
                        </Helmet>
                        {/* Color 2 cmpt navigation and font awosome icon used here */}
                        <span title="Color2" style={{ color: 'gray', cursor: "pointer", fontSize: "20px", position: "fixed", top: "80px", left: "15px" }} onClick={() => color2Hnalder('/color/color2')}><i className="fa-solid fa-palette"></i></span>
                        {/* Color 3 cmpt navigation */}
                        <span title="Color3" style={{ color: 'gray', cursor: "pointer", fontSize: "20px", position: "fixed", top: "80px", left: "45px" }} onClick={() => color2Hnalder('/color/color3')} ><i className="fa-solid fa-droplet"></i></span>

                    </div>
                    {/* Button */}
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        {
                            colorArr.map((item, i) => (
                                <MDBBtn key={i} rounded className="mx-1 my-1" onClick={() => setBg(item)}>{item}</MDBBtn>
                            ))
                        }
                    </div>
                </HelmetProvider>
            }
        </>
    )
}

export default Color
