import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default function WorkspaceLayout({ children }: Props) {
  return (
    <>
      <nav>
        <Link href="/workspace/first">#1번 채널</Link>
        <Link href="/workspace/second">#2번 채널</Link>
      </nav>
      <section>{children}</section>
    </>
  );
}
