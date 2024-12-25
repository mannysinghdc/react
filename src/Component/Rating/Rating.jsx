import { useState } from 'react'

const Rating = () => {

    const arry = new Array(5).fill(0)
    const [rating, setRating] = useState()
    const [hover, setHover] = useState(0)

    return (
        <center>
            <h2>Rating</h2>
            {
                arry.map((item, i) => (
                    <span key={i} style={{ fontSize: "30px", margin: "0px 10px",  transition: "color 0.2s ease-in-out", cursor: "pointer", color: hover === 0 && i < rating || i < hover ? "red" : "" }}
                        onClick={() => setRating(i + 1)}
                        onMouseEnter={() => setHover(i)}
                        onMouseLeave={() => setHover(0)}>&#9733;</span>
                ))
            }
        </center>
    )
}

export default Rating