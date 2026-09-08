import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/vision" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto bg-[#111] md:bg-transparent border-b border-white/10 md:border-b-0">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-12 h-full">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="H8 Logo" 
              className="h-10 object-contain brightness-0 invert" 
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Link>
          
          <div className="hidden md:flex space-x-8 text-[11px] font-bold text-zinc-400 uppercase tracking-widest h-full">
            {links.map(link => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={clsx(
                    "flex items-center h-full transition-colors border-b-2 mt-[2px]",
                    isActive 
                      ? "text-white border-[#0057FF]" 
                      : "border-transparent hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-white">
          <button className="bg-[#0057FF] text-white text-[11px] font-bold px-6 py-2.5 rounded hover:bg-blue-600 transition-colors uppercase tracking-widest">
            Get Started
          </button>
          <button className="hover:text-zinc-300 transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={clsx(
          "absolute top-full left-0 right-0 bg-[#111] border-t border-white/10 flex flex-col py-6 px-6 space-y-4 transition-all duration-300 md:hidden",
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none hidden"
        )}
      >
        {links.map(link => (
          <Link 
            key={link.name}
            to={link.path} 
            onClick={() => setMenuOpen(false)} 
            className="text-sm font-bold text-white uppercase tracking-widest transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <button className="bg-[#0057FF] text-white text-[11px] font-bold px-6 py-2.5 rounded uppercase tracking-widest">
            Get Started
          </button>
          <button className="text-white">
            <ShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
