import { MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import { useContext, useState } from 'react'
import { CurdContext } from '../../store/Curd-Item'

const Create = () => {

    const { flag, detail, changeHandler, submitHandler } = useContext(CurdContext) //curd context api


    return (
        <>
            <div className="conatiner my-4">
                <h2 className='text-center'>Form</h2>
                <div className="col-md-5 shadow-4 mx-auto">
                    <form onSubmit={(e) => submitHandler(e, 'add')}>
                        <MDBInput label="Name" size="sm" name="name" value={detail.name} type="text" className='mb-2' onChange={changeHandler} />
                        <MDBInput label="Email" size="sm" name='email' value={detail.email} type="email" className='mb-2' onChange={changeHandler} />
                        <MDBInput label="Age" size="sm" name='age' value={detail.age} type="text" className='mb-2' onChange={changeHandler} />
                        <MDBInput label="Date" size="sm" name='date' value={detail.date} type="date" className='mb-2' onChange={changeHandler} />
                        {
                            flag ? <MDBBtn size='sm' className='mx-1' color='success' onClick={(e) => submitHandler(e, 'update')}>Update</MDBBtn> :
                                <MDBBtn size='sm'>Submit</MDBBtn>
                        }
                    </form>
                </div>
            </div>
        </>
    )
}

export default Create