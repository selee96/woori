import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router";

export default function Navigation() {
    return (
        <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
            <div className="flex items-center">
                <Link to="/" className="font-bold tracking-tighter text-lg">WOORI</Link>
                <Separator aria-orientation="vertical" className="h-6 mx-4" />
            </div>
        </nav>
    );
}