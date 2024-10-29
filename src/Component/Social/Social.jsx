import { Outlet } from "react-router-dom"
import Header from "./Header"
import MediaContextProvider from "../../store/Media-Item"
import Dial from "../FoodWeb/Dial"


const Social = () => {
    return (
        <MediaContextProvider>
            <Header />
            <Outlet />
            <Dial height={500}/>
        </MediaContextProvider>
    )
}

export default Social
