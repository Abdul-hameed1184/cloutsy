import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
<header
  className="w-full bg-white fixed z-50 "
  style={{
    boxShadow:
      "0 2px 8px rgba(0, 48, 135, 0.15), 0 4px 20px rgba(0, 48, 135, 0.08)",
  }}
>

      <div className="max-w-[1600px] mx-auto px-4 md:px-10 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <img src="/logo.svg" alt="Palash Logo" className="h-8 md:h-10" />
          <span className="text-xs font-semibold text-[#003087] -mt-2">
            SMM
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-[#001a4d]">
          <a href="#home" className="hover:text-[#003087] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[#003087] transition">
            About
          </a>
          <a href="#services" className="hover:text-[#003087] transition">
            Service
          </a>
          <a href="#faq" className="hover:text-[#003087] transition">
            FAQ
          </a>
          <a href="#contact" className="hover:text-[#003087] transition">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-[#003087]">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-2">
          <a href="#home" className="block text-[#001a4d] hover:text-[#003087]">
            Home
          </a>
          <a
            href="#about"
            className="block text-[#001a4d] hover:text-[#003087]"
          >
            About
          </a>
          <a
            href="#services"
            className="block text-[#001a4d] hover:text-[#003087]"
          >
            Service
          </a>
          <a href="#faq" className="block text-[#001a4d] hover:text-[#003087]">
            FAQ
          </a>
          <a
            href="#contact"
            className="block text-[#001a4d] hover:text-[#003087]"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
