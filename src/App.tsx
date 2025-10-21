import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
