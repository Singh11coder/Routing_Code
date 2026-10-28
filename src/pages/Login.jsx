
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import {useForm} from 'react-hook-form';
import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Auth } from "../context/Authcontext";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    registeredUser,
    loggedInUser,
    setLoggedInUser} = useContext(Auth);

  let navigate = useNavigate();

  const {
  reset, 
  handleSubmit,
  register,
  formState:{errors}
  } = useForm({
    mode:"onChange"
  });

  const formSubmit = (data) => {
     
     const {Email, Password} = data;
     let arr = JSON.parse(localStorage.getItem("users"));
  
     let ans = arr.find((val) => {
         return val.Email === Email && val.Password === Password;
     });

     console.log(ans);
     setLoggedInUser(ans);
     localStorage.setItem("loggedIn",JSON.stringify(ans));
     navigate("/main");
     reset();
  }

  return (
    <div className="min-h-screen bg-[#f5f6fb] lg:grid lg:grid-cols-2">
      {/* Left branding section */}
      <section className="relative hidden overflow-hidden bg-[#111329] p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-600/30 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-violet-500/20 blur-[100px]" />

        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500">
            <Sparkles size={23} />
          </div>
          <span className="text-xl font-bold">
            Elevate<span className="text-indigo-400">.</span>
          </span>
        </div>

        <div className="relative z-10 max-w-xl">
          <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-indigo-200">
            Your next chapter starts here
          </span>

          <h1 className="text-5xl font-bold leading-tight xl:text-6xl">
            Build something
            <br />
            <span className="bg-gradient-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent">
              extraordinary.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-8 text-slate-300">
            A better space for your ideas, your goals, and everything you
            want to accomplish.
          </p>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <p className="font-semibold">Your potential, unlocked.</p>
            <p className="mt-2 text-sm text-slate-400">
              One account. Endless possibilities.
            </p>
          </div>
        </div>

        <p className="relative z-10 text-sm text-slate-400">
          © 2026 Elevate. All rights reserved.
        </p>
      </section>

      {/* Login form */}
      <main className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-10 lg:px-12">
        <div className="w-full max-w-md">
          <div className="mb-10 flex items-center justify-center gap-2 lg:hidden">
            <Sparkles className="text-indigo-600" size={26} />
            <span className="text-xl font-bold text-slate-900">
              Elevate<span className="text-indigo-600">.</span>
            </span>
          </div>

          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Welcome back
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Sign in to your account
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Enter your details below to access your workspace.
            </p>
          </div>

          <form
            className="space-y-5"
            onSubmit={handleSubmit(formSubmit)}
          >
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  {...register('Email',{
                    required:"Email is required",
                    pattern:{
                       value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                       message:"Please Enter valid Email"
                    }
                  })}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
                {errors && <p className="text-red-600">{errors.Email?.message}</p>}
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <span
                  to="/forgot-password"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Forgot password?
                </span>
              </div>

              <div className="relative">
                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  {...register("Password",{
                    required:"Password is required",
                    pattern:{
                       value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,}$/,
                       message:"Use 8+ characters with uppercase, lowercase, a number, and a special symbol."
                    }
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
              {errors && <p className="text-red-600">{errors.Password?.message}</p>}
            </div>

            <label className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-600">
              <input
                type="checkbox"
                name="remember"
                className="h-4 w-4 rounded accent-indigo-600"
              />
              Remember me
            </label>

            <button
              type="submit"
              className="cursor-pointer group flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700"
            >
              Sign in
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <p
              onClick={() => navigate("/register")}
              className="cursor-pointer font-bold text-indigo-600 hover:text-indigo-800"
            >
              Create account
            </p>
          </p>

         
        </div>
      </main>
    </div>
  );
};

export default Login;
