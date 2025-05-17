import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLogin } from "./Context";
import axios from "axios";
import toast from 'react-hot-toast';
import { jwtDecode } from "jwt-decode";
import { Loader2 } from "lucide-react";
import { z } from "zod";
const loginSchema = z.object({
    name: z.string().min(1, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});
const signupSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string()
        .min(6, "Password must be at least 6 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[0-9]/, "Password must contain at least one number"),
});
const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isloading, setIsLoading] = useState(false);
    const {
        setLogin,
        setUserId,
        setUserIdName,
        setToken,
        setUserEmailId,
        setTime
    } = useLogin();
    const [errors, setErrors] = useState({});
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
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const changeSignUpData = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const validateLoginData = () => {
        try {
            loginSchema.parse(loginData);
            setErrors({});
            return true;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = {};
                error.errors.forEach((err) => {
                    fieldErrors[err.path[0]] = err.message;
                });
                setErrors(fieldErrors);
            }
            return false;
        }
    };
     const validateSignupData = () => {
        try {
            signupSchema.parse(signupData);
            setErrors({});
            return true;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = {};
                error.errors.forEach((err) => {
                    fieldErrors[err.path[0]] = err.message;
                });
                setErrors(fieldErrors);
            }
            return false;
        }
    };
    async function handleLogin(e) {
        e.preventDefault();
           if (!validateLoginData()) {
            return;
        }
        setIsLoading(true);
        try {
            const response = await axios.post("https://code-connect-backend-one.vercel.app/login", loginData);
            setLoginData({
                name: "",
                password: ""
            })
            toast.success('Logged In Successfully');
            const token = jwtDecode(response.data.jwtToken);
            setLogin(true);
            setUserId(token.id);
            setUserIdName(token.userName);
            setToken(token.token);
            setUserEmailId(token.userEmailId);
            setTime(token.exp);
        } catch (error) {
            if (error.response.data?.message) {
                toast.error(error.response.data.message);
            }
        }
        finally {
            setIsLoading(false);
        }
    }

    async function handleSignup(e) {
        e.preventDefault();
        if (!validateSignupData()) {
            return;
        }
        setIsLoading(true);
        try {
            const response = await axios.post("https://code-connect-backend-one.vercel.app/signup", signupData);
            setSignupData({
                name: "",
                email: "",
                password: ""
            })
            toast.success('Registered Successfully');
        } catch (error) {
            if (error.response.data?.message) {
                toast.error(error.response.data.message);
            }
        }
        finally {
            setIsLoading(false);
        }
    }
     const toggleLoginMode = () => {
        setErrors({});
        setIsLogin(!isLogin);
    };
    return (
        <>
            <div className="flex items-center justify-center px-4">
                <div className="w-full max-w-md">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-xl shadow-sm border p-8"
                    >
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold tracking-tight">
                                {isLogin ? "Welcome back" : "Create account"}
                            </h1>
                            <p className="mt-2 text-sm">
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
                                        className="text-sm font-medium flex items-center gap-2"
                                    >
                                        <User className="w-4 h-4" />
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-3 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
                                        placeholder="John Doe"
                                        value={isLogin ? loginData.name : signupData.name}
                                        onChange={isLogin ? changeLoginData : changeSignUpData}
                                    />
                                </div>
                                {errors.name && (
                                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                                    )}
                                {!isLogin && (
                                    <div className="space-y-1">
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-medium flex items-center gap-2"
                                        >
                                            <Mail className="w-4 h-4" />
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-3 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
                                            placeholder="john@example.com"
                                            value={signupData.email}
                                            onChange={changeSignUpData}
                                        />
                                    </div>
                                )}
                                {errors.email && (
                                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                        )}
                                <div className="space-y-1">
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-medium flex items-center gap-2"
                                    >
                                        <Key className="w-4 h-4" />
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        required
                                        className="w-full px-3 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
                                        placeholder="••••••••"
                                        value={isLogin ? loginData.password : signupData.password}
                                        onChange={isLogin ? changeLoginData : changeSignUpData}
                                    />
                                </div>
                                                                    {errors.password && (
                                        <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                    )}

                                <Button
                                    type="submit"
                                    className="w-full"
                                    size="lg"

                                    onClick={isLogin ? handleLogin : handleSignup}
                                    disabled={isloading}
                                >
                                    {isloading ? <Loader2 className="h-6 w-6 animate-spin text-current" /> : (isLogin ? "Sign in" : "Sign up")}
                                </Button>


                            </motion.form>
                        </AnimatePresence>
                        <div className="mt-6 text-center">
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-sm  hover:text-gray-400 transition-colors duration-200"
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
