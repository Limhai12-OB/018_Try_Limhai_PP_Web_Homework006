import CustomerHomepageCardComponent from "@/components/ui/CustomerHomepageCardComponent";
import ProductHomepageCardComponent from "@/components/ui/ProductHomepageCardComponent";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center gap-5   w-400  ">
        <div className="flex justify-center items-center gap-4">
          <ProductHomepageCardComponent />
          <CustomerHomepageCardComponent />
        </div>
      </div>
    </div>
  );
}
