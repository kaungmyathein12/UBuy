"use client";

import { HomeIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path);

  return (
    <div className="flex gap-x-2 py-4">
      <Link href={"/"}>
        <HomeIcon className="w-4 h-4" />
      </Link>
      {paths.map((path, index) => (
        <Link
          key={path}
          href={`/${path}`}
          className="flex items-center gap-x-2"
        >
          <ChevronRightIcon className="w-3 h-3 text-black" />
          <p className="text-sm capitalize">{path}</p>
        </Link>
      ))}
    </div>
  );
}
