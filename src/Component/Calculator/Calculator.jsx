import { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
    const [display, setDisplay] = useState("")
    const buttonNames = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "/", ".", "*", "0", "C", "="]

    const clicHandler = (value) => {
        if (value === "C") {
            // Clear the display
            setDisplay("")
        }
        else {
            if (value === "=") {
                if (display !== "") {
                    const result = eval(display)
                    console.log(display)
                    setDisplay(String(result))
                }

            } else {
                setDisplay(display + value)
            }
        }


    }

    return (
        <center>
            <h1>Calulator</h1>

            <div className='main_container'>
                <input type="text" className='input_' value={display} readOnly />
                <div className='div_main'>
                    {
                        buttonNames.map((item) => (
                            <button key={item} className='btn_css' onClick={() => clicHandler(item)}>{item}</button>
                        ))
                    }
                </div>
            </div>
        </center>
    )
}

export default Calculator