import { Phone } from "lucide-react";
import Logo from "../assets/Logo.jpg";

const Navbar = () => {
  return (
    <header className="bg-neutral border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <img
            src={Logo}
            alt="Optimal Hospice Michigan Logo"
            className="object-cover rounded-lg max-h-20 max-w-20 "
          />
          <h1 className="text-2xl md:text-4xl text-white font-[Inter] font-bold tracking-wide text-center">
            Optimal Hospice Michigan
          </h1>
          <div className="flex items-center gap-4 ">
            <a href="tel:+1-734-237-6440" className="btn bg-accent">
              <Phone className="size-5" />
              <span className="hidden md:block md:text-sm lg:text-lg">Contact Us </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
