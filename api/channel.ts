import createSupabaseBrowserClient from "./supabase";

export type ChannelListType = {
  id: number;
  name: string;
};

const SUPABASE_API_CLIENT = createSupabaseBrowserClient();

async function getChannelList(): Promise<ChannelListType[] | null> {
  let { data } = await SUPABASE_API_CLIENT.from("channelList").select("*");
  return data;
}

async function addChannelName(channelName: string) {
  await SUPABASE_API_CLIENT.from("channelList")
    .insert([{ name: channelName }])
    .select();
}

export const channleWrapper = {
  getChannelList,
  addChannelName,
};
