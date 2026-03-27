import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center w-395 mt-54">
      <div>
        <div className="ml-32">
          <h1 className="text-9xl font-bold text-gray-300 ">404</h1>
          <p className="absolute top-72 -ml-16 text-4xl font-bold">
            Oops! Page not found.
          </p>
        </div>
        <p className="w-[550px] text-center">
          The page you are looking for might have been removed, has its name
          change, or is temporarily unavailable. Don't worry, our products are
          still here!
        </p>
        <div className="text-center mt-6">
          <div className="flex justify-center gap-4">
            <button className="font-bold bg-blue-800 text-white p-4 rounded-2xl shadow-lg shadow-blue-700">
              <Link href={""}>Back to Homepage</Link>
            </button>
            <button className="font-bold border-2 shadow flex  p-4 rounded-2xl ">
              <Search />
              <Link href={""}>Back to Homepage</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
