"use client";
import React from "react";
import NewChat from "./NewChat";
import Login from "./Login";
import { signOut, useSession } from "next-auth/react";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/Firebase";
import ChatRow from "./ChatRow";
import { useCollection } from "react-firebase-hooks/firestore";

function Sidebar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );
  console.log(chats);

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1 ">
        <div>
          <NewChat />
          <div>{/* ModelSelection */}</div>
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
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
