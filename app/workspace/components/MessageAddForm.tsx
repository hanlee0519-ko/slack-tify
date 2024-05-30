"use client";
import { supabaseWrapper } from "@/api/message";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

type Props = {
  channelName: string;
};

export default function MessageAddForm({ channelName }: Props) {
  const router = useRouter();
  const [message, setMessage] = useState<string | undefined>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (typeof message === "undefined" || message.trim().length === 0) {
      setMessage("");
      return;
    }

    await supabaseWrapper.createMessage(channelName, message);
    router.refresh();
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          value={message || ""}
          autoFocus
          placeholder="Input Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={() => handleSubmit}>Add</button>
      </p>
    </form>
  );
}
