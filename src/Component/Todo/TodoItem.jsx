import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBBtn } from 'mdb-react-ui-kit';
import { useContext } from 'react';
import { TodoContext } from '../../store/Todo-Item';


const TodoItem = ({ item }) => {
    const { editTodoItem, deleteHanlder } = useContext(TodoContext)

    // Capitalize first letter funtion
    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        <>
            <MDBContainer>
                <hr />
                <MDBRow>
                    <MDBCol size='md-6'>
                        <MDBTypography className='text-muted' tag='em'>{capitalizeFirstLetter(item.name)}</MDBTypography>
                    </MDBCol>
                    <MDBCol size='md-4'>
                        <MDBTypography className='text-muted' tag='em'>{item.date}</MDBTypography>
                    </MDBCol>
                    <MDBCol size='md-2'>
                        {/* Font awesome icon */}
                        <span title='Delete' style={{ fontSize: "20px", color: "red", cursor: "pointer" }} onClick={() => deleteHanlder(item.id)}><i className="fa-solid fa-trash"></i></span>
                        <span title='Edit' style={{ fontSize: "20px", color: "blue", marginLeft: "10px", cursor: "pointer" }} onClick={() => editTodoItem(item.id)}><i className="fa-solid fa-pen-fancy"></i></span>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    )
}

export default TodoItem
