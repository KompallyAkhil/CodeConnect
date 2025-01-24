import { User, Lock } from "lucide-react";
import { useState } from "react";
const Login = () => {
    const [isLogin, setLogin] = useState(true);


    return (
        <>
            <div className="auth-container">
                <div className="auth-card">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 rounded-xl mb-4">
                            <User className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold">Welcome Back</h1>
                        <p className="text-gray-600 mt-2">
                            {isLogin
                                ? "Enter your details to sign in"
                                : "Enter your details to get started"}
                        </p>
                        <div className="container">
                                
                            <input placeholder="Email address" className="w-full border-collapse" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Login;