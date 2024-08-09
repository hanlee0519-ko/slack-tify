"use client";

import useChannel from "../hooks/useChannel";
import ChannelNav from "./ChannelNav";
import ChannelAddForm from "./ChannelAddForm";
import { channelContainer } from "../style/channel.css";

export default function Channel() {
  const { channelList, addChannelList } = useChannel();

  if (channelList === null) return;
  const itemList = [{ id: 0, name: "Channel" }, ...channelList];

  return (
    <div className={channelContainer}>
      <ChannelNav path="/workspace" items={itemList} />
      <ChannelAddForm onAdd={addChannelList} />
    </div>
  );
}
