import { Navigate } from "react-router-dom"

const NotFoundPage = () => {
    const login = JSON.parse(localStorage.getItem("login"))

    return (
        <>
            {/* This naviagte is used for naviagte to login page if user is not login */}
            {
                login === null && <Navigate to="/login" replace={true} />
            }
            <div className='container'>
                <img src='/404.avif' className="img-fluid img-thumbnail" alt="image" style={{ height: "90vh" }} />
            </div>
        </>

    )
}

export default NotFoundPage
