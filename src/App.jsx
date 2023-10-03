import About from "./pages/About";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import OurStrength from "./pages/OurStrength";
import Projects from "./pages/Projects";
import Tour from "./pages/Tour";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Tour />
      <OurStrength />
    </div>
  );
};

export default App;
