import createSupabaseBrowserClient from "./supabase";

export type MessageListType = {
  id: number;
  channel: string;
  created_at: string;
  message: string;
};

const SUPABASE_API_CLIENT = createSupabaseBrowserClient();

async function getMessage(
  channelName: string
): Promise<MessageListType[] | null> {
  const { data } = await SUPABASE_API_CLIENT.from("workspace")
    .select("*")
    .eq("channelName", channelName);
  return data;
}

async function createMessage(channelName: string, message: string) {
  await SUPABASE_API_CLIENT.from("workspace")
    .insert([{ channelName: channelName, message: message }])
    .select();
}

export const supabaseWrapper = { getMessage, createMessage };
