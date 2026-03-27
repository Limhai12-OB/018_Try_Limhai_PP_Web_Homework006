import ProductDetail from "@/components/ProductDetail";

export default async function Page({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://homework-api.noevchanmakara.site/api/v1/products/${id}`,
  );

  const data = await res.json();

  const product = {
    id: data.payload.productId,
    name: data.payload.name,
    price: data.payload.price,
    discount: 20,
    description: data.payload.description,
    image:
      "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=800&q=80",
  };

  return <ProductDetail product={product} />;
}
