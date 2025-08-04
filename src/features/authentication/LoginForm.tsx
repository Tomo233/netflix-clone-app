function LoginForm() {
  return (
    <form className="grid gap-y-5">
      <input
        type="text"
        placeholder="Email"
        className="border-border-color w-80 rounded-sm border px-3 py-3"
      />
      <input
        type="password"
        placeholder="Password"
        className="border-border-color w-80 rounded-sm border px-3 py-3"
      />
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
