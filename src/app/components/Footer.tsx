"use client";
import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
    const userId = process.env.NEXT_PUBLIC_USER_ID || "";

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    const formData = {
      email: email,
    };

    try {
      await emailjs.send(serviceId, templateId, formData, userId);
      setSuccessMessage("Thank you for subscribing! We will keep you updated.");
      setEmail("");
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("Failed to subscribe. Please try again.");
    }

    setLoading(false);
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-left mb-8">
          <h2 className="text-xl font-semibold">
            Stay Connected With Our Email Updates
          </h2>
          <form
            onSubmit={handleSubscribe}
            className="mt-4"
            aria-labelledby="subscribe-form"
          >
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter Your Email Address"
                className="flex-1 px-4 py-2 text-black outline-none focus:ring-2 focus:ring-gray-500"
                aria-label="Enter your email address"
                required
              />
              <button
                type="submit"
                className="bg-gray-800 transition-all duration-300 text-white px-8 py-2 hover:bg-gray-700 focus:ring-2 focus:ring-gary-500"
                aria-label="Subscribe to newsletter"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
          </form>

          {successMessage && (
            <p className="mt-4 text-gray-500">{successMessage}</p>
          )}
          {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
        </div>

        <div className="text-left mb-8">
          <h2 className="text-2xl font-bold">Zeemsa Overseas</h2>
          <p className="text-sm mt-2 font-dancing-script">
            At Zeemsa Overseas, we bring you the finest handcrafted products
            from across the globe, each crafted with care and tradition. Our
            mission is to offer unique pieces that tell a story, bringing art
            and culture into your home.
          </p>
        </div>

        <div className="flex gap-4 mb-8">
          <a
            href="https://www.instagram.com/zeemsa_designs/profilecard/?igsh=MXB5eWhtd3k4MDkxYQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group"
          >
            <div className="p-2 rounded-full bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-orange-400 text-white transition-all duration-300">
              <FaInstagram size={24} />
            </div>
          </a>
          <a
            href="https://wa.me/918881119780"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp"
            className="group"
          >
            <div className="p-2 rounded-full bg-gray-700 hover:text-white group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-green-700">
              <FaWhatsapp size={24} />
            </div>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="group"
          >
            <div className="p-2 rounded-full bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-blue-700">
              <FaFacebook size={24} />
            </div>
          </a>
        </div>

        <div className="text-left text-sm">
          <h3 className="text-lg font-semibold">Store Information</h3>
          <p className="mt-2">Mangal pura, Sarai Tareen, Sambhal, India</p>
          <p>
            Email:
            <a href="mailto:info@zeemsa.com" className="underline">
              info@zeemsaoverseas.com
            </a>
          </p>
          <p>
            Phone:
            <a href="tel:+918881119780" className="underline">
              +918881119780
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
