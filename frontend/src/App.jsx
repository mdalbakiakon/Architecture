import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import Landing from "./pages/section1/Landing";
import Section2 from "./pages/section2/Section2";
import Navbar from "./components/Navbar";
import LinkBadge from "./components/LinkBadge";
import Section5 from "./pages/section5/Section5";
import Section6 from "./pages/section6/Section6";
import Section7 from "./pages/section7/Section7";

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
      <main>
        <Landing />
        <LinkBadge />
        <Section2 />
        <Section5 />
        <Section6 />
        <Section7 />
      </main>
    </ReactLenis>
  );
}

export default App;
