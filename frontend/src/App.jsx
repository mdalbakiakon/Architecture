import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import Landing from "./pages/section1/Landing";
import Section2 from "./pages/section2/Section2";
import Navbar from "./components/Navbar";

function App() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <Navbar />
      <Landing />
      <Section2 />
    </ReactLenis>
  );
}

export default App;
