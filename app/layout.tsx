("");
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { SessionProvider } from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { GET } from "./api/auth/[...nextauth]/route";
import Login from "@/components/Login";
import ClientProvider from "@/components/ClientProvider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(GET);

  return (
    <html lang="en">
      <title>ChatGpt clone</title>

      <body>
        <SessionProvider>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <Sidebar />
              </div>
              <ClientProvider />
              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
