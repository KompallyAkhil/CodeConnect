import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const isLogged = createContext();
export const LoginProvider = ({children}) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState(false);
    const [userId, setUserId] = useState("");
    const [userIdName , setUserIdName] = useState("");
    const [token, setToken] = useState("");
    const [userEmailId, setUserEmailId] = useState("");
    const [time,setTime] = useState();
    useEffect(()=>{
        if(token){
            const currentTime = Date.now() / 1000;
            if(time < currentTime){
                toast.error('Session expired');
                navigate('/')
                setToken("");
            }
            else{
                const remainingTime = (time - currentTime) * 1000;
                const timeoutId = setTimeout(() => {
                    toast.error('Session expired');
                    setToken("");
                  }, remainingTime);
                  return () => clearTimeout(timeoutId);
            }
        }
    },[token,time]);
    return(
        <isLogged.Provider value={{login, setLogin, userId, setUserId , userIdName , setUserIdName , token, setToken ,userEmailId, setUserEmailId,time , setTime }}>
            {children}
        </isLogged.Provider>
    )
}
export const useLogin = () => {
    return useContext(isLogged);
}