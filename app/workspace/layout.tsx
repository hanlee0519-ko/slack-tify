import { supabaseWrapper } from "@/api/message";
import ChannelList from "./components/ChannelList";

export default async function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav>
        <ChannelList />
      </nav>
      <section>{children}</section>
    </>
  );
}
