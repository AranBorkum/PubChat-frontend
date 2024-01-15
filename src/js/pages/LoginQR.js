import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { HTTPClient } from "../services/http";

function LoginQR() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    HTTPClient.get("/users/" + id + "/login/")
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div>Logging in user</div>;
}

export default LoginQR;
