import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./Component/Navbar"
import FoodWeb from "./Component/FoodWeb/FoodWeb"
import Social from "./Component/Social/Social"

const App = () => {
  const { pathname } = useLocation()

  // this function render children cmpt based on route
  const showCmptValue = () => {
    if (pathname == "/foodweb" || pathname == "/foodweb/home" || pathname == "/foodweb/about" || pathname == "/foodweb/contact" || pathname == "/foodweb/menu") {
      return <FoodWeb />

    } else if (pathname == "/social" || pathname == "/social/home" || pathname == "/social/create" || pathname == "/social/post") {
      return <Social />

    } else {
      return <>
        <Navbar />
        <Outlet />
      </>
    }
  }

  return (
    <>
      {showCmptValue()}
    </>
  )
}

export default App
