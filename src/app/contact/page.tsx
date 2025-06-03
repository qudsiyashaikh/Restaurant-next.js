"use client";

import { useRouter } from "next/navigation";



export default function OrderPage() {
   const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 px-4 py-8 font-sans">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-red-600 text-center mb-6">
          🧾 Order Confirmation
        </h1>

        <div className="space-y-4">
          {/* Order Item 1 */}
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <h3 className="text-lg font-semibold">Chicken Biryani</h3>
              <p className="text-gray-500 text-sm">Quantity: 1</p>
            </div>
            <span className="text-md font-bold text-red-500">₹180</span>
          </div>

          {/* Order Item 2 */}
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <h3 className="text-lg font-semibold">Paneer Butter Masala</h3>
              <p className="text-gray-500 text-sm">Quantity: 2</p>
            </div>
            <span className="text-md font-bold text-red-500">₹300</span>
          </div>

          {/* Order Item 3 */}
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <h3 className="text-lg font-semibold">Tandoori Roti</h3>
              <p className="text-gray-500 text-sm">Quantity: 4</p>
            </div>
            <span className="text-md font-bold text-red-500">₹80</span>
          </div>
        </div>

        {/* Order Total */}
        <div className="flex justify-between mt-6 text-xl font-bold text-gray-800 border-t pt-4">
          <span>Total</span>
          <span>₹560</span>
        </div>

        {/* Status Info */}
        <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-700">
          <p>✅ Your order has been placed successfully!</p>
          <p>⏱ Estimated delivery: 30–45 mins</p>
          <p>🛵 Delivery Partner: Zain (Mob: 6789 12345)</p>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <button
            onClick={() => router.push("./page.tsx")}
            className="inline-block bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
