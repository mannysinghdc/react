import { createContext, useState } from "react";

export const ColorContext = createContext()

const ColorContextProvider = ({ children }) => {
    const [flag, setFlag] = useState(false)
   
   
    return <ColorContext.Provider value={{ flag, setFlag }}>
        {children}
    </ColorContext.Provider>
}

export default ColorContextProvider