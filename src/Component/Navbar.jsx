import { useContext, useEffect } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { ColorContext } from "../store/Color-Item"
import DrawerCmpt from "./DrawerCmpt"
import { MDBBtn } from 'mdb-react-ui-kit';


const Navbar = () => {
    const { setFlag } = useContext(ColorContext) // Color context api
    const navigate = useNavigate()
    const login = JSON.parse(localStorage.getItem("login"))
    const loggedUser = JSON.parse(localStorage.getItem("user"))  // localStorge user value



    //Color navigate function
    const colorHanlder = () => {
        setFlag(false)
        const bodyElm = document.querySelector("body")
        bodyElm.style.backgroundColor = ""

    }

    //  Logout finctionilty
    const clearLogout = () => {
        localStorage.removeItem("login")  //clear login from localStorage
    }

    //CapitalizeFirstLetter Function
    const capitalizeFirstLetter = (word) => {
        return String(word).charAt(0).toUpperCase() + String(word).slice(1)
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#cbf8f8" }}>
                {/* mui drawer Cmpt */}
                {login && <DrawerCmpt />}
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="/project.webp" className="rounded" alt="image" height={30} />
                    </Link>
                    {login && <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>}

                    {
                        login ? <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/" style={({ isActive }) => isActive === true ? { color: "red" } : null} onClick={colorHanlder} >Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/accordion" style={({ isActive }) => isActive === true ? { color: "red" } : null} onClick={colorHanlder}>Accordion</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/clock" style={({ isActive }) => isActive === true ? { color: "red" } : null} onClick={colorHanlder}>Clock</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/curd" style={({ isActive }) => isActive === true ? { color: "red" } : null} onClick={colorHanlder}>Curd</NavLink>
                                </li>
                                <li className="nav-item">
                                    {/* Color Button */}
                                    <NavLink className="nav-link" to="/color" style={({ isActive }) => isActive === true ? { color: "red" } : null} onClick={colorHanlder} >Color</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/foodweb" onClick={colorHanlder}>Foodweb</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/todo" style={({ isActive }) => isActive === true ? { color: "red" } : null} onClick={colorHanlder}>Todo</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/room" style={({ isActive }) => isActive === true ? { color: "red" } : null} onClick={colorHanlder}>LiveChat</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/social" onClick={colorHanlder}>Social</NavLink>
                                </li>

                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="#" style={{ color: "red" }}>{capitalizeFirstLetter(loggedUser.name)}</Link></li>
                                        <li><Link className="dropdown-item" to="/Profile">Profile</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="/login" onClick={clearLogout}>Logout</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                            :
                            <div>
                                <MDBBtn size="sm" rounded onClick={() => navigate('/login')}>Login</MDBBtn>
                                <MDBBtn size="sm" rounded className="mx-1" onClick={() => navigate('/signUp')}>SignUp</MDBBtn>
                            </div>

                    }

                </div>
            </nav>
        </>
    )
}

export default Navbar
