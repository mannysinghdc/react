import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

const Live = () => {
    const [value, setValue] = useState("")
    const navigate = useNavigate()


    const joinHanlder = () => {
        navigate(`/room/${value}`)
    }


    return (
        <div className="container d-flex my-4 col-md-6">
            <MDBInput className="mx-1" label="Enter user Id" id="form1" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <MDBBtn onClick={joinHanlder}>Join</MDBBtn>
        </div>
    )
}

export default Live