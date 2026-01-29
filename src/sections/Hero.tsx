import { useEffect, useState } from "react";
import bg1 from "../assets/bg-1.jpg";
import bg2 from "../assets/bg-2.jpg";
import bg3 from "../assets/bg-3.jpg";
import bg4 from "../assets/bg-4.jpg";
import bg5 from "../assets/bg-5.jpg";
import bg6 from "../assets/bg-6.jpg";
import bg7 from "../assets/bg-7.jpg";

const Hero = () => {
  const [bgImg, setBgImg] = useState(bg2);

  const bgArray = [bg1, bg2, bg3, bg4, bg5, bg6, bg7];

  const bgRandomizer = () => {
    return Math.floor(Math.random() * bgArray.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImg(bgArray[bgRandomizer()]);
    }, 15000);
    return () => clearInterval(interval);
  });

  // bg-[url(./assets/bg-1.jpg)]
  return (
    <div
      id="top"
      className=" h-[70vh] bg-cover bg-center relative transition-all ease-in duration-4000"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="bg-purple-50/50 h-full w-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h1 className="text-2xl lg:text-5xl font-bold tracking-wide text-primary hero-text-shadow text-center">
            Comfort • Dignity • Quality of Life
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
