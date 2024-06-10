"use client";
import { db } from "@/Firebase";
import { PaperAirplaneIcon } from "@heroicons/react/16/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";
type Props = {
  chatsId: string;
};

const ChatsInput = ({ chatsId }: Props) => {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();
  // use SWR to get model
  const model = "davinci";
  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;
    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatsId,
        "messages"
      ),
      message
    );
    const notification = toast.loading("Chatgpt is thinking");
    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        session,
        chatsId,
        model,
      }),
    }).then(() => {
      toast.success("Chatgpt has responded successfully", {
        id: notification,
      });
    });
  };
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm focus:outline-none">
      <form onSubmit={sendMessage} className="p-5 space-x-5 flex ">
        <input
          type="text"
          className="outline-none bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300 "
          disabled={!session}
          placeholder="Type your message here..."
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
        />
        <button
          type="submit"
          disabled={!prompt || !session}
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
      <div>{/* Modal Selcrtion */}</div>
    </div>
  );
};

export default ChatsInput;
