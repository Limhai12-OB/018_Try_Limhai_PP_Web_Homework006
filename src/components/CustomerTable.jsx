"use client";

import { Eye, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CustomerTable({ customers }) {
  return (
    <div className="w-390 rounded-2xl border bg-white shadow-sm overflow-hidden   m-4">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            <th className="text-left px-6 py-4 font-semibold">Customer Name</th>
            <th className="text-left px-6 py-4 font-semibold">Birthdate</th>
            <th className="text-left px-6 py-4 font-semibold">Amount Spent</th>
            <th className="text-left px-6 py-4 font-semibold">Action</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.customerId}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="px-6 py-4">
                <div className="font-semibold text-gray-800">
                  {customer.firstName} {customer.lastName}
                </div>
                <div className="text-xs text-gray-400">
                  ID: {customer.customerId}
                </div>
              </td>

              <td className="px-6 py-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={16} />
                  {customer.birthDate}
                </div>
              </td>

              <td className="px-6 py-4">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold text-sm">
                  ${customer.moneySpent}
                </span>
              </td>

              <td className="px-6 py-4">
                <Link href={`/customer/${customer.customerId}`}>
                  <Button
                    variant="outline"
                    className="rounded-full flex gap-2 items-center"
                  >
                    <Eye size={16} />
                    View Profile
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}