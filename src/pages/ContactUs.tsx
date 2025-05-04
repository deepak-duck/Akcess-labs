import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import emailjs from '@emailjs/browser';

// Type Definitions
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

interface TouchedFields {
  name: boolean;
  email: boolean;
  phone: boolean;
  message: boolean;
}

// Contact Information Component
const ContactInfo: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
    <p className="mb-8 text-gray-300">
      We're here to help with any questions about accessibility compliance or our services.
    </p>
    <div className="space-y-8">
      <ContactDetail
        icon={<MapPin aria-hidden="true" size={24} />}
        title="Our Location"
        content={
          <address className="not-italic text-gray-300">
            545, Street 11, Block F<br />
            Some landmark, Ohio<br />
            India
          </address>
        }
      />
      <ContactDetail
        icon={<Phone aria-hidden="true" size={24} />}
        title="Phone"
        content={
          <a href="tel:+912025550123" className="hover:text-akcess-lime transition-colors">
            +91 202 555 0123
          </a>
        }
      />
      <ContactDetail
        icon={<Mail aria-hidden="true" size={24} />}
        title="Email"
        content={
          <a href="mailto:info@akscesslabs.com" className="hover:text-akcess-lime transition-colors">
            info@akscesslabs.com
          </a>
        }
      />
    </div>
    <BusinessHours />
  </div>
);

// Contact Detail Component
interface ContactDetailProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const ContactDetail: React.FC<ContactDetailProps> = ({ icon, title, content }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-akcess-lime rounded-full p-3 text-akcess-black">{icon}</div>
    <div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      {content}
    </div>
  </div>
);

// Business Hours Component
const BusinessHours: React.FC = () => (
  <div className="mt-12">
    <h3 className="text-xl font-bold mb-4">Business Hours</h3>
    <table className="w-full text-gray-300" role="presentation">
      <tbody>
        <tr>
          <td className="py-2">Monday - Friday:</td>
          <td className="py-2">9:00 AM - 6:00 PM IST</td>
        </tr>
        <tr>
          <td className="py-2">Saturday:</td>
          <td className="py-2">10:00 AM - 4:00 PM IST</td>
        </tr>
        <tr>
          <td className="py-2">Sunday:</td>
          <td className="py-2">Closed</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// Contact Form Component
const ContactForm: React.FC = () => {
  const initialFormData: FormData = { name: '', email: '', phone: '', message: '' };
  const initialTouched: TouchedFields = { name: false, email: false, phone: false, message: false };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [touched, setTouched] = useState<TouchedFields>(initialTouched);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const errorMessageRef = useRef<HTMLDivElement>(null);

  const validateField = (name: keyof FormData, value: string): FormErrors => {
    const errors: FormErrors = {};

    if (name === 'name' && !value.trim()) {
      errors.name = 'Name is required';
    }

    if (name === 'email') {
      if (!value.trim()) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors.email = 'Please enter a valid email';
      }
    }

    if (name === 'phone') {
      if (!value.trim()) {
        errors.phone = 'Phone is required';
      } else if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(value)) {
        errors.phone = 'Please enter a valid phone number';
      }
    }

    if (name === 'message' && !value.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, ...validateField(name as keyof FormData, value) }));
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    
    Object.entries(formData).forEach(([key, value]) => {
      const fieldErrors = validateField(key as keyof FormData, value);
      Object.assign(newErrors, fieldErrors);
    });

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setTouched({ name: true, email: true, phone: true, message: true });
      
      const firstErrorField = Object.keys(validationErrors)[0] as keyof FormData;
      const refs = { name: nameRef, email: emailRef, phone: phoneRef, message: messageRef };
      refs[firstErrorField].current?.focus();

      if (errorMessageRef.current) {
        errorMessageRef.current.textContent = 'There were errors in the form submission. Please correct them and try again.';
        setTimeout(() => errorMessageRef.current && (errorMessageRef.current.textContent = ''), 5000);
      }
      return;
    }

    setIsSubmitting(true);
    const params = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        params,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success('Message sent successfully!', {
        description: 'We will get back to you shortly.',
      });

      if (errorMessageRef.current) {
        errorMessageRef.current.textContent = 'Your message was sent successfully.';
        setTimeout(() => errorMessageRef.current && (errorMessageRef.current.textContent = ''), 5000);
      }

      setFormData(initialFormData);
      setTouched(initialTouched);
      setErrors({});
      nameRef.current?.focus();
    } catch (error) {
      toast.error('Failed to send message', {
        description: 'Please try again later.',
      });

      if (errorMessageRef.current) {
        errorMessageRef.current.textContent = 'Failed to send message. Please try again later.';
        setTimeout(() => errorMessageRef.current && (errorMessageRef.current.textContent = ''), 5000);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderInput = (
    id: keyof FormData,
    label: string,
    type: 'text' | 'email' | 'tel' | 'textarea',
    placeholder: string,
    ref: React.RefObject<HTMLInputElement | HTMLTextAreaElement>
  ) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1">
        {label} <span className="text-red-500" aria-hidden="true">*</span>
        <span className="sr-only">(required)</span>
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          required
          value={formData[id]}
          onChange={handleChange}
          onBlur={handleBlur}
          ref={ref as React.RefObject<HTMLTextAreaElement>}
          rows={4}
          className={`w-full p-3 bg-akcess-black border ${
            errors[id] && touched[id] ? 'border-red-500' : 'border-gray-700'
          } rounded text-white`}
          placeholder={placeholder}
          aria-describedby={errors[id] && touched[id] ? `${id}-error` : undefined}
          aria-invalid={!!errors[id] && touched[id]}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required
          value={formData[id]}
          onChange={handleChange}
          onBlur={handleBlur}
          ref={ref as React.RefObject<HTMLInputElement>}
          autoComplete={id}
          className={`w-full p-3 bg-akcess-black border ${
            errors[id] && touched[id] ? 'border-red-500' : 'border-gray-700'
          } rounded text-white`}
          placeholder={placeholder}
          aria-describedby={errors[id] && touched[id] ? `${id}-error` : undefined}
          aria-invalid={!!errors[id] && touched[id]}
        />
      )}
      {errors[id] && touched[id] && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-500" role="alert">
          Error: {errors[id]}
        </p>
      )}
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      <p className="mb-8 text-gray-300">
        Fill out the form below and one of our accessibility experts will get back to you.
      </p>
      <small className="text-akcess-lime">Fields marked with * are mandatory.</small>
      <div className="p-8 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4" noValidate aria-label="Contact form">
          <div
            className="sr-only"
            aria-live="assertive"
            aria-atomic="true"
            ref={errorMessageRef}
          ></div>
          {renderInput('name', 'Name', 'text', 'Your name', nameRef)}
          {renderInput('email', 'Email', 'email', 'your.email@example.com', emailRef)}
          {renderInput('phone', 'Phone', 'tel', '(123) 456-7890', phoneRef)}
          {renderInput('message', 'Message', 'textarea', 'How can we help you?', messageRef)}
          <Button
            type="submit"
            className="bg-akcess-lime hover:bg-akcess-lime text-black w-full"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </Button>
        </form>
      </div>
    </div>
  );
};

// Main ContactUs Component
const ContactUs: React.FC = () => (
  <div className="bg-black text-white min-h-screen">
    <Navbar />
    <main id="main-content" className="py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Contact <span className="text-akcess-lime">Us</span>
      </h1>
      <p className="mt-4 text-center text-gray-100 max-w-2xl mx-auto">
        Have questions about our accessibility services? Reach out to our team for personalized assistance.
      </p>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default ContactUs;