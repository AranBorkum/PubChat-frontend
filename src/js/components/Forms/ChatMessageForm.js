import styled from "styled-components";
import ChatMessageInput from "../atoms/ChatMessageInput";
import ChatMessageButton from "../atoms/ChatMessageButton";

const StyledChatMessageForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  //border: 1px solid black;

  .inner-container {
    width: 90%;
  }
`;

function ChatMessageForm({ handleSubmit, message, setMessage }) {
  return (
    <StyledChatMessageForm>
      <div className={"inner-container"}>
        <form onSubmit={handleSubmit}>
          <ChatMessageInput message={message} setMessage={setMessage} />
          <ChatMessageButton text={"Send"} />
        </form>
      </div>
    </StyledChatMessageForm>
  );
}

export default ChatMessageForm;
