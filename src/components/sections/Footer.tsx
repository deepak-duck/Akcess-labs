
import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Github, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M20 5L5 20L20 35L35 20L20 5Z" stroke="#D2FB50" strokeWidth="2" />
                <path d="M15 20H25M20 15V25" stroke="#D2FB50" strokeWidth="2" />
              </svg>
              <span className="text-white font-bold text-xl">AKCESS LABS</span>
            </Link>
            <p className="text-gray-400 mb-6">Making the web accessible for everyone, one website at a time.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-akcess-lime transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-akcess-lime transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-akcess-lime transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-akcess-lime transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-akcess-lime transition-colors" aria-label="GitHub"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-akcess-lime transition-colors" aria-label="YouTube"><Youtube size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-akcess-lime transition-colors">Accessibility Testing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-akcess-lime transition-colors">Remediation Services</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-akcess-lime transition-colors">Accessibility Training</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-akcess-lime transition-colors">Legal Compliance</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-akcess-lime transition-colors">Accessible Design</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-akcess-lime transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-akcess-lime transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-akcess-lime transition-colors">Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-akcess-lime transition-colors">Blog</a></li>
              <li><Link to="/contact-us" className="text-gray-400 hover:text-akcess-lime transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-akcess-lime transition-colors">Accessibility Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-akcess-lime transition-colors">WCAG Checklist</a></li>
              <li><a href="#" className="text-gray-400 hover:text-akcess-lime transition-colors">Help Center</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-akcess-lime transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-akcess-lime transition-colors">Webinars</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Akcess Labs. All Rights Reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-gray-400 hover:text-akcess-lime transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-akcess-lime transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-akcess-lime transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-akcess-lime transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
