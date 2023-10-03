import About from "./pages/About";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import OurStrength from "./pages/OurStrength";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
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
      <Testimonials />
    </div>
  );
};

export default App;
