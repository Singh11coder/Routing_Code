import React, { useContext } from 'react'
import { Product } from '../context/ProductContext';

const Order = () => {
   const {cartItems , setCartItems} = useContext(Product);
   let totalPrice = cartItems.reduce((acc,curr) => {
      acc = acc + ((curr.quantity)*(curr.price));

      return acc;
  },0)

  let dis = totalPrice * (10/100);
  let discount = dis.toFixed(2);
  return (
    <div className="h-screen bg-gray-50 px-4 py-8 md:px-8 overflow-y-scroll">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white shadow-md">
            🔒
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Checkout
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Complete your order securely.
            </p>
          </div>
        </div>

        {/* Checkout Steps */}
        <div className="mb-8 flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
          <div className="flex items-center gap-2 text-blue-600">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              1
            </span>
            <span className="text-sm font-semibold">Shipping</span>
          </div>

          <div className="h-px flex-1 bg-gray-200" />

          <div className="flex items-center gap-2 text-gray-400">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-bold">
              2
            </span>
            <span className="hidden text-sm font-medium sm:inline">
              Payment
            </span>
          </div>

          <div className="h-px flex-1 bg-gray-200" />

          <div className="flex items-center gap-2 text-gray-400">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-bold">
              3
            </span>
            <span className="hidden text-sm font-medium sm:inline">
              Confirmation
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">

          {/* Left: Checkout Form */}
          <div className="space-y-6 lg:col-span-2">

            {/* Shipping Address */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  📍
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Shipping Address
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Where should we deliver your order?
                  </p>
                </div>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Street Address
                  </label>
                  <input
                    type="text"
                    placeholder="House number, street name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="Enter city"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <input
                      type="text"
                      placeholder="Enter state"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Enter PIN code"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </form>
            </section>

            {/* Payment Method */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  💳
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Payment Method
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Choose how you'd like to pay.
                  </p>
                </div>
              </div>

              <div className="space-y-3">

                <label className="flex cursor-pointer items-center gap-4 rounded-xl border-2 border-blue-600 bg-blue-50/50 p-4">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    className="h-4 w-4 accent-blue-600"
                  />
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-xl shadow-sm">
                    💳
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-gray-900">
                      Credit / Debit Card
                    </span>
                    <span className="mt-1 block text-sm text-gray-500">
                      Pay securely using your card
                    </span>
                  </span>
                </label>

                <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-blue-300">
                  <input
                    type="radio"
                    name="payment"
                    className="h-4 w-4 accent-blue-600"
                  />
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 text-xl">
                    📱
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-gray-900">
                      UPI
                    </span>
                    <span className="mt-1 block text-sm text-gray-500">
                      Pay using your UPI app
                    </span>
                  </span>
                </label>

                <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-blue-300">
                  <input
                    type="radio"
                    name="payment"
                    className="h-4 w-4 accent-blue-600"
                  />
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 text-xl">
                    💵
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-gray-900">
                      Cash on Delivery
                    </span>
                    <span className="mt-1 block text-sm text-gray-500">
                      Pay when your order arrives
                    </span>
                  </span>
                </label>
              </div>
            </section>
          </div>

          {/* Right: Order Summary */}
          <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">
            <h2 className="text-xl font-bold text-gray-900">
              Order Summary
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Review your purchase.
            </p>

            {/* Product Preview */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-50 text-2xl">
                  📦
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-gray-900">
                    Your Cart Products
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Product quantity and details
                  </p>
                </div>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="mt-6 space-y-4 border-t border-gray-100 pt-5">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium text-gray-900">${totalPrice}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Discount</span>
                <span className="font-medium text-green-600">−${discount}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Estimated Tax</span>
                <span className="font-medium text-gray-900">$0.00</span>
              </div>
            </div>

            {/* Total */}
            <div className="mt-5 border-t border-dashed border-gray-200 pt-5">
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-gray-900">
                  Total
                </span>
                <span className="text-2xl font-bold text-blue-600">
                  ${totalPrice - discount}
                </span>
              </div>
              <p className="mt-2 text-xs text-gray-400">
                Final amount will be confirmed before payment.
              </p>
            </div>

            {/* Place Order */}
            <button
              type="button"
              className="mt-7 w-full rounded-xl bg-blue-600 px-5 py-4 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
            >
              Place Order →
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
              <span>🔒</span>
              Secure and encrypted checkout
            </div>

            <div className="mt-6 rounded-xl bg-green-50 p-4">
              <p className="font-semibold text-green-800">
                ✓ Free shipping
              </p>
              <p className="mt-1 text-sm text-green-700">
                No extra delivery charges on this order.
              </p>
            </div>
          </aside>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Need help with your order? Our support team is here to help.
        </p>
      </div>
    </div>
  )
}

export default Order
