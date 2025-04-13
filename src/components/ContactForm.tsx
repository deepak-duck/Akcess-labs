import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
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
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success
      toast.success("Message sent successfully!", {
        description: "We will get back to you as soon as possible.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
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
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-1 text-akcess-black"
        >
          Name{" "}
          <span className="text-black" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className={`w-full p-3 bg-akcess-darkgray border ${
            errors.name ? "border-red-500" : "border-gray-700"
          } rounded text-white`}
          placeholder="Your name"
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-black" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-1 text-akcess-black"
        >
          Email{" "}
          <span className="text-black" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-3 bg-akcess-darkgray border ${
            errors.email ? "border-red-500" : "border-gray-700"
          } rounded text-white`}
          placeholder="your.email@example.com"
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-black" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-1 text-akcess-black"
        >
          Message{" "}
          <span className="text-black" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full p-3 bg-akcess-darkgray border ${
            errors.message ? "border-red-500" : "border-gray-700"
          } rounded text-white`}
          placeholder="How can we help you?"
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p
            id="message-error"
            className="mt-1 text-sm text-black"
            role="alert"
          >
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
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
};

export default ContactForm;
