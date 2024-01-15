import "./App.css";
import { useState } from "react";
import Chat from "./js/pages/Chat";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginQR from "./js/pages/LoginQR";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [socketUrl, setSocketUrl] = useState(
    "ws://" + process.env.REACT_APP_API_URL + ":8000/ws/socket-server/1/2/",
  );
  const chatSocket = new WebSocket(socketUrl);

  // window.addEventListener("beforeunload", (e) => {
  //   e.preventDefault();
  //   Cookies.remove("_user_id");
  // });

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Chat chatSocket={chatSocket} />} />
        {/*<Route path={"/"} element={<Lobby />} />*/}
        {/*<Route path={"login/"} element={<Login />} />*/}
        <Route path={":id/login/"} element={<LoginQR />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
