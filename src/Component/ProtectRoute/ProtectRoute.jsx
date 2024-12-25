import { Outlet, Navigate } from "react-router-dom"

const ProtectRoute = ({children}) => {
    const login = JSON.parse(localStorage.getItem("login-user" || "{}"))
    return (
        <>
            {children}
            {login.flag ? <Outlet /> : <Navigate to={"/login"} replace={true} />}
        </>
    )
}

export default ProtectRoute