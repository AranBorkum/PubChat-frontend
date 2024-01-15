import styled from "styled-components";
import { useEffect, useRef } from "react";
import MessageBubble from "../atoms/MessageBubble";
import MessageContainer from "../atoms/MessageContainer";

const StyledMessageDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 100%;

  .inner-container {
    overflow-y: scroll;
    width: 90%;
    height: 90%;
    border: 1px solid black;
  }
`;

function MessageDisplay({ messageHistory, userId }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageHistory]);

  const sentOrReceived = (message) => {
    return Boolean(message.user_id === userId);
  };

  return (
    <StyledMessageDisplay>
      <div className={"inner-container"}>
        <ul>
          {messageHistory.map((message, idx) => (
            <MessageContainer sent={sentOrReceived(message)} message={message}>
              <MessageBubble
                id={idx}
                sent={sentOrReceived(message)}
                message={message ? message.message : null}
              />
              <div ref={messagesEndRef} />
            </MessageContainer>
          ))}
        </ul>
      </div>
    </StyledMessageDisplay>
  );
}

export default MessageDisplay;
