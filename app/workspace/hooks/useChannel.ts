import { type ChannelListType, channleWrapper } from "@/api/channel";
import { useEffect, useState } from "react";

type ItemType = ChannelListType;

export default function useChannel() {
  const [channelList, setChanneList] = useState<ItemType[]>([]);

  const getChannelList = async () => {
    let channels = await channleWrapper.getChannelList();

    if (channels === null) return;
    setChanneList(channels);
  };

  const addChannelList = async (channelName: string) => {
    await channleWrapper.addChannelName(channelName);
    await getChannelList();
  };

  useEffect(() => {
    getChannelList();
  }, []);

  return { channelList, addChannelList };
}
