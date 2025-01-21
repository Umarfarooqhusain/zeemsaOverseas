import client from "../../sanityClient";
import styles from "@/app/ui/ui.module.css";

// Define types for Product and TopItem
interface Product {
  _id: string;
  name: string;
  image: string;
}

interface TopItem {
  _id: string;
  name: string;
  image: string;
  products: Product[];
}

// Fetch TopItem by ID
async function fetchTopItemById(topItemId: string): Promise<TopItem | null> {
  const query = `*[_type == "topitem" && _id == "${topItemId}"] {
    _id,
    name,
    "image": image.asset->url,
    products[] {
      _id,
      name,
      "image": image.asset->url
    }
  }[0]`;

  const topItem = await client.fetch(query);
  return topItem || null;
}

export default async function TopItemPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const topItem = await fetchTopItemById(id);

  if (!topItem) {
    return <div>TopItem not found.</div>;
  }

  return (
    <div className="p-8">
      <div className="flex justify-center">
        <span
          className={`text-3xl font-semibold tracking-wide md:mt-28 ${styles.nav}`}
        >
          {topItem.name}
        </span>
      </div>

      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {topItem.products.map((product: Product, index: number) => (
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
