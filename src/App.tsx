import Container from "./components/ui/Container";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Settings />
      </Container>
      <Footer />
    </>
  );
}

export default App;
