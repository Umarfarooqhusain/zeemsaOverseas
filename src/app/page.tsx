import client from "../app/sanityClient";
import Link from "next/link";
import ImageSlider from "./ui/imageSlider";
import styles from "./ui/ui.module.css";
import Head from "next/head";
import Image from "next/image";

// Define types for Category and Item
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

// Fetch Categories
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

// Fetch Items
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

// Server Component: Fetch data directly in the component
export default async function Home() {
  // Fetch categories and items directly inside the component
  const [categories, items] = await Promise.all([
    fetchCategories(),
    fetchItem(),
  ]);

  return (
    <>
      <Head>
        <title>Shop Top Categories & Featured Products</title>
        <meta
          name="description"
          content="Explore our top categories and featured products, including handcrafted items and unique designs."
        />
        <link rel="canonical" href="https://www.yourdomain.com/" />
      </Head>
      <main>
        <ImageSlider />
        <div className="flex justify-center">
          <h2
            className={`text-3xl font-semibold tracking-wide mt-9 ${styles.nav}`}
          >
            Top Categories
          </h2>
        </div>
        <div className="p-8 grid text-xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {categories.map((category: Category) => (
            <div key={category._id} className="flex flex-col items-left">
              <Link
                href={`/category/${category._id}`}
                aria-label={`View category: ${category.name}`}
                className="flex items-center justify-center border border-gray-200 shadow-md overflow-hidden transition-transform transform duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400"
                style={{ width: "300px", height: "300px" }}
              >
                <Image
                  src={category.image}
                  alt={`Top category: ${category.name}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </Link>
              <h3 className="text-sm mt-3 tracking-wide">{category.name}</h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <h2
            className={`text-3xl font-semibold tracking-wide mt-9 ${styles.nav}`}
          >
            Featured Products
          </h2>
        </div>
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {items.map((topitem: Item) => (
            <div key={topitem._id} className="flex flex-col items-left">
              <Link
                href={`/topitem/${topitem._id}`}
                aria-label={`View featured product: ${topitem.name}`}
                className="flex items-center justify-center border border-gray-200 shadow-md overflow-hidden transition-transform transform duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400"
                style={{ width: "300px", height: "300px" }}
              >
                <Image
                  src={topitem.image}
                  alt={`Featured product: ${topitem.name}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </Link>
              <h3 className="text-sm tracking-wide mt-2">{topitem.name}</h3>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
