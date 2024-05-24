"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  const path = usePathname();

  return (
    <nav className="flex space-x-6 border-b h-14 px-4 items-center mb-5">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              className={classNames(" hover:text-zinc-800 transition-colors", {
                "text-zinc-900": path === l.href,
                "text-zinc-400": path !== l.href,
              })}
              href={`${l.href}`}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
