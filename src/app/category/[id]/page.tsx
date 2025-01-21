import client from "../../sanityClient"; // Correct path to your sanityClient
import Image from "next/image";
import styles from "@/app/ui/ui.module.css";
interface Product {
  _id: string;
  name: string;
  image: string;
}

interface Category {
  _id: string;
  name: string;
  image: string;
  products: Product[];
}

async function fetchCategoryById(categoryId: string): Promise<Category | null> {
  const query = `*[_type == "category" && _id == "${categoryId}"] {
    _id,
    name,
    "image": image.asset->url,
    products[] {
      _id,
      name,
      "image": image.asset->url
    }
  }[0]`;

  const category = await client.fetch(query);
  return category || null;
}

export default async function CategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const category = await fetchCategoryById(id);

  if (!category) {
    return <div>Category not found.</div>;
  }

  return (
    <div className="p-8">
      <div className="flex justify-center">
        <span
          className={`text-3xl font-semibold tracking-wide md:mt-28 ${styles.nav}`}
        >
          {category.name}
        </span>
      </div>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {category.products.map((product: Product, index: number) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center justify-center border border-gray-200 shadow-md overflow-hidden transition-transform transform duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400">
              <img
                src={product.image || "/placeholder.png"}
                alt={product.name}
                className="w-full h-full object-cover max-w-[300px] max-h-[300px]"
              />
            </div>
            <h3 className="text-sm mt-3 tracking-wide text-center">
              {product.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
