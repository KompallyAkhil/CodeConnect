import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
const isLogged = createContext();
export const LoginProvider = ({children}) => {
    const [login, setLogin] = useState(false);
    const [userID, setUserID] = useState("");
    return(
        <isLogged.Provider value={{login, setLogin, userID, setUserID}}>
            {children}
        </isLogged.Provider>
    )
}
export const useLogin = () => {
    return useContext(isLogged);
}