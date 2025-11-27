import LoginForm from "./LoginForm";


export const metadata = {
  title: "Login | Readify",
  description: "Sign in to your account to manage your books.",
};

const LoginPage = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default LoginPage;