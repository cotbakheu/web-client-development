// Layout Imports
import Hero from "../../layouts/Home/Hero";
import About from "../../layouts/Home/About";
import Skills from "../../layouts/Home/Skills";
import Experiences from "../../layouts/Home/Experiences";
import Contact from "../../layouts/Home/Contact";
import React from "react";
import NavigationWidget from "../../components/NavigationWidget";
import Mouse from "../../components/Mouse";

function App() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavigationWidget />
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Contact />
      <Mouse />
    </>
  );
}

export default App;
