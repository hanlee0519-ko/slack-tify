import ChannelList from "./components/ChannelList";

type Props = {
  children: React.ReactNode;
};

export default function WorkspaceLayout({ children }: Props) {
  return (
    <>
      <nav>
        <ChannelList />
      </nav>
      <section>{children}</section>
    </>
  );
}
