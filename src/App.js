import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Container>
      <NavBar />
      <Home />
      <Footer />
    </Container>
  );
}

export default App;
