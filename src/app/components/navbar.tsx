"use client";
import { Avatar, Box, Container, DropdownMenu, Flex } from "@radix-ui/themes";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  const { status, data: session } = useSession();
  const path = usePathname();

  return (
    <nav className="border-b px-4 mb-5">
      <Container >
      <Flex justify="between" className="py-4">
      <Flex align="center" gap="4">
        <Link href="/">
          <FaBug />
        </Link>
        <ul className="flex space-x-6">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                className={classNames(
                  " hover:text-zinc-800 transition-colors",
                  {
                    "text-zinc-900": path === l.href,
                    "text-zinc-400": path !== l.href,
                  }
                )}
                href={`${l.href}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </Flex>
      <Box>
        {status === "authenticated" && (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Avatar
                src={session.user?.image!}
                fallback="?"
                radius="full"
                className="cursor-pointer"
                size="2"
                referrerPolicy="no-referrer"
              />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Label>{session.user?.email}</DropdownMenu.Label>
              <DropdownMenu.Item>
                <Link href="/api/auth/signout">Logout</Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </Box>
      </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
