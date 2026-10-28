
import React, { useContext } from "react";
import { Product } from "../context/ProductContext";

const CartItems = () => {
  const {cartItems , setCartItems} = useContext(Product);
  let totalPrice = cartItems.reduce((acc,curr) => {
      acc = acc + ((curr.quantity)*(curr.price));

      return acc;
  },0)

  let dis = totalPrice * (10/100);
  let discount = dis.toFixed(2);
  
   

  const handleIncrement = (id) => {
     let arr = cartItems.map((val) => {
        return val.id === id
        ? {...val,quantity:val.quantity + 1}
        : val
     })
     setCartItems(arr);
  }
  
  const handleDecrement = (id) => {
     let obj = cartItems.find((val) => val.id === id);
     let arr;
     if(obj.quantity === 1){
       arr = cartItems.filter((val) => val.id !== id);
     }
     else{
       arr = cartItems.map((val) => {
          return val.id === id
          ? {...val,quantity:val.quantity-1}
          : val
       })
     }

     setCartItems(arr);
  }
  
  const removeFromCarts = (id) => {
     let arr = cartItems.filter((val) => val.id !== id);
     setCartItems(arr);
  }
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white shadow-md">
              🛒
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Shopping Cart
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Review your items before checkout.
              </p>
            </div>
          </div>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart UI */
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mb-5 text-6xl">🛍️</div>
            <h2 className="text-2xl font-bold text-gray-800">
              Your cart is empty
            </h2>
            <p className="mt-2 text-gray-500">
              Looks like you haven't added anything yet.
            </p>
            <button className="mt-6 rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">

            {/* Cart Products */}
            <div className="space-y-4 lg:col-span-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-800">
                  Cart Items
                </h2>
                <span className="text-sm text-gray-500">
                  {cartItems.length} products
                </span>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5"
                >
                  <div className="flex flex-col gap-5 sm:flex-row">

                    {/* Product Image */}
                    <div className="flex h-36 w-full shrink-0 items-center justify-center rounded-xl bg-gray-50 p-3 sm:w-36">
                      <img
                        src={item.thumbnail || item.images?.[0]}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    {/* Product Information */}
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium capitalize text-blue-700">
                            {item.category}
                          </span>

                          <h3 className="mt-2 text-lg font-bold text-gray-900">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            Brand: {item.brand}
                          </p>

                          <p className="mt-1 text-sm text-yellow-600">
                            ★ {item.rating}
                          </p>
                        </div>

                        {/* Remove Button - UI only */}
                        <button
                          onClick={() => removeFromCarts(item.id)}
                          type="button"
                          aria-label={`Remove ${item.title}`}
                          className="shrink-0 rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                        >
                          ✕
                        </button>
                      </div>

                      <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                        {item.description}
                      </p>

                      <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-5">
                        {/* Quantity Controls - UI only */}
                        <div>
                          <p className="mb-2 text-xs font-medium text-gray-500">
                            Quantity
                          </p>

                          <div className="flex items-center overflow-hidden rounded-lg border border-gray-200">
                            <button
                              onClick={() => handleDecrement(item.id)}
                              type="button"
                              className="h-9 w-10 text-lg text-gray-600 transition hover:bg-gray-100"
                            >
                              −
                            </button>

                            <span className="flex h-9 min-w-10 items-center justify-center border-x border-gray-200 px-3 font-semibold text-gray-800">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() => handleIncrement(item.id)}
                              type="button"
                              className="h-9 w-10 text-lg text-blue-600 transition hover:bg-blue-50"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-xs text-gray-400">
                            {item.discountPercentage}% off
                          </p>

                          <p className="text-xl font-bold text-green-700">
                            ${(item.price * (1 - item.discountPercentage / 100)).toFixed(2)}
                          </p>

                          <p className="text-sm text-gray-400 line-through">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Continue Shopping */}
              <button
                type="button"
                className="inline-flex items-center gap-2 py-3 font-semibold text-blue-600 transition hover:text-blue-800"
              >
                <span className="text-lg">←</span>
                Continue Shopping
              </button>
            </div>

            {/* Order Summary */}
            <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">
              <h2 className="text-xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">${totalPrice}</span>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>Discount</span>
                  <span className="font-medium text-green-600">−${discount}</span>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>

                <div className="border-t border-dashed border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-green-600">
                      ${(totalPrice-discount).toFixed(2)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">
                    Taxes included where applicable.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="mt-7 w-full rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
              >
                Proceed to Checkout →
              </button>

              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-500">
                <span>🔒</span>
                Secure checkout
              </div>

              <div className="mt-5 rounded-xl bg-blue-50 p-4">
                <p className="text-sm font-semibold text-blue-800">
                  Free shipping on your order!
                </p>
                <p className="mt-1 text-xs text-blue-600">
                  Your products are waiting for you.
                </p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItems;
