
import { User } from "../../context/UserContext";
import React, { useContext } from "react";

const users = [
  {
    id: 1,
    firstName: "Emily",
    lastName: "Johnson",
    email: "emily.johnson@x.dummyjson.com",
    username: "emilys",
    image: "https://dummyjson.com/icon/emilys/128",
    role: "admin",
  },
  {
    id: 2,
    firstName: "Michael",
    lastName: "Williams",
    email: "michael.williams@example.com",
    username: "michaelw",
    image: "https://dummyjson.com/icon/michaelw/128",
    role: "user",
  },
  {
    id: 3,
    firstName: "Sophia",
    lastName: "Brown",
    email: "sophia.brown@example.com",
    username: "sophiab",
    image: "https://dummyjson.com/icon/sophiab/128",
    role: "user",
  },
];

const RemoveUser = () => {

  const {users,setUsers} = useContext(User);
  return (
    <div className="min-h-screen bg-gray-50 p-5 md:p-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-red-600">
            Users / Remove User
          </p>

          <h1 className="text-3xl font-bold text-gray-900">
            Remove Users
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Select user accounts you want to remove from the system.
          </p>
        </div>

        {/* Warning */}
        <div className="mb-6 flex gap-4 rounded-xl border border-red-200 bg-red-50 p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-xl">
            ⚠️
          </div>

          <div>
            <h2 className="font-bold text-red-800">
              Important: Account removal
            </h2>
            <p className="mt-1 text-sm leading-6 text-red-700">
              Removing a user may permanently delete their account and
              associated information. Review your selection carefully
              before continuing.
            </p>
          </div>
        </div>

        {/* User List */}
        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col justify-between gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Select Accounts
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Find and select the account to remove.
              </p>
            </div>

            <input
              type="text"
              placeholder="Search by name or email..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:max-w-xs"
            />
          </div>

          <div className="divide-y divide-gray-100">
            {users.map((user) => (
              <label
                key={user.id}
                className="flex cursor-pointer items-center gap-4 p-5 transition hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 accent-red-600"
                />

                <img
                  src={user.image}
                  alt={user.firstName}
                  className="h-12 w-12 rounded-full border border-gray-200 object-cover"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900">
                    {user.firstName} {user.lastName}
                  </h3>
                  <p className="mt-1 truncate text-sm text-gray-500">
                    {user.email}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    @{user.username}
                  </p>
                </div>

                <span
                  className={`hidden rounded-full px-3 py-1 text-xs font-semibold capitalize sm:inline-block ${
                    user.role === "admin"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {user.role}
                </span>
              </label>
            ))}
          </div>

          {/* Selection Footer */}
          <div className="flex flex-col justify-between gap-4 border-t border-gray-100 bg-gray-50 p-5 sm:flex-row sm:items-center">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-900">0 users</span>
              {" "}selected
            </p>

            <button className="rounded-lg bg-red-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-red-700">
              Remove Selected Users
            </button>
          </div>
        </section>

        {/* Confirmation Preview */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xl">
              🗑️
            </div>

            <div>
              <h2 className="font-bold text-gray-900">
                Before you remove a user
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Verify the user's identity and ensure the account is no
                longer needed. Administrative accounts should receive
                additional review before removal.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RemoveUser;
