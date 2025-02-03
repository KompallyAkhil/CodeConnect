import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
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
    const { login, setLogin , userIdName ,userEmailId } = useLogin();
    const handleLogout = () => {
        setLogin(false);
        toast.success('Successfully Logout');
        window.location.assign('/');
    }
    return (
        <>
            <Toaster />
            <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between px-4 mx-auto">
                    <div>
                        <div className="flex items-center">
                            <img className="w-10 h-10" src={logo} />
                            <h1 className="text-2xl ml-2 font-bold">CodeConnect</h1>
                        </div>
                    </div>
                    <div className="flex gap-10  font-bold text-primary">
                        <Link to="/" >
                            <p>Home</p>
                        </Link>
                        <Link to="/community">
                            <p>Communities</p>
                        </Link>
                    </div>
                    {!login ? (
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
                                    <Button variant="outline"  className="relative h-12 w-12 rounded-full">
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
