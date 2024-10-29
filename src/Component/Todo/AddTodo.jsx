import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import { useContext } from 'react'
import { TodoContext } from '../../store/Todo-Item'

const AddTodo = () => {
    const { detail, flag, submitHandler, inputHandler, updateHandler } = useContext(TodoContext)

    return (
        <>
            <MDBContainer className='mb-4'>
                <form onSubmit={submitHandler}>
                    <MDBRow>
                        <MDBCol size='md-6' className='mt-2'>
                            <MDBInput label="Add Todo" id="name" type="text" value={detail.name} onInput={(e) => inputHandler(e, 'name')} />
                        </MDBCol>
                        <MDBCol size='md-4' className='mt-2'>
                            <MDBInput label="Date" id="date" type="date" value={detail.date} onInput={(e) => inputHandler(e, 'date')} />
                        </MDBCol>
                        <MDBCol size='md-2' className='mt-2'>
                            {
                                flag ? <MDBBtn rounded size='sm' color='success' onClick={updateHandler}>Update</MDBBtn> : <MDBBtn rounded size='sm'>Add</MDBBtn>
                            }

                        </MDBCol>
                    </MDBRow>
                </form>
            </MDBContainer>

        </>
    )
}

export default AddTodo
