import FoodContextProvider from "../../../store/Food-Item"
import AddFood from "./AddFood"
import ClearFoodBtn from "./ClearFoodBtn"
import Container from "./Container"
import FoodList from "./FoodList"
import FoodMsg from "./FoodMsg"


const Food = () => {
    return (
        <FoodContextProvider>
            <h2 className="text-center fst-italic mt-4">Order your food</h2>
            <Container>
                <AddFood />
                <FoodMsg />
                <FoodList />
            </Container>
            <ClearFoodBtn />
        </FoodContextProvider>
    )
}

export default Food
