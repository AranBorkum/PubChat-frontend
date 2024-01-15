import styled from "styled-components";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Lobby from "../components/molecules/Lobby";
import ChatBox from "../components/molecules/ChatBox";

const StyledChat = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  border: 1px solid black;

  .temp-chat-container {
    height: 100vh;
    width: calc(100vw - 260px);
  }
`;

function Chat({ chatSocket }) {
  const [messageHistory, setMessageHistory] = useState([]);
  const [lastMessage, setLastMessage] = useState(null);
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let userId = Cookies.get("_user_id");
    if (Boolean(userId)) {
      setUserId(userId);
    } else {
      navigate("/login/");
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
      setLastMessage(null);
    }
  }, [lastMessage, setMessageHistory]);

  chatSocket.onmessage = function (e) {
    let data = JSON.parse(e.data);
    setLastMessage(data);
    console.log("Data:", data);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (message !== "") {
      chatSocket.send(
        JSON.stringify({
          message: message,
          user_id: userId,
          time_stamp: new Date(),
        }),
      );
      setMessage("");
    }
  }

  const [message, setMessage] = useState("");

  return (
    <StyledChat>
      <Lobby />
      <ChatBox
        messageHistory={messageHistory}
        userId={userId}
        handleSubmit={handleSubmit}
        message={message}
        setMessage={setMessage}
      />
    </StyledChat>
  );
}

export default Chat;
