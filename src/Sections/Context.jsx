import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
const isLogged = createContext();
export const LoginProvider = ({children}) => {
    const [login, setLogin] = useState(false);
    const [userId, setUserId] = useState("");
    const [ userIdName , setUserIdName] = useState("");
    const [token, setToken] = useState("");
    const [userEmailId, setUserEmailId] = useState("");
    const [time,setTIme] = useState();
    return(
        <isLogged.Provider value={{login, setLogin, userId, setUserId , userIdName , setUserIdName , token, setToken ,userEmailId, setUserEmailId,time , setTIme }}>
            {children}
        </isLogged.Provider>
    )
}
export const useLogin = () => {
    return useContext(isLogged);
}