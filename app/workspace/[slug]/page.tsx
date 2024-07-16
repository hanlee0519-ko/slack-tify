"use client";

import MessageAddForm from "../components/MessageAddForm";
import MessageList from "../components/MessageList";
import useMessage from "../hooks/useMessage";

export default function Page({ params }: { params: { slug: string } }) {
  const { messageList, createMessageList } = useMessage(params.slug);

  return (
    <div>
      <h1>this is {params.slug}</h1>
      <MessageList messageList={messageList} />
      <MessageAddForm onCreate={createMessageList} />
    </div>
  );
}
