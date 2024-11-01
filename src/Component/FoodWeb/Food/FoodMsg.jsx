import React, { useContext } from 'react'
import { FoodContext } from '../../../store/Food-Item'

const FoodMsg = () => {
    const { food } = useContext(FoodContext)
    return (
        <>
            {
                food.length == 0 && <p className='text-center lead'>No food item are avaible</p>
            }
        </>
    )
}

export default FoodMsg
