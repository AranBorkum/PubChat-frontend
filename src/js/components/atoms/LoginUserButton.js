import { HTTPClient } from "../../services/http";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLoginUserButton = styled.div`
  width: 180px;
  height: 90px;
  margin: 10px;

  button {
    width: 100%;
    height: 100%;
  }
`;

function LoginUserButton({ tableNumber }) {
  const navigate = useNavigate();
  function handleClick() {
    HTTPClient.get("/users/" + tableNumber + "/login-user/")
      .then((res) => {
        console.log(res);
        navigate("/lobby/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <StyledLoginUserButton>
      <button onClick={handleClick}>Login Table {tableNumber}</button>
    </StyledLoginUserButton>
  );
}

export default LoginUserButton;
