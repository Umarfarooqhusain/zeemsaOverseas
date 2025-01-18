export default function AboutUs() {
  return (
    <div className=" bg-slate-100 md:mt-32 md:mb-10 ">
      <div className="container mx-auto px-6 ">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Bringing the finest handcrafted products to the world.
          </p>
        </div>
        <div className="">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Welcome to our handicraft store, where tradition meets innovation.
              We specialize in offering unique handcrafted products from skilled
              artisans across the globe. Our mission is to share the beauty of
              handcrafted art while empowering local artisans and promoting
              sustainability.
            </p>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our diverse range of products reflects the rich cultural heritage
              of different regions. From timeless classics to modern designs, we
              ensure quality and authenticity in every piece. What sets us apart
              is our ability to bring your vision to life – if you have a
              specific design or product in mind, we can create it for you with
              precision and care.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-6">
            To connect the world with authentic, high-quality handcrafted
            products while supporting artisans and preserving cultural
            traditions.
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
