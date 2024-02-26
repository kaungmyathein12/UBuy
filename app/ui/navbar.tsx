"use client";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const links = [
  {
    name: "Home",
    href: "/",
    icon: "",
  },
  {
    name: "Preorder",
    href: "/preorder",
    icon: "",
  },
  {
    name: "Clothes",
    href: "/products/clothes",
    icon: "",
  },
  {
    name: "Pants",
    href: "/products/pants",
    icon: "",
  },
  {
    name: "Shoes",
    href: "/products/shoes",
    icon: "",
  },
  {
    name: "Blogs",
    href: "/blogs",
    icon: "",
  },
  {
    name: "About Us",
    href: "/about",
    icon: "",
  },
  {
    name: "Contact Us",
    href: "/contact",
    icon: "",
  },
];

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="border-b py-4 flex justify-center items-center px-10">
        <div className="flex-1"></div>
        <div className="flex items-center gap-x-1">
          <h3 className="uppercase font-bold text-lg text-center">Ubuy</h3>
          <CheckBadgeIcon className="w-5 h-5 text-green-600" />
          {/* <h3 className="uppercase font-bold text-lg text-center">MM</h3> */}
        </div>

        <div className="flex-1 flex justify-end">
          <p className="text-sm font-light tracking-wide">
            Sign In <span className="font-medium">or</span> Registeration
          </p>
        </div>
      </div>
      <div className="border-b py-3 px-10 flex justify-start items-center gap-x-16">
        <NavLinks />
        <div className="flex-1 flex justify-end items-center gap-x-2">
          <ShoppingCartIcon className="w-5 h-5" />
          <p className="text-sm font-bold tracking-wide">$18,900.00</p>
        </div>
      </div>
    </nav>
  );
}

function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            href={link.href}
            key={link.name}
            className={"flex items-center gap-x-1"}
          >
            <p
              className={clsx("text-sm font-light tracking-wide ", {
                "font-medium opacity-100": pathname === link.href,
                "opacity-50": pathname !== link.href,
              })}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
