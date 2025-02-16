import { Navigate } from "react-router-dom";
import { useLogin } from "./Context";
import toast from "react-hot-toast";

const ProtectedRoutes = ({children}) => {
    const { login } = useLogin();
    if(!login){
        toast.error('Please Login to Continue');
    }
    return login ? children : <Navigate to='/'/>
}
export default ProtectedRoutes;