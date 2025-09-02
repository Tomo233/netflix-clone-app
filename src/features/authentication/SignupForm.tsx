import AuthInput from "./AuthInput";

function SignupForm() {
  return (
    <form>
      <div className="grid grid-cols-2 gap-5">
        <AuthInput type="text" placeholder="UserName" />
        <AuthInput type="email" placeholder="Email" />
        <AuthInput type="password" placeholder="Password" />
        <AuthInput type="password" placeholder="ConfirmPassword" />
      </div>

      <button
        className="mt-5 w-full cursor-pointer rounded-sm bg-red-600 py-2.5 transition-colors duration-500 ease-in-out hover:bg-red-700"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
}

export default SignupForm;
