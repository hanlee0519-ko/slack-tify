import createSupabaseBrowserClient from "./supabase";

export type MessageListType = {
  id: number;
  channel: string;
  created_at: string;
  message: string;
};

const SUPABASE_API = createSupabaseBrowserClient();

async function getMessage(): Promise<MessageListType[] | null> {
  const { data } = await SUPABASE_API.from("workspace").select("*");
  return data;
}

async function createMessage(message: string) {
  await SUPABASE_API.from("workspace").insert({ message: message }).select();
}

export const supabaseWrapper = { getMessage, createMessage };
