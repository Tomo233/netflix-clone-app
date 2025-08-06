import Container from "./components/ui/Container";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SearchedResults from "./features/titles/SearchedResults";

function App() {
  return (
    <>
      <Container>
        <Header />
        <SearchedResults />
      </Container>
      <Footer />
    </>
  );
}

export default App;
