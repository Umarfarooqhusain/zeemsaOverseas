import client from "../app/sanityClient";
import Link from "next/link";
import ImageSlider from "./ui/imageSlider";
import styles from "@/app/ui/ui.module.css";

// Define Category type
interface Category {
  _id: string;
  name: string;
  image: string;
}

interface Item {
  _id: string;
  name: string;
  image: string;
}

async function fetchCategories(): Promise<Category[]> {
  const query = `
    *[_type == "category"]{
      _id,
      name,
      "image": image.asset->url
    }
  `;
  const categories = await client.fetch(query);
  return categories;
}

async function fetchItem(): Promise<Item[]> {
  const query = `
    *[_type == "topitem"]{
      _id,
      name,
      "image": image.asset->url
    }
  `;
  const items = await client.fetch(query);
  return items;
}

export default async function Home() {
  const categories = await fetchCategories();
  const items = await fetchItem();

  return (
    <main>
      <ImageSlider />
      <div className="flex justify-center">
        <span
          className={`text-3xl font-semibold tracking-wide mt-9 ${styles.nav}`}
        >
          Top Categories
        </span>
      </div>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {categories.map((category) => (
          <div key={category._id} className="flex flex-col items-left">
            <Link
              href={`/category/${category._id}`}
              className="flex items-center justify-center border border-gray-200  shadow-md overflow-hidden transition-transform transform duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400"
              style={{ width: "300px", height: "300px" }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </Link>
            <h3 className="text-sm mt-3 tracking-wide">{category.name}</h3>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <span
          className={`text-3xl font-semibold tracking-wide mt-9 ${styles.nav}`}
        >
          Featured Products
        </span>
      </div>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {items.map((topitem) => (
          <div key={topitem._id} className="flex flex-col items-left">
            {/* Card */}
            <Link
              href={`/topitem/${topitem._id}`}
              className="flex items-center justify-center border border-gray-200 shadow-md overflow-hidden transition-transform transform duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400"
              style={{ width: "300px", height: "300px" }}
            >
              <img
                src={topitem.image}
                alt={topitem.name}
                className="w-full h-full object-cover"
              />
            </Link>
            <h3 className="text-sm tracking-wide mt-2">{topitem.name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
