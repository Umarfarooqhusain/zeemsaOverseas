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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS Configuration
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_USER_ID;

    // Validate Form
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("All fields are required.");
      return;
    }

    emailjs.send(serviceId, templateId, formData, userId).then(
      () => {
        setSuccessMessage("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
        setErrorMessage("");
      },
      () => {
        setErrorMessage("Failed to send your message. Please try again.");
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h1>
        {successMessage && (
          <p className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
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
              className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-300 border-gray-300"
              placeholder="Your name"
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
              className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-300 border-gray-300"
              placeholder="Your email"
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
              className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-300 border-gray-300"
              placeholder="Write your message"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
