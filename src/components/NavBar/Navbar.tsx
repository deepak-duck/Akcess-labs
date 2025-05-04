import React, { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NavItemComponent } from "./NavItem";
import { useScrollHighlight } from "../../hooks/useScrollHighlight";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { NavItem } from "../types/NavItems";

const navItems: NavItem[] = [
  { label: "Home", path: "/#home", hash: "home" },
  { label: "Services", path: "/#services", hash: "services" },
  { label: "About Us", path: "/#about", hash: "about" },
  { label: "FAQs", path: "/#faq", hash: "faq" },
  { label: "Contact Us", path: "/contact-us", isButton: true },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { activeHash, setActiveHash } = useScrollHighlight(location.pathname);
  const menuRef = useRef<HTMLElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Skip to main link handler
  React.useEffect(() => {
    const skipLink = document.querySelector(".skiptomain");

    const handleSkip = (e: Event) => {
      e.preventDefault();
      if (location.pathname === "/") {
        const demoButton = document.querySelector("#demobutton");
        if (demoButton instanceof HTMLButtonElement) {
          demoButton.focus();
          return;
        }
      } else if (location.pathname === "/contact-us") {
        const nameInput = document.querySelector("#name");
        if (nameInput instanceof HTMLInputElement) {
          nameInput.focus();
          return;
        }
      }

      const mainContent =
        document.querySelector("#main-content") ||
        document.querySelector("main") ||
        document.querySelector('[role="main"]');
      if (mainContent instanceof HTMLElement) {
        const firstFocusable = mainContent.querySelector(
          'h1, [tabindex="0"], a[href], button, input, textarea'
        );
        const target = firstFocusable instanceof HTMLElement ? firstFocusable : mainContent;
        // Ensure target is focusable
        if (!target.hasAttribute("tabindex") && !target.isContentEditable) {
          target.setAttribute("tabindex", "-1");
        }
        target.focus();
      }
    };

    if (skipLink) {
      skipLink.addEventListener("click", handleSkip);
      return () => skipLink.removeEventListener("click", handleSkip);
    }
  }, [location.pathname]);

  // Focus trap for mobile menu
  useFocusTrap(isMenuOpen, menuRef, toggleButtonRef, () => setIsMenuOpen(false));

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    if (!newState && toggleButtonRef.current) {
      toggleButtonRef.current.focus();
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash?: string) => {
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
      toggleButtonRef.current?.focus();
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveHash("home");
    }
  };

  const isActive = (hash: string | undefined, path: string) => {
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
      <a href="#main-content" className="skiptomain sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-akcess-lime"
            aria-label="AKSCESS LABS Home"
          >
            <img src="logo.svg" alt="" className="h-8" />
            <span className="text-white font-bold text-xl">
              AKSCESS <br /> LABS
            </span>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          ref={toggleButtonRef}
          className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-akcess-lime"
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
              <NavItemComponent
                item={item}
                isActive={isActive(item.hash, item.path)}
                isMobile={false}
                onClick={handleNavClick}
                onCloseMenu={() => setIsMenuOpen(false)}
              />
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <section
          id="mobile-menu"
          ref={menuRef}
          className={`md:hidden absolute top-16 left-0 right-0 bg-akcess-black p-4 z-50 transition-all duration-300 ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
          aria-hidden={!isMenuOpen}
          tabIndex={isMenuOpen ? undefined : -1}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <NavItemComponent
                key={index}
                item={item}
                isActive={isActive(item.hash, item.path)}
                isMobile={true}
                onClick={handleNavClick}
                onCloseMenu={() => setIsMenuOpen(false)}
              />
            ))}
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;