import { type MessageListType, supabaseWrapper } from "@/api/message";
import { useEffect, useState } from "react";

type WorkSpace = MessageListType[];

export default function useMessage() {
  const [messageList, setMessageList] = useState<WorkSpace>([]);

  useEffect(() => {
    getTodoList();
  }, [messageList]);

  async function getTodoList() {
    const result = await supabaseWrapper.getMessage();
    if (result) setMessageList(result);
  }

  async function createTodoList(message: string) {
    await supabaseWrapper.createMessage(message);
  }

  return { messageList, createTodoList };
}
