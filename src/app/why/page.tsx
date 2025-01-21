import React from "react";

// Define a type for the props
interface SectionProps {
  title: string;
  content: string;
}

// Reusable Section Component
const Section: React.FC<SectionProps> = ({ title, content }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-600 leading-relaxed mb-6">{content}</p>
  </div>
);

// Main Page Component
export default function Page() {
  return (
    <div className=" mt-20 md:mt-40 md:mb-10">
      <div className="container mx-auto px-6">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us?
          </h1>
          <p className="text-lg text-gray-600">
            At <strong>Zeemsa Overseas</strong>, we take immense pride in being
            a trusted name in the world of handcrafted products. Rooted in the
            rich traditions of India, our craftsmanship combines timeless
            techniques with a modern touch.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          <Section
            title="1. Authenticity and Craftsmanship"
            content="Our products are a testament to the skill and dedication of Indian artisans. Each piece is handcrafted with precision, ensuring unparalleled quality and authenticity. By choosing us, you are supporting a legacy of craftsmanship passed down through generations."
          />
          <Section
            title="2. Customized Creations"
            content="We believe every customer is unique, and so should their products be. Whether you have a specific design in mind or need a personalized touch, our team works closely with you to bring your vision to life."
          />
          <Section
            title="3. Global Delivery"
            content="Distance is no barrier to owning a piece of India’s rich artistry. We deliver our handcrafted products across the globe, ensuring they reach you securely and promptly, no matter where you are."
          />
          <Section
            title="4. Eco-Friendly and Sustainable"
            content="We are committed to preserving the environment. Our materials are sourced responsibly, and our production processes are designed to minimize waste. When you buy from us, you’re not just getting a product — you’re making a sustainable choice."
          />
          <Section
            title="5. Diverse Range of Handicrafts"
            content="From intricate bone inlay furniture and decorative pieces to utility items made from horn, bone, acrylic, and wood, our catalog offers something for everyone. Whatever your taste or need, we have a product that matches it."
          />
          <Section
            title="6. Customer-Centric Approach"
            content="Your satisfaction is our top priority. From the first interaction to the final delivery, we strive to make your experience seamless and enjoyable. Our team is always available to answer your queries and provide guidance."
          />
          <Section
            title="7. Cultural Heritage with Modern Elegance"
            content="Our products are more than just items; they are stories. Stories of India’s rich cultural heritage, skillfully woven into modern designs that complement any setting. By choosing us, you’re adding a piece of timeless elegance to your collection."
          />
        </div>

        {/* Call to Action */}
        <div className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            To celebrate India’s artisanal excellence by delivering world-class
            handcrafted products that blend tradition with innovation. We aim to
            enrich your spaces and lives with creations that reflect our passion
            and your individuality.
          </p>
          <a
            href="/contactUs"
            className="inline-block bg-gray-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
