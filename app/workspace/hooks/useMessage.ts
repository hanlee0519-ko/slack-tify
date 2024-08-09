import { type MessageListType, messageWrapper } from "@/api/message";
import { useEffect, useState } from "react";

type WorkSpace = MessageListType[];

export default function useMessage(channelName: string) {
  const [messageList, setMessageList] = useState<WorkSpace>([]);

  const getMessageList = async (channelName: string) => {
    let messages = await messageWrapper.getMessage(channelName);

    if (!messages) return;
    setMessageList(messages);
  };

  const createMessageList = async (messageText: string) => {
    await messageWrapper.createMessage(channelName, messageText);
    await getMessageList(channelName);
  };

  useEffect(() => {
    getMessageList(channelName);
  }, [channelName]);

  return { messageList, createMessageList };
}
