"use client";

import { type FormEvent, useState } from "react";

type AddFormProps = {
  onAdd: (inputValue: string) => void;
};

export default function ChannelAddForm({ onAdd }: AddFormProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (typeof inputValue === "undefined") return;
    if (inputValue.trim().length === 0) return;

    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            value={inputValue || ""}
            placeholder="Input Channel"
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus
          />
          <button onClick={() => handleSubmit}>추가</button>
        </p>
      </form>
    </div>
  );
}
