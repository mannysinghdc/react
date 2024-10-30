import { Outlet } from "react-router-dom"
import Header from "./Header"
import MediaContextProvider from "../../store/Media-Item"
import Dial from "../FoodWeb/Dial"


const Social = () => {
    // height object of dial on diff route of Social
    const ht = {
        h1: 500,
        h2: 450,
        h3: 50
    }
    return (
        <MediaContextProvider>
            <Header />
            <Outlet />
            <Dial height={ht} />
        </MediaContextProvider>
    )
}

export default Social
