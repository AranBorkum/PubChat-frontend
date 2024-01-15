import MessageDisplay from "../MessageDisplay";
import ChatMessageForm from "../../Forms/ChatMessageForm";
import styled from "styled-components";

const StyledChatBox = styled.div`
  height: 100vh;
  width: calc(100vw - 260px);
`;

function ChatBox({
  messageHistory,
  userId,
  handleSubmit,
  message,
  setMessage,
}) {
  return (
    <StyledChatBox>
      <MessageDisplay messageHistory={messageHistory} userId={userId} />
      <ChatMessageForm
        handleSubmit={handleSubmit}
        message={message}
        setMessage={setMessage}
      />
    </StyledChatBox>
  );
}

export default ChatBox;
