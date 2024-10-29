import { Outlet } from "react-router-dom"
import FooterFood from "./Footer/FooterFood"
import Header from "./Header/Header"


const FoodWeb = () => {
    return (
        <>
            <Header />
            <Outlet />
            <FooterFood />

        </>
    )
}

export default FoodWeb
