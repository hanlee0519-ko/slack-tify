import { type MessageListType, supabaseWrapper } from "@/api/message";
import { useEffect, useState } from "react";

type WorkSpace = MessageListType[];

export default function useMessage() {
  const [messageList, setMessageList] = useState<WorkSpace>([]);

  const getMessageList = async () => {
    let messages = await supabaseWrapper.getMessage();

    if (!messages) return;
    setMessageList(messages);
  };

  const createMessageList = async (messageText: string) => {
    await supabaseWrapper.createMessage(messageText);
  };

  useEffect(() => {
    getMessageList();
  }, [messageList]);

  return { messageList, createMessageList };
}
