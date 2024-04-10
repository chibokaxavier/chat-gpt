"use client";
import React from "react";
import NewChat from "./NewChat";
import Login from "./Login";
import { signOut, useSession } from "next-auth/react";

function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1 ">
        <div>
          <NewChat />
          <div>{/* ModelSelection */}</div>
          {/* Map through the chatrows */}
        </div>
      </div>
      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="profile image"
          className="h-12 w-12 mx-auto hover:opacity-50 rounded-full cursor-pointer"
        />
      )}
    </div>
  );
}

export default Sidebar;
