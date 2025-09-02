import AuthInput from "./AuthInput";

function LoginForm() {
  return (
    <form className="grid gap-y-5">
      <AuthInput type="text" placeholder="UserName" variant="login" />
      <AuthInput type="password" placeholder="Password" variant="login" />

      <button
        className="w-full cursor-pointer rounded-sm bg-red-600 py-2.5 transition-colors duration-500 ease-in-out hover:bg-red-700"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
