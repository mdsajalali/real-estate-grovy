import About from "./pages/About";
import Card from "./pages/Card";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Strengths from "./pages/Strengths";
import Testimonials from "./pages/Testimonials";
import Tour from "./pages/Tour";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import GoogleSignIn from "./components/GoogleSignIn";
import { app } from "./firebase";
const auth = getAuth(app);

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  });

  if (user === null) {
    return (
      <>
        <GoogleSignIn />
      </>
    );
  }
  return (
    <div>
      <Navbar user={user} />
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
