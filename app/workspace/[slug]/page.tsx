import { supabaseWrapper } from "@/api/message";
import MessageList from "../components/MessageList";
import MessageAddForm from "../components/MessageAddForm";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 0;

export default async function ChannelPage({ params }: Props) {
  const messageList = await supabaseWrapper.getMessageList(params.slug);

  if (!messageList) return;

  return (
    <>
      <MessageList messageList={messageList} />
      <MessageAddForm channelName={params.slug} />
    </>
  );
}
