import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Stay Connected Section */}
        <div className="text-left mb-8">
          <h2 className="text-xl font-semibold">
            Stay Connected With Our Email Updates
          </h2>
          <form className="mt-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-4 py-2 text-black outline-none"
              />
              <button
                type="submit"
                className="bg-gray-800 transition-all duration-300 text-white px-8 py-2 hover:bg-gray-700"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Company Name and Description */}
        <div className="text-left mb-8">
          <h2 className="text-2xl font-bold">Zeemsa Overseas</h2>
          <p className="text-sm mt-2 font-dancing-script">
            There are many variations of passages of text that look even
            slightly believable.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mb-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-2 rounded-full bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-orange-400 text-white transition-all duration-300">
              <FaInstagram size={24} className="text-black" />
            </div>
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-2 rounded-full bg-gray-700 hover:text-white group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-green-700">
              <FaWhatsapp size={24} className="text-black" />
            </div>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-2 rounded-full bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-blue-700">
              <FaFacebook size={24} className="text-black" />
            </div>
          </a>
        </div>

        {/* Store Information */}
        <div className="text-left text-sm">
          <h3 className="text-lg font-semibold">Store Information</h3>
          <p className="mt-2">123 Handicraft Street, Artisan City, Country</p>
          <p>Email: info@zeemsa.com</p>
          <p>Phone: +91 12345 67890</p>
        </div>
      </div>
    </footer>
  );
}
