import CustomerDetail from "@/components/CustomerDetail";

export default async function Page({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://homework-api.noevchanmakara.site/api/v1/customers/${id}`,
  );

  const data = await res.json();

  return <CustomerDetail customer={data.payload} />;
}
