import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLogin } from "./Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const {
        setLogin,
        setUserId,
        setUserIdName,
        setToken
    } = useLogin();

    const [loginData, setLoginData] = useState({
        name: "",
        password: "",
    });
    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const changeLoginData = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const changeSignUpData = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    };
    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/login", loginData);
            setLoginData({
                name: "",
                password: ""
            })
            toast.success('Successfully Login');
            setLogin(true);
            setUserId(response.data.id);
            setUserIdName(response.data.userName);
            setToken(response.data.token);
        } catch (error) {
            if (error.response.data?.message) {
                console.log(error.response.data.message);
            }
        }
    }
    async function handleSignup(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/signup", signupData);
            setSignupData({
                name: "",
                email: "",
                password: ""
            })
            toast.success('Successfully Login');
        } catch (error) {
            if (error.response.data?.message) {
                toast.error(error.response.data.message);
            }
        }
    }
    return (
        <>
            <Toaster />
            <div className="flex items-center justify-center bg-[#fafafa] px-4">
                <div className="w-full max-w-md">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 p-8"
                    >
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                                {isLogin ? "Welcome back" : "Create account"}
                            </h1>
                            <p className="mt-2 text-sm text-gray-500">
                                {isLogin
                                    ? "Enter your details to sign in"
                                    : "Enter your details to get started"}
                            </p>
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.form
                                key={isLogin ? "login" : "signup"}
                                initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-4"
                            >
                                <div className="space-y-1">
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium text-gray-700 flex items-center gap-2"
                                    >
                                        <User className="w-4 h-4" />
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
                                        placeholder="John Doe"
                                        value={isLogin ? loginData.name : signupData.name}
                                        onChange={isLogin ? changeLoginData : changeSignUpData}
                                    />
                                </div>
                                {!isLogin && (
                                    <div className="space-y-1">
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-medium text-gray-700 flex items-center gap-2"
                                        >
                                            <Mail className="w-4 h-4" />
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
                                            placeholder="john@example.com"
                                            value={signupData.email}
                                            onChange={changeSignUpData}
                                        />
                                    </div>
                                )}
                                <div className="space-y-1">
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-medium text-gray-700 flex items-center gap-2"
                                    >
                                        <Key className="w-4 h-4" />
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        required
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
                                        placeholder="••••••••"
                                        value={isLogin ? loginData.password : signupData.password}
                                        onChange={isLogin ? changeLoginData : changeSignUpData}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full"
                                    size="lg"
                                    onClick={isLogin ? handleLogin : handleSignup}
                                >
                                    {isLogin ? "Sign in" : "Sign up"}
                                </Button>
                            </motion.form>
                        </AnimatePresence>
                        <div className="mt-6 text-center">
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-sm text-gray-500 hover:text-black transition-colors duration-200"
                            >
                                {isLogin
                                    ? "Don't have an account? Sign up"
                                    : "Already have an account? Sign in"}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Login;
