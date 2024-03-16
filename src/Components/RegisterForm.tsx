"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
    }
    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen bg-gradient-to-tr from-blue-600 to-gray-500">
      <div className="shadow-lg p-5 rounded-lg border bg-white">
        <h1 className="text-2xl font-bold text-center my-4">Get Started</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            className="w-96 border p-2 outline-none shadow-inner rounded-md bg-gray-50"
            type="text"
            placeholder="Full Name"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-96 border p-2 outline-none shadow-inner rounded-md bg-gray-50"
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-96 border p-2 outline-none shadow-inner rounded-md bg-gray-50"
            type="password"
            placeholder="Password"
          />

          <button
            type="submit"
            // className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-2"
            className="text-white bg-blue-500 hover:bg-blue-600 mt-3 px-6 py-2 rounded-md font-bold"
          >
            Register
          </button>
          {error && (
            <div className="bg-black text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
