import { type MessageListType } from "@/api/message";

type Props = {
  messageList: MessageListType[];
};

export default function MessageList({ messageList }: Props) {
  return (
    <ul>
      {messageList.map((item) => (
        <li key={item.id}>{item.message}</li>
      ))}
    </ul>
  );
}
