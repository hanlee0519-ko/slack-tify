import { type MessageListType, supabaseWrapper } from "@/api/message";
import { useEffect, useState } from "react";

type WorkSpace = MessageListType[];

export default function useMessage() {
  const [messageList, setMessageList] = useState<WorkSpace>([]);

  const getMessageList = async () => {
    let result = await supabaseWrapper.getMessage();

    if (!result) return;
    setMessageList(result);
  };

  const createMessageList = async (message: string) => {
    await supabaseWrapper.createMessage(message);
  };

  useEffect(() => {
    getMessageList();
  }, [messageList]);

  return { messageList, createMessageList };
}
