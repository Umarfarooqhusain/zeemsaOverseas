import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-slate-100 md:mt-32 md:mb-10">
      <div className="container mx-auto px-6">
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
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              1. Authenticity and Craftsmanship
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our products are a testament to the skill and dedication of Indian
              artisans. Each piece is handcrafted with precision, ensuring
              unparalleled quality and authenticity. By choosing us, you are
              supporting a legacy of craftsmanship passed down through
              generations.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              2. Customized Creations
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe every customer is unique, and so should their products
              be. Whether you have a specific design in mind or need a
              personalized touch, our team works closely with you to bring your
              vision to life. From home decor to statement pieces, we tailor our
              creations to suit your exact requirements.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Global Delivery</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Distance is no barrier to owning a piece of India’s rich artistry.
              We deliver our handcrafted products across the globe, ensuring
              they reach you securely and promptly, no matter where you are.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              4. Eco-Friendly and Sustainable
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are committed to preserving the environment. Our materials are
              sourced responsibly, and our production processes are designed to
              minimize waste. When you buy from us, you’re not just getting a
              product — you’re making a sustainable choice.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              5. Diverse Range of Handicrafts
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              From intricate bone inlay furniture and decorative pieces to
              utility items made from horn, bone, acrylic, and wood, our catalog
              offers something for everyone. Whatever your taste or need, we
              have a product that matches it.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              6. Customer-Centric Approach
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Your satisfaction is our top priority. From the first interaction
              to the final delivery, we strive to make your experience seamless
              and enjoyable. Our team is always available to answer your queries
              and provide guidance, ensuring you find exactly what you’re
              looking for.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              7. Cultural Heritage with Modern Elegance
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our products are more than just items; they are stories. Stories
              of India’s rich cultural heritage, skillfully woven into modern
              designs that complement any setting. By choosing us, you’re adding
              a piece of timeless elegance to your collection.
            </p>
          </div>
        </div>

        {/* <div className="bg-gray-100 py-12 mt-10 text-center">
          <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
          <div className="space-y-8">
            <blockquote className="text-lg">
              <p className="italic">
                “The craftsmanship is truly unmatched. The custom bone inlay
                table I ordered was everything I envisioned and more.”
              </p>
              <footer className="mt-2 font-semibold">— Emma, USA</footer>
            </blockquote>
            <blockquote className="text-lg">
              <p className="italic">
                “Absolutely loved the attention to detail and the fact that they
                catered to my specific requirements. Highly recommended!”
              </p>
              <footer className="mt-2 font-semibold">— Liam, UK</footer>
            </blockquote>
            <blockquote className="text-lg">
              <p className="italic">
                “Amazing quality and timely delivery. Their products add a
                unique charm to my home.”
              </p>
              <footer className="mt-2 font-semibold">
                — Sophia, Australia
              </footer>
            </blockquote>
          </div>
        </div> */}

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
