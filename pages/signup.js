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
        <div className="mx-auto w-2/4 flex  place-content-center">
          <div className="flex flex-col gap-4 mt-7 px-6 my-5 text-center">
            <div className="border-2 border-slate-300/60 px-6 py-6">
              <span className="flex flex-col items-center">
                {" "}
                <Image
                  src={"/insta.png"}
                  width={200}
                  height={200}
                  alt="logo"
                  className=""
                />
                <p className="max-w-64 text-center text-slate-500/90 font-semibold">
                  Sign up to see photos and videos from your friends.
                </p>
              </span>
              <span className="flex items-center gap-1 rounded-md bg-sky-500 text-white py-1.5 px-4 justify-center my-2">
                <span className="bg-white">
                  <Image
                    src={"/social.png"}
                    width={30}
                    height={30}
                    className="w-5 h-5"
                    alt="icon"
                  />
                </span>
                <h3 className="text-white">Log in with Facebook</h3>
              </span>
              <p className="text-sm text-center font-semibold text-slate-400/70">
                OR
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Mobile Number or Email"
                  className="py-1.5 px-3 max-w-72 placeholder:text-xs border focus:border-slate-600/60 focus:outline-none rounded-sm"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  className="py-1.5 px-3 max-w-72 placeholder:text-xs border focus:border-slate-600/60 focus:outline-none rounded-sm"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="py-1.5 px-3 max-w-72 placeholder:text-xs border focus:border-slate-600/60 focus:outline-none rounded-sm"
                />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="py-1.5 px-3 max-w-72 border focus:border-slate-600/60 focus:outline-none rounded-sm"
                />
                <p className="max-w-64 text-center text-slate-500/90 font-semibold text-xs">
                  People who use our service may have uploaded your contact
                  information to Instagram. Learn More
                </p>
                <p className="max-w-64 text-center text-slate-500/90 font-semibold text-xs">
                  By signing up, you agree to our Terms , Privacy Policy and
                  Cookies Policy .
                </p>
                <button
                  onClick={handleSignUp}
                  className="rounded-md bg-sky-500 text-white py-1"
                >
                  Sign Up
                </button>
              </div>
            </div>
            <span className="flex items-center gap-1 justify-center my-4 border-2 border-slate-300/60 py-2">
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
