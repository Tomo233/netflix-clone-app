import TitleModal from "../../features/titles/TitleModal";
import Container from "../ui/Container";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <main>
      <Container>
        <Header />
        <TitleModal />

        <Outlet />
      </Container>
      <Footer />
    </main>
  );
}

export default AppLayout;
