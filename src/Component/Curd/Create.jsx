import { MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import { useContext, useEffect, useState } from 'react'
import { CurdContext } from '../../store/Curd-Item'

const Create = () => {
    const { flag, detail, submitHandler,updateHandler, changeHandler } = useContext(CurdContext)

    return (
        <>
            <div className="conatiner my-4">
                <h2 className='text-center'>Form</h2>
                <div className="col-md-4 p-3 rounded shadow-4 mx-auto">
                    <form onSubmit={submitHandler}>
                        <MDBInput label="Name" size="sm" name="name" value={detail.name} type="text" className='mb-2' onChange={changeHandler} />
                        <MDBInput label="Email" size="sm" name='email' value={detail.email} type="email" className='mb-2' onChange={changeHandler} />
                        <MDBInput label="Age" size="sm" name='age' value={detail.age} type="text" className='mb-2' onChange={changeHandler} />
                        <MDBInput label="Date" size="sm" name='date' value={detail.date} type="date" className='mb-2' onChange={changeHandler} />
                        {/* <MDBBtn size='sm' className='mx-1' color='success' onClick={(e) => submitHandler(e, 'update')}>Update</MDBBtn> : */}
                        {
                            flag ? <MDBBtn size='sm' color='success' onClick={updateHandler}>Update</MDBBtn> : <MDBBtn size='sm'>Submit</MDBBtn>
                        }


                    </form>
                </div>
            </div>
        </>
    )
}

export default Create