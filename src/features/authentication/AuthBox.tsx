function AuthBox() {
  return (
    <div className="mb-36 grid place-items-center pt-8">
      <div className="rounded-lg bg-black/70 px-32 py-40">
        <h1 className="text-center text-3xl font-semibold">Sign in</h1>
        <p className="pt-1 pb-3 text-center">
          Don't have an account?
          <span className="font-medium text-red-600 underline">Sign up</span>
        </p>

        {/* LOGIN/SIGN UP FORM */}
      </div>
    </div>
  );
}

export default AuthBox;
