import createSupabaseBrowserClient from "./supabase";

export type MessageListType = {
  id: number;
  channel: string;
  created_at: string;
  message: string;
};

async function getMessage(): Promise<MessageListType[] | null> {
  const supabase = createSupabaseBrowserClient();
  const { data } = await supabase.from("workspace").select("*");

  return data;
}

async function createMessage(message: string) {
  const supabase = createSupabaseBrowserClient();
  await supabase.from("workspace").insert({ message: message }).select();
}

export const supabaseWrapper = { getMessage, createMessage };
