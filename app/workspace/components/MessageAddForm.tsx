"use client";

import { type FormEvent, useState } from "react";

type Props = {
  onCreate: (message: string) => {};
};

export default function MessageAddForm({ onCreate }: Props) {
  const [input, setInput] = useState<string | undefined>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (typeof input === "undefined" || input.trim().length === 0) {
      setInput("");
      return;
    }
    onCreate(input);
    setInput("");
  }

  return (
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
  );
}
