"use client";

import { type MessageListType, supabaseWrapper } from "@/api/message";
import { type FormEvent, useEffect, useState } from "react";

type WorkSpace = MessageListType[];

export default function Page() {
  const [messageList, setMessageList] = useState<WorkSpace>([]);
  const [input, setInput] = useState<string | undefined>("");

  useEffect(() => {
    getTodoList();
  }, []);

  async function getTodoList() {
    const result = await supabaseWrapper.getMessage();
    if (result) setMessageList(result);
  }

  async function createTodoList(message: string) {
    await supabaseWrapper.createMessage(message);
    await getTodoList();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (typeof input === "undefined" || input.trim().length === 0) {
      setInput("");
      return;
    }
    createTodoList(input);
    setInput("");
  }

  return (
    <>
      <h1>WorkSpace Page</h1>
      <ul>
        {messageList.map((item) => (
          <li key={item.id}>{item.message}</li>
        ))}
      </ul>
      <section>
        <form onSubmit={handleSubmit}>
          <p>
            <input
              type="text"
              value={input || ""}
              autoFocus
              placeholder="Input Message"
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => handleSubmit}>Add</button>
          </p>
        </form>
      </section>
    </>
  );
}
