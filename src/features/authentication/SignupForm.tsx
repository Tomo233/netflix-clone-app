function SignupForm() {
  return (
    <form>
      <div className="grid grid-cols-2 gap-5">
        <input
          type="text"
          placeholder="UserName"
          className="border-border-color w-56 rounded-sm border px-3 py-3"
          name="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-border-color w-56 rounded-sm border px-3 py-3"
          name="email"
        />

        <input
          type="password"
          placeholder="Password"
          className="border-border-color w-56 rounded-sm border px-3 py-3"
          name="password"
        />
        <input
          type="password"
          placeholder="ConfirmPassword"
          className="border-border-color w-56 rounded-sm border px-3 py-3"
          name="confirmpassword"
        />
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
