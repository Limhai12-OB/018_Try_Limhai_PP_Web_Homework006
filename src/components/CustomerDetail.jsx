"use client";

import { ArrowLeft, Calendar, User, DollarSign } from "lucide-react";
import Link from "next/link";

export default function CustomerDetail({ customer }) {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-lg flex overflow-hidden">
        <div className="  flex flex-col items-center justify-center p-8 ">
          <div className="w-40 h-40   flex items-center justify-center">
            <User className="w-16 h-16 text-gray-500" />
          </div>
          <h2 className="mt-6 text-xl font-bold text-gray-800">
            {customer.firstName} {customer.lastName}
          </h2>
        </div>

        <div className=" p-8">
          <Link
            href="/customer"
            className="inline-flex items-center gap-2 text-gray-500 mb-6 hover:text-black  "
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">BACK TO CUSTOMER TABLE</span>
          </Link>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-400 mb-1">FULL NAME</p>
              <div className="flex items-center gap-2 font-semibold text-gray-800">
                <User className="w-4 h-4 text-orange-400" />
                {customer.firstName} {customer.lastName}
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-400 mb-1">TOTAL SPENT</p>
              <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
                <DollarSign className="w-5 h-5 text-green-500" />$
                {customer.moneySpent}
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-400 mb-1">BIRTHDATE</p>
              <div className="flex items-center gap-2 font-semibold text-gray-800">
                <Calendar className="w-4 h-4 text-orange-400" />
                {customer.birthDate}
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-400 mb-1">ACCOUNT ID</p>
              <div className="bg-gray-100 px-3 py-2 rounded-md text-sm text-gray-500 break-all">
                {customer.customerId}
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-10">
            <button className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-semibold ">
              Edit Profile
            </button>

            <button className="flex-1 border border-red-300 text-red-500 py-3 rounded-xl font-semibold ">
              Delete This User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
