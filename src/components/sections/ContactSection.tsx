
import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-akcess-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about our services? Ready to start making your digital presence accessible? 
            Reach out to us today.
          </p>
        </div>
        
        <div className="bg-akcess-lime rounded-lg overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="p-8 lg:p-12 lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6 text-akcess-black">Send Us a Message</h3>
              <p className="text-gray-800 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
                We're eager to discuss how we can help make your website accessible to everyone.
              </p>
              <ContactForm />
            </div>
            <div className="bg-akcess-black p-8 lg:p-12">
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-6">Our Office</h3>
                <div className="flex items-start space-x-4">
                  <MapPin size={24} className="text-akcess-lime mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    545 Technology Square<br />
                    Cambridge, MA 02139<br />
                    United States
                  </p>
                </div>
              </div>
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="flex items-center space-x-4 mb-6">
                  <Phone size={24} className="text-akcess-lime flex-shrink-0" />
                  <span className="text-gray-300">+1 (617) 555-0123</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail size={24} className="text-akcess-lime flex-shrink-0" />
                  <span className="text-gray-300">info@akcesslabs.com</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6">Business Hours</h3>
                <div className="flex items-center space-x-4">
                  <Clock size={24} className="text-akcess-lime flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>Monday - Friday: 9am - 5pm EST</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
