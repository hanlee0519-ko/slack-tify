import Link from "next/link";
import React from "react";

export default function ChannelList() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/workspace/first">1번 채널</Link>
      </li>
      <li>
        <Link href="/workspace/second">2번 채널</Link>
      </li>
    </ul>
  );
}
