"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";




export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/Weather");
    } catch (error) {
      console.log(error);
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid place-items-center h-screen bg-gradient-to-tl from-orange-500 to-blue-400">
      <div className="shadow-2xl p-4 rounded-lg border flex gap-4 bg-gray-100">
        <div className="px-4 max-lg:py-4 flex flex-col gap-4">
          <h1 className="text-xl font-bold">Sign in</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              onChange={(e) => setEmail(e.target.value)}
              // className="w-96 max-sm:w-full  border border-gray-200 bg-white py-2 px-6 rounded-md "
              className="w-96 border p-2 outline-none shadow-inner rounded-md bg-gray-50"
              type="text"
              placeholder="Email"
            />
            <div className="relative group ">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-96 border p-2 outline-none shadow-inner rounded-md bg-gray-50"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <div
                className="absolute right-4 top-3 invisible group-hover:visible  text-black cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye/> : <FaEyeSlash />}
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold cursor-pointer px-6 py-2 rounded-md shadow-md">
              Login
            </button>
            {error && (
              <div className="bg-black text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            <Link
              className="text-sm text-blue-800 w-fit mt-3 text-center mx-auto"
              href={"/register"}
            >
              Don&apos;t have an account?{" "}
              <span className="underline">Register</span>
            </Link>

           
          </form>
        </div>
      </div>
    </div>
  );
}
