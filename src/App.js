import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Collection from "./components/Collections/Collection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import OurProjects from "./components/OurProjects/OurProject";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

function App() {
  return (
   <Router >
    <Navbar />
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`/about`} element={<About />} />
      <Route path={`/contact`} element={<Contact />} />
      <Route path={`/project`} element={<OurProjects />} />
      <Route path={`/singleProducts/:productsId`} element={<Collection />} />
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;

