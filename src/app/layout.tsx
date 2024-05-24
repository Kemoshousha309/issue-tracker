import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Issues Tracker",
  description: "An application to track issues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Theme accentColor="purple">
          <Navbar />
          <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
