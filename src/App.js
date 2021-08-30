import Routes from "./Routes/routes"
import "./App.css"
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
