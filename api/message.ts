import createSupabaseBrowserClient from "./supabase";

export type MessageListType = {
  id: number;
  channel: string;
  created_at: string;
  message: string;
};

export type ChannelListType = {
  id: number;
  name: string;
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

async function getChannelList(): Promise<ChannelListType[] | null> {
  let { data } = await SUPABASE_API_CLIENT.from("channelList").select("*");

  return data;
}

export const supabaseWrapper = { getMessage, createMessage, getChannelList };
