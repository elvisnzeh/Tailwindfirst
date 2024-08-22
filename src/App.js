import { Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NavBar from "./NavBar";
import Blog from "./Blog";
import Changelog from "./Changelog";

export default function App() {
  return (
    <>
      
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/changelog" element={<Changelog />} />
        </Routes>
      
    </>
  );
}
