// Import necessary modules and components

import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [fullname, setFullName] = useState();

  const handleSignUp = () => {
    if (email && password && username && fullname) {
      setIsAuthenticated(true);
    } else {
      alert("Fill Information");
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Sidebar />
        </>
      ) : (
        <div className="mx-auto w-3/4 flex flex-row gap-24 my-9 place-content-center">
          {/* ... Similar structure to the login page */}
          <div className="flex flex-col gap-8 mt-7">
            <Image
              src={"/insta.png"}
              width={200}
              height={200}
              alt="logo"
              className=""
            />
            <span className="flex items-center gap-1 rounded-md bg-sky-600 text-white py-1.5 px-4 ">
              <Image
                src={"/facebook.png"}
                width={30}
                height={30}
                className="w-4 h-4"
                alt="icon"
              />
              <h3 className="text-white">Log in with Facebook</h3>
            </span>
            <p className="text-sm text-center">OR</p>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Mobile Number or Email"
                className="py-1.5 px-3 max-w-72 placeholder:text-xs"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="py-1.5 px-3 max-w-72 placeholder:text-xs"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="py-1.5 px-3 max-w-72 placeholder:text-xs"
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="py-1.5 px-3 max-w-72"
              />

              <button
                onClick={handleSignUp}
                className="rounded-md bg-sky-600 text-white py-1"
              >
                Sign Up
              </button>
            </div>
            <span className="flex items-center gap-1">
              <p className="text-sm">have an Account?</p>
              <Link href={"/"}>
                {" "}
                <p className="text-sky-500 text-sm">Log in</p>
              </Link>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
