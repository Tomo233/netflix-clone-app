import Logo from "../../assets/netflix-logo.jpg";

function AuthHeader() {
  return (
    <header className="mt-10 flex items-center justify-between">
      <img src={Logo} className="w-36" alt="netflix logo" />
      <p className="text-md rounded-sm border border-[#7c7676] px-5 py-1 font-medium">
        English
      </p>
    </header>
  );
}

export default AuthHeader;
