import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    // inputHandler or change handler
    const inputHandle = (e, property) => {
        setData({ ...data, [property]: e.target.value })
    }



    //submit 
    const submitHandler = (e) => {
        e.preventDefault()

        //Get user detail from localStorage
        const loggedUser = JSON.parse(localStorage.getItem("user-info") || "[]")
    

        if (!data.email || !data.password) {       //Validation
            alert("Please enter valid email and password")
        } else if (loggedUser.length === 0) {
            alert("No such email is ragistered!")
        }

        loggedUser.map((item) => {
            if (item.email === data.email && item.password === data.password) {
                localStorage.setItem("login-user", JSON.stringify({ flag: true, name: item.name }))
                alert("Login successfully!")
                navigate("/")
            } else {
                alert("Invalid email and password!")
            }
        })

    }

    return (
        <>
            <h2 className='text-center my-4'>Login here</h2>
            <form className='col-md-4 mx-auto' onSubmit={submitHandler}>
                <MDBInput className='mb-4' type='email' id='email' label='Email address' value={data.email} onInput={(e) => inputHandle(e, 'email')} />
                <MDBInput className='mb-4' type='password' id='password' label='Password' value={data.password} onInput={(e) => inputHandle(e, 'password')} />

                <MDBRow className='mb-4'>
                    <MDBCol className='d-flex justify-content-center'>
                        <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                    </MDBCol>
                    <MDBCol>
                        <a href='#!'>Forgot password?</a>
                    </MDBCol>
                </MDBRow>

                <MDBBtn type='submit' className='mb-4' block>
                    Sign in
                </MDBBtn>

                <div className='text-center'>
                    <p>
                        Not a member? <Link to='/signUp'>Register</Link>
                    </p>
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

export default Login

