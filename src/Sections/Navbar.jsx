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
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useState } from "react";
import logo from "./LightMode.png"
import Login from "./Login";
import { useLogin } from "./Context";
const Navbar = () => {
    const { login, setLogin } = useLogin();
    const handleLogout = () => {
        setLogin(false);
        window.location.reload();
    }
    return (
        <>
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
                        
                            <DropdownMenu align="center">
                                <DropdownMenuTrigger asChild>
                                    <Button>Open</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <User />
                                            <span>Profile</span>
                                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Settings />
                                            <span>Settings</span>
                                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuItem onClick={handleLogout}>
                                        <LogOut />
                                        <span >Log out</span>
                                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    )}
                </div>
            </nav>
        </>
    )
}
export default Navbar;
