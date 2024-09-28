import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import OurProjects from "./components/OurProjects/OurProject";

function App() {
  return (
   <Router >
    <Navbar />
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`/about`} element={<About />} />
      <Route path={`/contact`} element={<Contact />} />
      <Route path={`/project`} element={<OurProjects />} />
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;

