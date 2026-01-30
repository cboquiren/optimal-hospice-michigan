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
import bg1 from "./assets/bg-1.jpg";
import bg2 from "./assets/bg-2.jpg";
import bg3 from "./assets/bg-3.jpg";
import bg5 from "./assets/bg-5.jpg";
import bg6 from "./assets/bg-6.jpg";
import bg7 from "./assets/bg-7.jpg";
import bg8 from "./assets/bg-8.jpg";
import bg9 from "./assets/bg-9.jpg";
import bg10 from "./assets/bg-10.jpg";
import bg11 from "./assets/bg-11.jpg";
import bg12 from "./assets/bg-12.jpg";
import bg13 from "./assets/bg-13.jpg";
import { useEffect, useState } from "react";

const App = () => {
  const [bgImg, setBgImg] = useState(bg1);

  useEffect(() => {
    const bgArray = [bg1, bg2, bg3, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13];
    const bgRandomizer = () => {
      return Math.floor(Math.random() * bgArray.length);
    };

    const interval = setInterval(() => {
      setBgImg(bgArray[bgRandomizer()]);
    }, 15000);

    return () => clearInterval(interval);
  });

  return (
    <div
      data-theme="myTheme"
      className="h-[100vh] font-sans text-primary bg-cover bg-fixed bg-center min-w-screen top-0 z-5 transition-all transition-discrete duration-5000 ease-in-out overflow-y-auto"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="min-h-screen w-full bg-fixed bg-bg-light/50 relative">
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
    </div>
  );
};

export default App;
