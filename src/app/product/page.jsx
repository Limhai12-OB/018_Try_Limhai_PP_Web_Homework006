import ProductTable from "@/components/ProductTable";

export default async function Page() {
  const res = await fetch(
    "https://homework-api.noevchanmakara.site/api/v1/products",
  );

  const data = await res.json();

  return (
    <div className="mt-16">
      <h2 className="text-xl font-semibold mb-4 p-4">List of All Products</h2>
      <ProductTable products={data.payload} />
    </div>
  );
}
