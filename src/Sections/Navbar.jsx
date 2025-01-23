import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
const Navbar = () => {
    return (
        <>
            <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between px-4 mx-auto">
                    <h1 className="text-xl ml-6 font-bold">CodeConnect</h1>
                    <div className="flex gap-10 font-bold text-primary">
                        <Link to="/" >
                            <p >Home</p>
                        </Link>
                        <Link to="/community">
                            <p>Communities</p>
                        </Link>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>Sign In</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>

                </div>
            </nav>
        </>
    )
}
export default Navbar;
