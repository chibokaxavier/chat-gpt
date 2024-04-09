"use client";
import React from "react";
import NewChat from "./NewChat";
import Login from "./Login";
import { useSession } from "next-auth/react";

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
    </div>
  );
}

export default Sidebar;
