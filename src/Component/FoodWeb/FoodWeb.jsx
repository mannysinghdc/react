import { Outlet } from "react-router-dom"
import FooterFood from "./Footer/FooterFood"
import Header from "./Header/Header"
import { useEffect } from "react"


const FoodWeb = () => {
    useEffect(() => {
        document.title = "Foodweb"
    }, [])

    return (
        <>
            <Header />
            <Outlet />
            <FooterFood />

        </>
    )
}

export default FoodWeb
