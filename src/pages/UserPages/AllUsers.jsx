
import React from "react";

const users = [
  {
    id: 1,
    firstName: "Emily",
    lastName: "Johnson",
    email: "emily.johnson@x.dummyjson.com",
    phone: "+81 965-431-3024",
    age: 29,
    gender: "female",
    username: "emilys",
    image: "https://dummyjson.com/icon/emilys/128",
    company: { name: "Dooley, Kozey and Cronin", title: "Sales Manager" },
    role: "admin",
  },
  {
    id: 2,
    firstName: "Michael",
    lastName: "Williams",
    email: "michael.williams@example.com",
    phone: "+1 555-123-4567",
    age: 32,
    gender: "male",
    username: "michaelw",
    image: "https://dummyjson.com/icon/michaelw/128",
    company: { name: "Tech Solutions", title: "Developer" },
    role: "user",
  },
];

const AllUsers = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-5 md:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              All Users
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Manage user accounts, roles, and information.
            </p>
          </div>

          <button className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700">
            + Create User
          </button>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Total Users</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">2</h2>
            <p className="mt-1 text-xs text-green-600">Registered accounts</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Administrators</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">1</h2>
            <p className="mt-1 text-xs text-blue-600">Privileged accounts</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Regular Users</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">1</h2>
            <p className="mt-1 text-xs text-purple-600">Standard accounts</p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col justify-between gap-4 border-b border-gray-100 p-5 md:flex-row md:items-center">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                User Directory
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                View user profiles and account information.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Search users..."
                className="rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <select className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-600 outline-none focus:border-blue-500">
                <option>All Roles</option>
                <option>Admin</option>
                <option>User</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] text-left">
              <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
                <tr>
                  <th className="px-5 py-4 font-semibold">User</th>
                  <th className="px-5 py-4 font-semibold">Contact</th>
                  <th className="px-5 py-4 font-semibold">Company</th>
                  <th className="px-5 py-4 font-semibold">Role</th>
                  <th className="px-5 py-4 text-right font-semibold">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {users.map((user) => (
                  <tr key={user.id} className="transition hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={user.image}
                          alt={user.firstName}
                          className="h-11 w-11 rounded-full border border-gray-200 object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">
                            {user.firstName} {user.lastName}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            @{user.username}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-sm text-gray-800">{user.email}</p>
                      <p className="mt-1 text-xs text-gray-500">{user.phone}</p>
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-sm font-medium text-gray-800">
                        {user.company.name}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {user.company.title}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                          user.role === "admin"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50">
                          View
                        </button>
                        <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50">
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col justify-between gap-3 border-t border-gray-100 px-5 py-4 text-sm text-gray-500 sm:flex-row sm:items-center">
            <span>Showing 2 users</span>
            <div className="flex gap-2">
              <button className="rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50">
                Previous
              </button>
              <button className="rounded-lg bg-blue-600 px-3 py-2 text-white">
                1
              </button>
              <button className="rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AllUsers;
