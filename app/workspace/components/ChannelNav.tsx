"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { navContainer, activeNavItem, navItem } from "../style/channelNav.css";

type NatItemProps = {
  path: string;
  item: { id: number; name: string };
};

type NavProps = {
  path: string;
  items: { id: number; name: string }[];
};

const NavItem = ({ path, item: { id, name } }: NatItemProps) => {
  const href = id !== 0 ? path + "/" + name : path;
  const segment = useSelectedLayoutSegment();
  const decodeURLsegemnt = segment && decodeURIComponent(segment);

  return (
    <Link
      className={decodeURLsegemnt === name ? activeNavItem : navItem}
      href={href}
    >
      {name}
    </Link>
  );
};

export default function ChannelNav({ path, items }: NavProps) {
  return (
    <div className={navContainer}>
      {items.map((item) => (
        <NavItem key={item.id} path={path} item={item} />
      ))}
    </div>
  );
}
