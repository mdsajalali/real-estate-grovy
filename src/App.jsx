import About from "./pages/About";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
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
    </div>
  );
};

export default App;
