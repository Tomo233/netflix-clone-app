import { Link, useLocation } from "react-router";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function AuthBox() {
  const { pathname } = useLocation();

  const isSignup = pathname === "/signup";

  return (
    <div className="mb-36 grid place-items-center pt-8">
      <div className="rounded-lg bg-black/70 px-32 py-40">
        <h1 className="text-center text-3xl font-semibold">
          {isSignup ? "Sign up" : "Login"}
        </h1>
        <p className="pt-1 pb-3 text-center">
          Do {!isSignup && "not"} have an account?
          <Link
            className="ml-1 font-medium text-red-600 underline"
            to={`${isSignup ? "/login" : "/signup"}`}
          >
            {isSignup ? "Login" : "SignUp"}
          </Link>
        </p>

        {/* LOGIN/SIGN UP FORM */}
        {isSignup ? <SignupForm /> : <LoginForm />}
      </div>
    </div>
  );
}

export default AuthBox;
