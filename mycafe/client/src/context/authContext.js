import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [currentUser, current] = useState(JSON.parse(localStorage.getItem("user") || null))

    const login = async(inputs)=>{
        const res = await axios.post("/auth/login", inputs)
        current(res.data)
    }

    const logout = async(inputs)=>{
        await axios.post("/auth/logout")
        current(null)
    } 

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser))
    },[currentUser])

    return(
        <AuthContext.Provider value = {{currentUser,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}