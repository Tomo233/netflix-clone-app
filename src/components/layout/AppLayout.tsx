import Container from "../ui/Container";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <main>
      <Container>
        <Header />
        <Outlet />
      </Container>
      <Footer />
    </main>
  );
}

export default AppLayout;
