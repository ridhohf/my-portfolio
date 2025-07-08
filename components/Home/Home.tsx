import About from "./About/About";
import Contact from "./Contact/ContactSection";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Project from "./Project/Project";
import Reviews from "./Reviews/Reviews";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div id="Home" className="overflow-hidden flex flex-col gap-32">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
