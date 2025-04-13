import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Define navigation items
  const navItems = [
    {
      label: "Home",
      path: "/#home",
      hash: "home",
    },
    {
      label: "Services",
      path: "/#services",
      hash: "services",
    },
    {
      label: "About Us",
      path: "/#about",
      hash: "about",
    },
    {
      label: "FAQs",
      path: "/#faq",
      hash: "faq",
    },
    // {
    //   label: "Contact Us",
    //   path: "/contact-us",
    //   isButton: true,
    // },
  ];
  const navItemss = [
    {
      label: "Home",
      path: "/#home",
      hash: "home",
    },
    {
      label: "Services",
      path: "/#services",
      hash: "services",
    },
    {
      label: "About Us",
      path: "/#about",
      hash: "about",
    },
    {
      label: "FAQs",
      path: "/#faq",
      hash: "faq",
    },
    {
      label: "Contact Us",
      path: "/contact-us",
      isButton: true,
    },
  ];

  // Handle hash navigation
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string | null
  ) => {
    if (!hash || location.pathname !== "/") {
      return; // No hash or not on homepage, let normal navigation occur
    }
    e.preventDefault();
    const element = document.getElementById(hash);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });

      // Update URL without page reload
      window.history.pushState(null, "", `/#${hash}`);

      // Close mobile menu
      setIsMenuOpen(false);
    }
  };
  return (
    <nav
      className="bg-akcess-black py-4 px-6 md:px-12 lg:px-24 sticky top-0 z-50"
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="logo.svg" alt="" />
            <span className="text-white font-bold text-xl">
              AKCESS <br /> LABS
            </span>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            // item.isButton ?
            // (
            //   <div className="">
            //     <Link
            //       key={index}
            //       to={item.path}
            //       className="bg-akcess-lime text-akcess-black px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition-all duration-300"
            //     >
            //       {item.label}
            //     </Link>
            //   </div>
            // ) :
            <a
              key={index}
              href={item.path}
              className="text-white hover:text-akcess-lime transition-colors"
              onClick={(e) => handleNavClick(e, item.hash || null)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <Link
            //  key={index}
            to="/contact-us"
            className="bg-akcess-lime text-akcess-black px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute top-16 left-0 right-0 bg-akcess-black p-4 z-50 transition-all duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navItemss.map((item, index) =>
              item.isButton ? (
                <Link
                  key={index}
                  to={item.path}
                  className="bg-akcess-lime text-akcess-black px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition-all duration-300 text-center"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={index}
                  href={item.path}
                  className="text-white hover:text-akcess-lime transition-colors py-2"
                  onClick={(e) => handleNavClick(e, item.hash || null)}
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
