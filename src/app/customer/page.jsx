import CustomerTable from "@/components/CustomerTable";

export default async function Page() {
  const res = await fetch(
    "https://homework-api.noevchanmakara.site/api/v1/customers",
  );

  const data = await res.json();

  return (
    <div className="mt-16 p-6">
      <h2 className="text-xl font-bold mb-4">List of All Customer</h2>
      <CustomerTable customers={data.payload} />
    </div>
  );
}
