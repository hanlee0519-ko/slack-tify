import { type MessageListType, supabaseWrapper } from "@/api/message";
import { useEffect, useState } from "react";

type WorkSpace = MessageListType[];

export default function useMessage(channelName: string) {
  const [messageList, setMessageList] = useState<WorkSpace>([]);

  const getMessageList = async (channelName: string) => {
    let messages = await supabaseWrapper.getMessage(channelName);

    if (!messages) return;
    setMessageList(messages);
  };

  const createMessageList = async (messageText: string) => {
    await supabaseWrapper.createMessage(channelName, messageText);
    await getMessageList(channelName);
  };

  useEffect(() => {
    getMessageList(channelName);
  }, [channelName]);

  console.log("[useMessage]", messageList);
  return { messageList, createMessageList };
}
