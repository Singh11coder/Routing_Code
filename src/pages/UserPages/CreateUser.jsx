import React, { useState } from "react";

const CreateUser = () => {
  // Keep your existing formData, setFormData,
  // handleChange and handleSubmit here.
  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  const [formData,setformData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    role: "user",
    company: "",
    department: "",
    password: "",
    confirmPassword: "",
  });


  const inputClass =
    "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10";

  const labelClass =
    "mb-2 block text-sm font-medium text-gray-700";

  return (
    <div className="h-screen bg-gray-50 px-4 py-8 sm:px-8 lg:px-10 overflow-y-scroll">
      <div className="mx-auto max-w-5xl">

        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm">
          <span className="text-gray-400">Users</span>
          <span className="text-gray-300">/</span>
          <span className="font-medium text-gray-800">
            Create User
          </span>
        </div>

        {/* Page Heading */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Create new user
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Add a new member and configure their account details.
            </p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                strokeLinecap="round"
              />
              <circle cx="10" cy="7" r="4" />
              <path
                d="M19 8v6m-3-3h6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
        >
          {/* Personal Information */}
          <section className="border-b border-gray-100 p-6 sm:p-8">
            <div className="mb-6 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path
                    d="M4 21v-2a8 8 0 0 1 16 0v2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <h2 className="font-semibold text-gray-900">
                  Personal information
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Enter the user's basic details.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>First name</label>
                <input
                  className={inputClass}
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="e.g. John"
                  autoComplete="given-name"
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Last name</label>
                <input
                  className={inputClass}
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="e.g. Smith"
                  autoComplete="family-name"
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Username</label>
                <input
                  className={inputClass}
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="johnsmith"
                  minLength={3}
                  autoComplete="username"
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Email address</label>
                <input
                  className={inputClass}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Phone number</label>
                <input
                  className={inputClass}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit phone number"
                  pattern="[0-9]{10}"
                  title="Enter a 10-digit phone number"
                  autoComplete="tel-national"
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Age</label>
                <input
                  className={inputClass}
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter age"
                  min="18"
                  max="100"
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Gender</label>
                <select
                  className={inputClass}
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </section>

          {/* Work Information */}
          <section className="border-b border-gray-100 p-6 sm:p-8">
            <div className="mb-6 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect
                    x="3"
                    y="7"
                    width="18"
                    height="13"
                    rx="2"
                  />
                  <path
                    d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <h2 className="font-semibold text-gray-900">
                  Work information
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Specify the user's company and department.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Company</label>
                <input
                  className={inputClass}
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Department</label>
                <input
                  className={inputClass}
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="e.g. Engineering"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass}>Account role</label>
                <select
                  className={inputClass}
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
                <p className="mt-2 text-xs text-gray-400">
                  Admin accounts may have additional permissions.
                </p>
              </div>
            </div>
          </section>

          {/* Security */}
          <section className="p-6 sm:p-8">
            <div className="mb-6 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect
                    x="4"
                    y="10"
                    width="16"
                    height="11"
                    rx="2"
                  />
                  <path
                    d="M8 10V7a4 4 0 0 1 8 0v3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <h2 className="font-semibold text-gray-900">
                  Account security
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Create secure login credentials.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Password</label>
                <input
                  className={inputClass}
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Minimum 8 characters"
                  minLength={8}
                  autoComplete="new-password"
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Confirm password</label>
                <input
                  className={inputClass}
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                  minLength={8}
                  autoComplete="new-password"
                  required
                />
              </div>
            </div>
          </section>

          {/* Footer Actions */}
          <div className="flex flex-col-reverse gap-3 border-t border-gray-100 bg-gray-50/70 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="text-xs text-gray-400">
              <span className="text-red-500">*</span> Required fields
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
              >
                Create user
              </button>
            </div>
          </div>
        </form>

        <p className="mt-5 text-center text-xs text-gray-400">
          User Management · Account Administration
        </p>
      </div>
    </div>
  );
};

export default CreateUser;

