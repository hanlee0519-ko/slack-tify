"use client";

import { type FormEvent, useState } from "react";

type Props = {
  onCreate: (message: string) => {};
};

export default function MessageAddForm({ onCreate }: Props) {
  const [input, setInput] = useState<string | undefined>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (typeof input === "undefined") return;
    if (input.trim().length === 0) return;

    onCreate(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          value={input || ""}
          placeholder="Input Message"
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
        <button onClick={() => handleSubmit}>Add</button>
      </p>
    </form>
  );
}
