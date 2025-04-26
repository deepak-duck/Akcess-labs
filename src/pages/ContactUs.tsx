import React, { useState, useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";

const ContactUs = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Contact Section */}
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Contact <span className="text-akcess-lime">Us</span>
      </h1>
      <p className="mt-4 text-center text-gray-100 max-w-2xl mx-auto">
        Have questions about our accessibility services? Reach out to our team
        for personalized assistance.
      </p>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8 text-gray-300">
                Fill out the form below and one of our accessibility experts
                will get back to you as soon as possible.
              </p>
              <small className="text-akcess-lime">
                Fields marked with * are mandatory.
              </small>
              <div className="p-8 rounded-lg">
                <ContactFormWithPhone />
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="mb-8 text-gray-300">
                We're here to help with any questions about accessibility
                compliance or our services. Feel free to reach out through any
                of the channels below.
              </p>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-akcess-lime rounded-full p-3 text-akcess-black">
                    <MapPin aria-hidden="true" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Our Location</h3>
                    <address className="not-italic text-gray-300">
                      545, Street 11, Block F<br />
                      Some landmark, Ohio
                      <br />
                      India
                    </address>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-akcess-lime rounded-full p-3 text-akcess-black">
                    <Phone aria-hidden="true" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Phone</h3>
                    <p className="text-gray-300">
                      <a
                        href="tel:+912025550123"
                        className="hover:text-akcess-lime transition-colors"
                      >
                        +91 202 555 0123
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-akcess-lime rounded-full p-3 text-akcess-black">
                    <Mail aria-hidden="true" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Email</h3>
                    <p className="text-gray-300">
                      <a
                        href="mailto:info@akscesslabs.com"
                        className="hover:text-akcess-lime transition-colors"
                      >
                        info@akscesslabs.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactFormWithPhone = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  // Refs for input fields and error announcement
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const errorMessageRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateField = (name, value) => {
    const newErrors = {};

    if (name === "name" && !value.trim()) {
      newErrors.name = "Name is required";
    }

    if (name === "email") {
      if (!value.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.email = "Please enter a valid email";
      }
    }

    if (name === "phone") {
      if (!value.trim()) {
        newErrors.phone = "Phone is required";
      } else if (
        !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(value)
      ) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    if (name === "message" && !value.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });

    const fieldErrors = validateField(name, value);
    setErrors({
      ...errors,
      ...fieldErrors,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (
      !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(
        formData.phone
      )
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const validationErrors = validateForm();
    const hasErrors = Object.keys(validationErrors).length > 0;

    if (hasErrors) {
      // Update touched state for all fields with errors
      const newTouched = { ...touched };
      Object.keys(validationErrors).forEach((field) => {
        newTouched[field] = true;
      });
      setTouched(newTouched);

      // Focus on the first field with an error
      const firstErrorField = Object.keys(validationErrors)[0];
      if (firstErrorField === "name" && nameRef.current)
        nameRef.current.focus();
      else if (firstErrorField === "email" && emailRef.current)
        emailRef.current.focus();
      else if (firstErrorField === "phone" && phoneRef.current)
        phoneRef.current.focus();
      else if (firstErrorField === "message" && messageRef.current)
        messageRef.current.focus();

      // Announce errors to screen readers
      if (errorMessageRef.current) {
        errorMessageRef.current.textContent =
          "There were errors in the form submission. Please correct them and try again.";
        setTimeout(() => {
          if (errorMessageRef.current) errorMessageRef.current.textContent = "";
        }, 5000);
      }

      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success
      toast.success("Message sent successfully!", {
        description: "We will get back to you shortly.",
      });

      // Announce success to screen readers
      if (errorMessageRef.current) {
        errorMessageRef.current.textContent =
          "Your message was sent successfully. We will get back to you as soon as possible.";
        setTimeout(() => {
          if (errorMessageRef.current) errorMessageRef.current.textContent = "";
        }, 5000);
      }

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTouched({ name: false, email: false, phone: false, message: false });
      setErrors({});
      // Refocus name input after reset
      if (nameRef.current) nameRef.current.focus();
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });

      // Announce error to screen readers
      if (errorMessageRef.current) {
        errorMessageRef.current.textContent =
          "Failed to send message. Please try again later.";
        setTimeout(() => {
          if (errorMessageRef.current) errorMessageRef.current.textContent = "";
        }, 5000);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
      aria-label="Contact form"
    >
      {/* Screen reader only message */}
      <div
        className="sr-only"
        aria-live="assertive"
        aria-atomic="true"
        ref={errorMessageRef}
      ></div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name{" "}
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          ref={nameRef}
          autoComplete="name"
          className={`w-full p-3 bg-akcess-black border ${
            errors.name && touched.name ? "border-red-500" : "border-gray-700"
          } rounded text-white`}
          placeholder="Your name"
          aria-describedby={
            errors.name && touched.name ? "name-error" : undefined
          }
          aria-required="true"
          aria-invalid={!!errors.name && touched.name}
        />
        {errors.name && touched.name && (
          <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
            Error: {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email{" "}
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          ref={emailRef}
          autoComplete="email"
          className={`w-full p-3 bg-akcess-black border ${
            errors.email && touched.email ? "border-red-500" : "border-gray-700"
          } rounded text-white`}
          placeholder="your.email@example.com"
          aria-describedby={
            errors.email && touched.email ? "email-error" : undefined
          }
          aria-invalid={!!errors.email && touched.email}
        />
        {errors.email && touched.email && (
          <p
            id="email-error"
            className="mt-1 text-sm text-red-500"
            role="alert"
          >
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone{" "}
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          ref={phoneRef}
          autoComplete="tel"
          className={`w-full p-3 bg-akcess-black border ${
            errors.phone && touched.phone ? "border-red-500" : "border-gray-700"
          } rounded text-white`}
          placeholder="(123) 456-7890"
          aria-describedby={
            errors.phone && touched.phone ? "phone-error" : undefined
          }
          aria-invalid={!!errors.phone && touched.phone}
        />
        {errors.phone && touched.phone && (
          <p
            id="phone-error"
            className="mt-1 text-sm text-red-500"
            role="alert"
          >
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message{" "}
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          ref={messageRef}
          autoComplete="on"
          rows={4}
          className={`w-full p-3 bg-akcess-black border ${
            errors.message && touched.message
              ? "border-red-500"
              : "border-gray-700"
          } rounded text-white`}
          placeholder="How can we help you?"
          aria-describedby={
            errors.message && touched.message ? "message-error" : undefined
          }
          aria-invalid={!!errors.message && touched.message}
        />
        {errors.message && touched.message && (
          <p
            id="message-error"
            className="mt-1 text-sm text-red-500"
            role="alert"
          >
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="bg-akcess-lime hover:bg-akcess-lime text-black w-full"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
};

export default ContactUs;
