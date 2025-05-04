import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [activeHash, setActiveHash] = useState("");
  const menuRef = useRef(null); // Ref for the mobile menu container
  const toggleButtonRef = useRef(null); // Ref for the hamburger/X button

  // Close mobile menu and set active hash when route or hash changes
  useEffect(() => {
    setIsMenuOpen(false);
    const hash = location.hash.replace("#", "");
    setActiveHash(hash || (location.pathname === "/" ? "home" : ""));
  }, [location]);

  // Focus trapping for mobile menu
  useEffect(() => {
    if (!isMenuOpen) return;

    // Include toggle button and menu items in focusable elements
    const menuFocusable =
      menuRef.current?.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      ) || [];
    const focusableElements = [
      toggleButtonRef.current,
      ...menuFocusable,
    ].filter(Boolean);
    const firstElement = focusableElements[0]; // Toggle button (X)
    const lastElement = focusableElements[focusableElements.length - 1]; // Last link

    // Move focus to the X button when menu opens
    if (firstElement) {
      firstElement.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === firstElement) {
        // Shift+Tab on first element (X button): move to last
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        // Tab on last element (Contact Us): move to first
        e.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  // Skip to main link handler
  useEffect(() => {
    const skipLink = document.querySelector(".skiptomain");

    const handleSkip = (e) => {
      e.preventDefault();

      // Determine focus target based on the current route
      if (location.pathname === "/") {
        // Homepage: Focus the "Request a Demo" button
        const demoButton = document.querySelector("#demobutton");
        if (demoButton) {
          demoButton.focus();
          return;
        }
      } else if (location.pathname === "/contact-us") {
        // Contact Us page: Focus the name input field
        const nameInput = document.querySelector("#name");
        if (nameInput) {
          nameInput.focus();
          return;
        }
      }

      // Fallback: Focus main content or its first focusable child
      const mainContent =
        document.querySelector("#main-content") ||
        document.querySelector("main") ||
        document.querySelector('[role="main"]');

      if (mainContent) {
        const firstFocusable = mainContent.querySelector(
          'h1, [tabindex="0"], a[href], button, input, textarea'
        ) || mainContent;
        firstFocusable.setAttribute("tabindex", "-1"); // Ensure focusable
        firstFocusable.focus();
      }
    };

    if (skipLink) {
      skipLink.addEventListener("click", handleSkip);
      return () => skipLink.removeEventListener("click", handleSkip);
    }
  }, [location.pathname]);

  // Scroll-based nav highlighting for homepage
  useEffect(() => {
    if (location.pathname !== "/") return; // Only run on homepage

    const sections = ["home", "services", "about", "faq"];
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        let closestSection = "";
        let minDistance = Infinity;

        // Find the section closest to the viewport top
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const distance = Math.abs(rect.top);
            if (distance < minDistance && rect.top <= window.innerHeight * 0.5) {
              minDistance = distance;
              closestSection = section;
            }
          }
        }

        // Update activeHash if a section is found
        if (closestSection && closestSection !== activeHash) {
          setActiveHash(closestSection);
          window.history.replaceState(null, "", `/#${closestSection}`);
        } else if (!closestSection && window.scrollY < 50 && activeHash !== "home") {
          // Only set to "home" if near the top of the page
          setActiveHash("home");
          window.history.replaceState(null, "", "/#home");
        }
      }, 50); // Reduced debounce for faster response
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [location.pathname, activeHash]);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    if (!newState && toggleButtonRef.current) {
      toggleButtonRef.current.focus();
    }
  };

  // Define navigation items
  const navItems = [
    { label: "Home", path: "/#home", hash: "home" },
    { label: "Services", path: "/#services", hash: "services" },
    { label: "About Us", path: "/#about", hash: "about" },
    { label: "FAQs", path: "/#faq", hash: "faq" },
  ];

  const navItemss = [
    { label: "Home", path: "/#home", hash: "home" },
    { label: "Services", path: "/#services", hash: "services" },
    { label: "About Us", path: "/#about", hash: "about" },
    { label: "FAQs", path: "/#faq", hash: "faq" },
    { label: "Contact Us", path: "/contact-us", isButton: true },
  ];

  // Handle hash navigation
  const handleNavClick = (e, hash) => {
    if (!hash || location.pathname !== "/") {
      setIsMenuOpen(false);
      return;
    }
    e.preventDefault();
    const element = document.getElementById(hash);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `/#${hash}`);
      setActiveHash(hash);
      setIsMenuOpen(false);
      if (toggleButtonRef.current) {
        toggleButtonRef.current.focus();
      }
    }
  };

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveHash("home");
    }
  };

  const isActive = (hash, path) => {
    if (!hash && path === "/contact-us") {
      return location.pathname === "/contact-us";
    }
    return hash === activeHash;
  };

  return (
    <nav
      className="bg-black py-4 px-6 md:px-12 lg:px-28 sticky top-0 z-50"
      aria-label="Main navigation"
    >
      <a href="#main-content" className="skiptomain">
        Skip to main
      </a>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center space-x-2"
          >
            <img src="logo.svg" alt="AKSCESS LABS logo" />
            <span className="text-white font-bold text-xl">
              AKSCESS <br /> LABS
            </span>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          ref={toggleButtonRef}
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className={`text-white hover:text-akcess-lime transition-colors relative ${
                  isActive(item.hash, item.path) ? "font-medium" : ""
                }`}
                onClick={(e) => handleNavClick(e, item.hash || null)}
              >
                {item.label}
                {isActive(item.hash, item.path) && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-akcess-lime rounded-full transition-all duration-300"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Link
            to="/contact-us"
            className="bg-akcess-lime text-akcess-black px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`md:hidden absolute top-16 left-0 right-0 bg-akcess-black p-4 z-50 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
          aria-hidden={!isMenuOpen}
          tabIndex={isMenuOpen ? undefined : -1}
        >
          <div className="flex flex-col space-y-4">
            {navItemss.map((item, index) =>
              item.isButton ? (
                <Link
                  key={index}
                  to={item.path}
                  className={`px-4 py-2 rounded font-semibold text-center transition-all duration-300 ${
                    isActive(item.hash, item.path)
                      ? "bg-akcess-lime text-akcess-black"
                      : "bg-akcess-lime text-akcess-black hover:bg-opacity-90"
                  }`}
                  tabIndex={isMenuOpen ? undefined : -1}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={index}
                  href={item.path}
                  className={`text-white hover:text-akcess-lime transition-colors py-2 ${
                    isActive(item.hash, item.path) ? "font-medium text-akcess-lime" : ""
                  }`}
                  onClick={(e) => handleNavClick(e, item.hash || null)}
                  tabIndex={isMenuOpen ? undefined : -1}
                >
                  {item.label}
                  {isActive(item.hash, item.path) && (
                    <span className="block w-full h-0.5 bg-akcess-lime rounded-full mt-1"></span>
                  )}
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