import AuthBackground from "../features/authentication/AuthBackground";
import AuthBox from "../features/authentication/AuthBox";
import AuthHeader from "../features/authentication/AuthHeader";

function AuthPage() {
  return (
    <>
      <AuthHeader />
      <AuthBackground />
      <AuthBox />
    </>
  );
}

export default AuthPage;
