import LoginUserButton from "../components/atoms/LoginUserButton";

function Login() {
  return (
    <div>
      <LoginUserButton tableNumber={1} />
      <LoginUserButton tableNumber={2} />
      <LoginUserButton tableNumber={3} />
      <LoginUserButton tableNumber={4} />
    </div>
  );
}

export default Login;
