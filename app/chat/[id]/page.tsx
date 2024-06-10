import Chat from "@/components/Chat";
import ChatsInput from "@/components/ChatsInput";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

function ChatPage({ params: { id } }: Props) {
  return (
    <div className="overflow-hidden h-screen flex flex-col">
      <Chat chatsId={id} />
      <ChatsInput chatsId={id} />
    </div>
  );
}

export default ChatPage;
