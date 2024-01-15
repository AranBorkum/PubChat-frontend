import { StyledMessageBubble } from "./message-bubble.styles";

function MessageBubble({ message, sent, id }) {
  return (
    <StyledMessageBubble sent={sent}>
      <span key={id}>{message}</span>
    </StyledMessageBubble>
  );
}

export default MessageBubble;
