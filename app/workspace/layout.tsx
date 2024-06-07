import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default function WorkspaceLayout({ children }: Props) {
  return (
    <>
      <nav>
        <Link href="/">채널</Link>
      </nav>
      <section>{children}</section>
    </>
  );
}
