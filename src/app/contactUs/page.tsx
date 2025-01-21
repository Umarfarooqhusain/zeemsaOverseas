"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission (page reload)

    setLoading(true); // Show loading indicator

    // EmailJS Configuration
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
    const userId = process.env.NEXT_PUBLIC_USER_ID || "";

    if (!serviceId || !templateId || !userId) {
      setErrorMessage("Email configuration is missing.");
      setLoading(false);
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("All fields are required.");
      setLoading(false);
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    const emailData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, emailData, userId).then(
      (response) => {
        setSuccessMessage("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
        setErrorMessage("");
        setLoading(false);
      },
      (error) => {
        setErrorMessage(`Failed to send your message. Error: ${error.text}`);
        setLoading(false);
      }
    );
  };

  return (
    <div className="flex justify-center pt-2 pb-6 md:mt-32">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h1>

        {successMessage && (
          <p
            className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4"
            role="alert"
            aria-live="assertive"
          >
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p
            className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4"
            role="alert"
            aria-live="assertive"
          >
            {errorMessage}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:ring focus:ring-gray-300 border-gray-300"
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:ring focus:ring-gray-300 border-gray-300"
              placeholder="Your Email Address"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:ring focus:ring-gray-300 border-gray-300"
              placeholder="Write your message"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 rounded font-semibold hover:bg-gray-600 transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
