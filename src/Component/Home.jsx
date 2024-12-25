import { useEffect } from "react"

const Home = () => {
    useEffect(() => {
        document.title = "Home"
    }, [])
    return (
        <center>
            <h1>home page</h1>
            
        </center>
    )
}

export default Home
