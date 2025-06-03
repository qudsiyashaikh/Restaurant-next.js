"use client";

import { useState } from "react";

const initialCartItems = [
  {
    id: 1,
    name: "Chicken Biryani",
    price: 180,
    quantity: 1,
    image: "/images/chicken-biryani.jpg",
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    price: 150,
    quantity: 2,
    image: "/images/paneer-butter.jpg",
  },
  {
    id: 3,
    name: "Tandoori Roti",
    price: 20,
    quantity: 4,
    image: "/images/roti.jpg",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl  min-h-screen mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="bg-yellow-200 rounded-xl shadow-md p-4 flex flex-col"
              >
                
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="mb-2 text-gray-600">₹{item.price} × {item.quantity}</p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <h2 className="text-2xl font-bold">Total: ₹{totalAmount}</h2>
            <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
