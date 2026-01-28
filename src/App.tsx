import About from "./sections/About";
import Badges from "./sections/Badges";
import ContactForm from "./sections/ContactForm";
import Explanation from "./sections/Explanation";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";
import Navbar from "./sections/Navbar";
import Rights from "./sections/Rights";
import Services from "./sections/Services";
import Support from "./sections/Support";
import Teams from "./sections/Teams";

const App = () => {
  return (
    <div data-theme="myTheme" className="min-h-screen bg-black font-sans">
      <Navbar />
      <Hero />
      <Badges />
      <About />
      <Mission />
      <Explanation />
      <Support />
      <Rights />
      <Services />
      <Teams />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
