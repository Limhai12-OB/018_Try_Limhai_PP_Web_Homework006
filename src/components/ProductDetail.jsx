"use client";

import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetail({ product }) {
  return (
    <div className="  bg-gray-100 flex items-center justify-center p-4 ">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg flex flex-col  overflow-hidden">
        <div className="w-full   bg-gray-50 flex items-center justify-center p-6 ">
          <div className="relative w-full h-64 ">
            <Image
              src={product.image}
              alt={product.name}
              className="object-contain rounded-xl"
              width={400}
              height={200}
            />
          </div>
        </div>

        <div className="w-full  p-6 md:p-10 flex flex-col justify-between">
          <div>
            <Link
              href="/product"
              className="inline-flex items-center gap-2 text-gray-400 text-sm mb-6 hover:text-black transition-colors"
            >
              <ArrowLeft size={16} />
              BACK TO PRODUCT
            </Link>
            <p className="text-xs text-cyan-500   mb-2">PREMIUM EXPERIENCE</p>
            <h1 className="text-4xl  font-extrabold text-gray-900  ">
              {product.name}
            </h1>
            <div className="flex  items-center gap-3 mt-4">
              <p className="text-2xl  font-bold text-gray-900">
                ${product.price}
              </p>
              {product.originalPrice && (
                <p className="text-sm text-gray-400 line-through">
                  ${product.originalPrice}
                </p>
              )}
              {product.discount && (
                <span className="text-green-500 text-sm font-semibold">
                  SAVE {product.discount}% TODAY
                </span>
              )}
            </div>
            <p className="text-gray-500 mt-6   border-gray-200 pl-4">
              {product.description}
            </p>
            <div className="mt-8">
              <label
                htmlFor="quantity"
                className="text-xs text-gray-400 mb-2 block"
              >
                SELECT QUANTITY
              </label>
              <div className="flex items-center bg-gray-100 rounded-full w-fit px-4 py-2 gap-6">
                <button className="  hover:bg-gray-200 p-1 rounded-full  ">
                  <Minus size={16} />
                </button>

                <span
                  id="quantity"
                  className="font-semibold min-w-[24px] text-center"
                >
                  1
                </span>

                <button className="hover:bg-gray-200 p-1 rounded-full ">
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10">
            <button
              type="button"
              className="flex-1 bg-slate-900 text-white py-3 md:py-4 rounded-xl font-semibold flex items-center justify-center gap-2  "
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>

            <button
              type="button"
              className="flex-1 border border-gray-300 py-3 md:py-4 rounded-xl font-semibold text-gray-600  "
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
