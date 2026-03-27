"use client";

import { Eye, Star, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ProductTable({ products }) {
  return (
    <div className="grid grid-cols-4  gap-8 p-4">
      {products.map((product) => (
        <div key={product.productId} className="p-2">
          <div className="relative w-full bg-white rounded-lg overflow-hidden shadow-2xl ">
            <div className="relative w-full h-[200px]">
              <Image
                src="https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=800&q=80"
                alt={product.name}
                width={400}
                height={200}
                className="object-cover"
              />
            </div>
            <div className="absolute top-3 left-3 flex flex-col items-start gap-2">
              <span className="text-xs text-white bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                New
              </span>

              <div className="bg-white/90 flex items-center gap-1 px-2 py-1 rounded-full shadow-sm">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-medium">4.9</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-800 font-medium text-xs uppercase ">
                    Flagship series
                  </p>
                  <h2 className="text-xl font-bold mt-1 line-clamp-1">
                    {product.name}
                  </h2>
                </div>
                <p className="text-gray-900 text-xl font-bold">
                  ${product.price}
                </p>
              </div>

              <p className="text-gray-500 mt-2 text-sm line-clamp-2">
                {product.description}
              </p>

              <div className="mt-4">
                <Link href={`/product/${product.productId}`}>
                  <Button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold w-full rounded-xl py-5 transition-colors">
                    View Product <MoveUpRight size={18} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
