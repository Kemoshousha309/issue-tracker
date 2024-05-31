import { Container, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./components/AuthProvidor";
import Navbar from "./components/navbar";
import "./globals.css";

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
       <AuthProvider>
       <Theme accentColor="purple">
          <Navbar />
          <main className="p-5">
            <Container>
            {children}
            </Container>
          </main>
        </Theme>
       </AuthProvider>
      </body>
    </html>
  );
}
