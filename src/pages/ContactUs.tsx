
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactUs = () => {
  return (
    <div className="bg-akcess-black text-white min-h-screen">
      <Navbar />

      {/* Page Header */}
      <div className="bg-akcess-darkgray py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Contact <span className="text-akcess-lime">Us</span>
          </h1>
          <p className="mt-4 text-center text-gray-300 max-w-2xl mx-auto">
            Have questions about our accessibility services? Reach out to our team for personalized assistance.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8 text-gray-300">
                Fill out the form below and one of our accessibility experts will get back to you as soon as possible.
              </p>
              
              <div className="bg-akcess-darkgray p-8 rounded-lg">
                <ContactFormWithPhone />
              </div>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="mb-8 text-gray-300">
                We're here to help with any questions about accessibility compliance or our services.
                Feel free to reach out through any of the channels below.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-akcess-lime rounded-full p-3 text-akcess-black">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Our Location</h3>
                    <address className="not-italic text-gray-300">
                      545, Street 11, Block F<br />
                      Some landmark, Ohio<br />
                      United States
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-akcess-lime rounded-full p-3 text-akcess-black">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Phone</h3>
                    <p className="text-gray-300">
                      <a href="tel:+12025550123" className="hover:text-akcess-lime transition-colors">
                        +1 202 555 0123
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-akcess-lime rounded-full p-3 text-akcess-black">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Email</h3>
                    <p className="text-gray-300">
                      <a href="mailto:info@akcesslabs.com" className="hover:text-akcess-lime transition-colors">
                        info@akcesslabs.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <table className="w-full text-gray-300">
                  <tbody>
                    <tr>
                      <td className="py-2">Monday - Friday:</td>
                      <td className="py-2">9:00 AM - 6:00 PM EST</td>
                    </tr>
                    <tr>
                      <td className="py-2">Saturday:</td>
                      <td className="py-2">10:00 AM - 4:00 PM EST</td>
                    </tr>
                    <tr>
                      <td className="py-2">Sunday:</td>
                      <td className="py-2">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Extended contact form with phone field
const ContactFormWithPhone = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success
      toast({
        title: "Message sent successfully!",
        description: "We will get back to you shortly.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate aria-label="Contact form">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className={`w-full p-3 bg-akcess-black border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded text-white`}
          placeholder="Your name"
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.name}
          </p>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-3 bg-akcess-black border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded text-white`}
          placeholder="your.email@example.com"
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.email}
          </p>
        )}
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full p-3 bg-akcess-black border ${errors.phone ? 'border-red-500' : 'border-gray-700'} rounded text-white`}
          placeholder="(123) 456-7890"
          aria-describedby={errors.phone ? "phone-error" : undefined}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.phone}
          </p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full p-3 bg-akcess-black border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded text-white`}
          placeholder="How can we help you?"
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.message}
          </p>
        )}
      </div>
      
      <Button 
        type="submit" 
        className="lime-button w-full"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </Button>
    </form>
  );
};

export default ContactUs;
