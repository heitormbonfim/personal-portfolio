import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/page";
import About from "./pages/about/page";
import Resume from "./pages/resume/page";
import Page404 from "./pages/404/page";
import Services from "./pages/services/page";
import Portfolio from "./pages/portfolio/page";

export default function App() {
  return (
    <div className="bg-image h-screen w-full text-zinc-200">
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}
