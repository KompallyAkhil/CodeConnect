import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
const isLogged = createContext();
export const LoginProvider = ({children}) => {
    const [login, setLogin] = useState(false);
    return(
        <isLogged.Provider value={{login, setLogin}}>
            {children}
        </isLogged.Provider>
    )
}
export const useLogin = () => {
    return useContext(isLogged);
}