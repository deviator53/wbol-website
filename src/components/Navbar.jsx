import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "../assets/edited-logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programmes", to: "/programmes" },
  { label: "Locations", to: "/locations" },
  { label: "News & Events", to: "/news" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-[#1a2e3b] text-gray-300 text-xs py-2">
        <div className="max-w-6xl mx-auto px-5 flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={12} /> +234 80 3787 1140
            </span>
            <span className="flex items-center gap-1">
              <Mail size={12} /> info@walterbamideleolatunji.com
            </span>
          </div>
          <span>Community &amp; Global Consortia</span>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`bg-white z-50 transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-md"}`}
      >
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="WBOF Logo" className="h-[100px] w-auto object-contain" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors relative group pb-1 ${isActive ? "text-[#39A84F]" : "text-[#1a2e3b] hover:text-[#39A84F]"}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-[#39A84F] transition-all ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/2348037871140"
                target="_blank"
                rel="noreferrer"
                className="bg-[#39A84F] text-white px-5 py-2 rounded text-sm font-semibold hover:bg-[#2d8a3e] transition-colors inline-flex items-center gap-1.5"
              >
                Send a Message
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-100 px-5 pb-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2.5 text-sm font-medium border-b border-gray-50 ${isActive ? "text-[#39A84F]" : "text-[#1a2e3b]"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/2348037871140"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 block text-center bg-[#39A84F] text-white px-5 py-2.5 rounded text-sm font-semibold"
            >
              Send a Message
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
