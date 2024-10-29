import FoodContextProvider from "../../../store/Food-Item"
import AddFood from "./AddFood"
import Container from "./Container"
import FoodList from "./FoodList"
import FoodMsg from "./FoodMsg"


const Food = () => {
    return (
        <>
            <h2 className="text-center fst-italic mt-4">Order your food</h2>
            <Container>
                <FoodContextProvider>
                    <AddFood />
                    <FoodMsg />
                    <FoodList />
                </FoodContextProvider>
            </Container>
        </>
    )
}

export default Food
