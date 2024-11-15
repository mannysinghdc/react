import { useEffect } from "react";
import { createContext, useState } from "react";

export const FoodContext = createContext()

const FoodContextProvider = ({ children }) => {      //Load the food array from localStorage on initial render
    const [food, setFood] = useState(() => {
        const storedFood = JSON.parse(localStorage.getItem('food')) || []
        return storedFood
    })

    //Add Food on key press
    const onKeyDownAdd = (e) => {
        const newAddFood = { id: food.length, elm: e.target.value, checked: false }

        if (e.key == 'Enter' && e.target.value) {
            if (food.find(item => item.elm === e.target.value)) {     // find and some work similar
                alert(`${e.target.value} is already exist!`)
                e.target.value = ""
                return
            }

            // setFood([newAddFood, ...food])
            setFood((prev) => [newAddFood, ...prev])   // this is depend on previous value
            alert(`${e.target.value} has been added`)
            e.target.value = ""
            localStorage.setItem("food", JSON.stringify([newAddFood, ...food]))  // set food data from local storage
        }



    }

    //Clear Food Functionility on clear btn
    const clearData = () => {
        setFood([])
    }

    //Delete funtionility
    const deleteFoodItem = (id) => {
        if (id !== undefined) {
            if (confirm("Are you sure want to delete this food item?")) {
                const deleteFood = food.filter((item) => item.id !== id)
                setFood(deleteFood)
            }
        }

    }

    // Save the updated food array to localStorage whenever it changes // chage on delete
    useEffect(() => {
        if (food.length > 0) {
            localStorage.setItem('food', JSON.stringify(food));
        }
    }, [food]);

    return <FoodContext.Provider value={{ food, setFood, onKeyDownAdd, deleteFoodItem, clearData }}>
        {children}
    </FoodContext.Provider>
}

export default FoodContextProvider