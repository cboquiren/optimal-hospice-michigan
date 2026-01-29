import { Phone, Mail } from "lucide-react";
import Logo from "../assets/Logo.jpg";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-base-content/10 shadow">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <a href="#top">
            <img
              src={Logo}
              alt="Optimal Hospice Michigan Logo"
              className="object-cover max-h-24 max-w-24"
            />
          </a>
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide text-center">
            Optimal Hospice of Michigan, Inc.
          </h1>
          <div className="flex items-center gap-4 md:hidden ">
            <a
              href="tel:+1-734-237-6440"
              className="btn bg-primary text-base-100 hover:text-text-primary hover:bg-accent"
            >
              <Phone className="size-5" />
              <span className="hidden md:block md:text-sm lg:text-lg">Contact Us </span>
            </a>
          </div>
          <div className="flex items-center gap-4 hidden md:flex">
            <a
              href="#emailForm"
              className="btn bg-primary text-base-100 hover:text-text-primary hover:bg-accent"
            >
              <Mail className="size-5" />
              <span className="hidden md:block md:text-sm lg:text-lg">Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
