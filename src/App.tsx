import Container from "./components/ui/Container";
// import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <>
      <Container>
        {/* <Header /> */}
        <AuthPage />
      </Container>
      <Footer />
    </>
  );
}

export default App;
