import About from "./pages/About";
import Card from "./pages/Card";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Strengths from "./pages/Strengths";
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
      <Strengths />
      <Testimonials />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
