"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';
import { CiMenuFries } from 'react-icons/ci';

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        {/* Reduced the top margin to move the content up */}
        <div className="mt-16 mb-20 flex justify-center items-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold flex justify-center items-center">
              <Image 
                src="/assets/Razien_Mackenzie_LOGO-removebg-preview.png"
                alt="Razien Mackenzie Logo"
                width={200} // Replace with actual width
                height={100} // Replace with actual height
                className="object-cover"
              />
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`
                relative
                text-xl capitalize 
                ${link.path === pathname ? "text-accent" : "text-white"}
                after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-in-out
                hover:after:scale-x-100 hover:after:origin-left hover:text-accent transition-all
              `}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
