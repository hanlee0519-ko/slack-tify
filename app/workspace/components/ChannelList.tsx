"use client";

import { supabaseWrapper, type ChannelListType } from "@/api/message";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type ItemType = ChannelListType;

export default function ChannelList() {
  const [channelList, setChanneList] = useState<ItemType[]>([]);

  const getChannelList = async () => {
    let channels = await supabaseWrapper.getChannelList();

    if (channels === null) return;
    setChanneList(channels);
  };

  useEffect(() => {
    getChannelList();
  }, [channelList]);

  if (channelList === null) return;

  const itemList = [{ id: 0, name: "Home" }, ...channelList];
  return <NavGroup path="/workspace" items={itemList} />;
}

const NavItem = ({
  path,
  item: { id, name },
}: {
  path: string;
  item: { id: number; name: string };
}) => {
  const href = id !== 0 ? path + "/" + name : path;
  return <Link href={href}>{name}</Link>;
};

const NavGroup = ({
  path,
  items,
}: {
  path: string;
  items: { id: number; name: string }[];
}) => {
  return (
    <div className="nav-group">
      {items.map((item) => (
        <NavItem key={item.id} path={path} item={item} />
      ))}
    </div>
  );
};
