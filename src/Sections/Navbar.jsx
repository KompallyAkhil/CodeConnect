import { Button } from "@/components/ui/button"
const Navbar = () => {
    return (
        <>
            <nav className="sticky top-0 z-50 w-full  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between px-4 mx-auto">
                    <h1 className="text-xl ml-6 font-bold">Code Connect</h1>
                    <div className="flex gap-10 font-bold text-primary hover:cursor-pointer">
                        <p>Community</p>
                        <p>Features</p>
                    </div>
                    <Button size="lg" className="font-bold ">Sign In</Button>
                </div>
            </nav>
        </>
    )
}
export default Navbar;
