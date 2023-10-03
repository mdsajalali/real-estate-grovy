import About from "./pages/About";
import Card from "./pages/Card";
import Footer from "./pages/Footer";
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
      <Card />
      <Footer />
    </div>
  );
};

export default App;
