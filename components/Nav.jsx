"use client";

import Link from "next/link"; // This is the Link component from Next.js
import { usePathname } from "next/navigation";

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

const Nav = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`
            relative
            capitalize font-medium transition-all
            ${link.path === pathname ? "text-accent" : "text-white"}
            after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-in-out
            hover:text-accent hover:after:scale-x-100 hover:after:origin-left
          `}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
