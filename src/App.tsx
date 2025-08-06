import Container from "./components/ui/Container";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MyListPage from "./pages/MyListPage";

function App() {
  return (
    <>
      <Container>
        <Header />
        <MyListPage />
      </Container>
      <Footer />
    </>
  );
}

export default App;
