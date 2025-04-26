import React from "react";
import { Facebook, Instagram, Linkedin, Github, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img src="logo.svg" alt="" />
              <span className="text-white font-bold text-xl">AKSCESS LABS</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Making the web accessible for everyone, one website at a time.
            </p>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                  aria-label="X"
                >
                  <svg
                    viewBox="0 0 24 24"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h2.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook aria-hidden="true" size={20} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram aria-hidden="true" size={20} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin aria-hidden="true" size={20} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                  aria-label="GitHub"
                >
                  <Github aria-hidden="true" size={20} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube aria-hidden="true" size={20} />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-6">Services</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                >
                  Accessibility Testing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                >
                  Remediation Services
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                >
                  Accessibility Training
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                >
                  Legal Compliance
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                >
                  Accessible Design
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-6">Company</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-6">Resources</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                >
                  Accessibility Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                >
                  WCAG Checklist
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                >
                  Webinars
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Akscess Labs. All Rights Reserved.
            </p>
            <ul className="flex flex-wrap gap-6">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                >
                  Cookie Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-akcess-lime transition-colors"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
