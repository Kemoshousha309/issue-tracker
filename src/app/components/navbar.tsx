import Link from "next/link";
import { FaBug } from "react-icons/fa";

const Navbar = async () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b h-14 px-4 items-center ">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((l) => (
          <li key={l.label}>
            <Link className="text-zinc-400 hover:text-zinc-800 transition-colors" href={`${l.href}`}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
