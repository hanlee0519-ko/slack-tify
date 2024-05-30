import { supabase } from "./supabase";

export type MessageListType = {
  id: number;
  channel: string;
  created_at: string;
  message: string;
};

async function getMessageList(
  channelName: string
): Promise<MessageListType[] | null> {
  const { data } = await supabase
    .from("workspace")
    .select("*")
    .eq("channel", channelName);

  return data;
}

async function createMessage(channelName: string, message: string) {
  await supabase
    .from("workspace")
    .insert({ channel: channelName, message: message })
    .select();
}

export const supabaseWrapper = { getMessageList, createMessage };
