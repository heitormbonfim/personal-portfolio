import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { FirstLoading } from "./components/first-load";

import Loading from "./components/loading";
import SmoothScroll from "./components/smooth-scroll";

const Home = lazy(() => import("@/pages/home/page"));
const About = lazy(() => import("@/pages/about/page"));
const Resume = lazy(() => import("@/pages/resume/page"));
const Page404 = lazy(() => import("@/pages/404/page"));
const Services = lazy(() => import("@/pages/services/page"));
const Portfolio = lazy(() => import("@/pages/portfolio/page"));

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <SmoothScroll speed={1} scrollThreshold={120} scrollProgressBar>
      {!isLoaded && <FirstLoading onComplete={() => setIsLoaded(true)} />}
      <div
        className={`bg-image min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-zinc-900 text-zinc-200`}
      >
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </div>
    </SmoothScroll>
  );
}
