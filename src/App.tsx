import About from "./sections/About";
import Badges from "./sections/Badges";
import ContactForm from "./sections/ContactForm";
import Explanation from "./sections/Explanation";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";
import Navbar from "./sections/Navbar";
import Services from "./sections/Services";

const App = () => {
  return (
    <div data-theme="myTheme" className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Badges />
      <About />
      <Mission />
      <Explanation />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
