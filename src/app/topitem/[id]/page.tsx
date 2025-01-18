import client from "../../sanityClient";
import styles from "@/app/ui/ui.module.css";

// Define Product and TopItem types
interface Product {
  name: string;
  image: string;
}

interface TopItem {
  _id: string;
  name: string;
  image: string;
  products: Product[]; // Products are embedded directly in the topItem document
}

async function fetchTopItemById(topItemId: string): Promise<TopItem | null> {
  const query = `*[_type == "topitem" && _id == "${topItemId}"] {
    _id,
    name,
    "image": image.asset->url,
    products[] {
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

  if (!id) {
    return <div>Error: TopItem ID is missing.</div>;
  }

  let topItem: TopItem | null = null;
  try {
    topItem = await fetchTopItemById(id);
  } catch (error) {
    console.error("Failed to fetch TopItem:", error);
    return <div>Error: Could not fetch TopItem.</div>;
  }

  if (!topItem) {
    return <div>TopItem not found.</div>;
  }

  // Ensure that topItem.products exists before accessing its length
  if (!topItem.products || topItem.products.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No products found for this TopItem.
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-center">
        <span
          className={` text-3xl font-semibold tracking-wide md:mt-28 ${styles.nav}`}
        >
          {topItem.name}
        </span>
      </div>

      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {topItem.products.map((product, index) => (
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
