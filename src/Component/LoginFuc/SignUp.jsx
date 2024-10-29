import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [data, setData] = useState({ name: "", lastName: "", email: "", password: "" })
    const navigate = useNavigate()

    //inputHandler or change handler
    const inputHandler = (e, property) => {
        setData({ ...data, [property]: e.target.value })
    }

    
    //submit  
    const submitHandler = (e) => {
        e.preventDefault()
        if (!data.name || !data.lastName || !data.email || !data.password) {
            alert("Please enter all value!")
        } else {
            localStorage.setItem("user", JSON.stringify(data))
            navigate("/login")
        }

    }
    return (
        <>
            <h2 className='text-center my-4'>Register form</h2>
            <form className='col-md-4 mx-auto' onSubmit={submitHandler}>
                <MDBRow className='mb-4'>
                    <MDBCol>
                        <MDBInput id='firstName' label='First name' value={data.name} onInput={(e) => inputHandler(e, 'name')} />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput id='lastName' label='Last name' value={data.lastName} onInput={(e) => inputHandler(e, 'lastName')} />
                    </MDBCol>
                </MDBRow>
                <MDBInput className='mb-4' type='email' id='email' label='Email address' onInput={(e) => inputHandler(e, 'email')} />
                <MDBInput className='mb-4' type='password' id='password' label='Password' onInput={(e) => inputHandler(e, 'password')} />

                <MDBCheckbox
                    wrapperClass='d-flex justify-content-center mb-4'
                    id='form3Example5'
                    label='Subscribe to our newsletter'
                    defaultChecked
                />

                <MDBBtn type='submit' className='mb-4' block>
                    Sign in
                </MDBBtn>

                <div className='text-center'>
                    <p>or sign up with:</p>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='google' />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </div>
            </form>
        </>
    )
}
export default SignUp