import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const links = [
  {
    name: "Preorder",
    href: "/preorder",
    icon: "",
  },
  {
    name: "Clothes",
    href: "/clothes",
    icon: "",
  },
  {
    name: "Food",
    href: "/clothes",
    icon: "",
  },
  {
    name: "Blog",
    href: "/clothes",
    icon: "",
  },
  {
    name: "About Us",
    href: "/clothes",
    icon: "",
  },
  {
    name: "Contact Us",
    href: "/clothes",
    icon: "",
  },
];

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="border-b py-4 flex justify-center items-center px-10">
        <div className="flex-1"></div>
        <h3 className="uppercase font-bold text-lg text-center">Ubuy</h3>
        <div className="flex-1 flex justify-end">
          <p className="text-sm font-light tracking-wide">
            Sign In <span className="font-medium">or</span> Registeration
          </p>
        </div>
      </div>
      <div className="border-b py-3 px-10 flex justify-start items-center gap-x-14">
        {links.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.name}
              className="flex items-center gap-x-1"
            >
              <p className="text-sm font-light tracking-wide">{link.name}</p>
            </Link>
          );
        })}
        <div className="flex-1 flex justify-end items-center gap-x-2">
          <ShoppingCartIcon className="w-5 h-5" />
          <p className="text-sm font-bold tracking-wide">$18,900.00</p>
        </div>
      </div>
    </nav>
  );
}
