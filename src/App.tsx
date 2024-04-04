import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/page";
import About from "./pages/about/page";
import Resume from "./pages/resume/page";

export default function App() {
  return (
    <div className="bg-image h-screen w-full text-zinc-200">
      <Routes>
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
