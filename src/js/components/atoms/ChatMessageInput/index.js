import { StyledChatMessageInput } from "./chat-message-input.styles";

function ChatMessageInput({ message, setMessage }) {
  return (
    <StyledChatMessageInput
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
  );
}

export default ChatMessageInput;
