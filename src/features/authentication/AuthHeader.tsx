import Logo from "../../assets/netflix-logo.jpg";
import Container from "../../components/ui/Container";

function AuthHeader() {
  return (
    <header className="mt-10">
      <Container>
        <div className="flex items-center justify-between">
          <img src={Logo} className="w-36" alt="netflix logo" />
          <p className="text-md rounded-sm border border-[#7c7676] px-5 py-1 font-medium">
            English
          </p>
        </div>
      </Container>
    </header>
  );
}

export default AuthHeader;
