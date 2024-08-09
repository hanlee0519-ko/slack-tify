import Channel from "./components/Channel";
import {
  workspaceContainer,
  contentContainer,
  nav,
  main,
} from "./style/workspace.css";

export default async function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={workspaceContainer}>
      <div className={contentContainer}>
        <nav className={nav}>
          <Channel />
        </nav>
        <main className={main}>{children}</main>
      </div>
    </div>
  );
}
