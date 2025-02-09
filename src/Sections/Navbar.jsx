import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    LogOut,
    User,
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import toast, { Toaster } from 'react-hot-toast';
import logo from "./LightMode.png"
import Login from "./Login";
import { useLogin } from "./Context";
const Navbar = () => {
    const { setLogin, userIdName , userEmailId , token } = useLogin();
    const handleLogout = () => {
        setLogin(false);
        toast.success('Successfully Logout');
        window.location.assign('/');
    }
    return (
        <>
            <Toaster />
            <nav className="sticky top-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/50  ">
                <div className="sticky top-0 z-10 container flex h-16 items-center justify-between px-4 mx-auto">
                    <div>
                        <Link
                            to="/"
                            className="flex items-center space-x-2 transition-transform hover:scale-105"
                        >
                            <img className="w-10 h-10" src={logo} />
                            <span className="text-2xl ml-2 font-bold">CodeConnect</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex gap-10 font-bold text-primary">
                        <Link to="/" className="hover:text-primary/80 transition-colors">
                            <p>Home</p>
                        </Link>
                        <Link to="/community" className="hover:text-primary/80 transition-colors">
                            <p>Communities</p>
                        </Link>
                    </div>
                    {!token ? (
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button>Sign In</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <Login />
                            </DialogContent>
                        </Dialog>
                    ) : (
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="relative h-12 w-12 rounded-full">
                                        <User className="h-20 w-20" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="end" forceMount>
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium leading-none">{userIdName}</p>
                                            <p className="text-xs leading-6 text-muted-foreground">
                                                {userEmailId}
                                            </p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-400 ">
                                        <LogOut className=" h-8 w-8" />
                                        <span>Log out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    )}
                </div>
            </nav >
        </>
    )
}
export default Navbar;