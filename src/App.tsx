import Container from "./components/ui/Container";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Container>
        <Header />
        <HomePage />
      </Container>
      <Footer />
    </>
  );
}

export default App;
