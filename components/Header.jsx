import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-0 text-white"> {/* Removed all vertical padding */}
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <Image 
                        src="/assets/Razien_Mackenzie_LOGO-removebg-preview.png"
                        alt="Razien Mackenzie Logo"
                        width={150} 
                        height={75} 
                        className="object-cover mt-0" // Removed any top margin
                    />                
                </Link>

                {/* desktop nav & hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire Me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
