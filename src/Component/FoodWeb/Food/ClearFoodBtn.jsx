import { MDBBtn } from 'mdb-react-ui-kit'
import { useContext } from 'react'
import { FoodContext } from '../../../store/Food-Item'

const ClearFoodBtn = () => {
    const { clearData } = useContext(FoodContext)
    
    return (
        <div className='my-2 text-center'>
            <MDBBtn size='sm' onClick={clearData}>Clear</MDBBtn>
        </div>
    )
}

export default ClearFoodBtn