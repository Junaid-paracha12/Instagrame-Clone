import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function index() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignIn = () => {
    if (email && password) {
      setIsAuthenticated(true);
    } else {
      alert("Please enter correct Emial and Password");
    }
  };

  return (
    <>
      <div>
        {isAuthenticated ? (
          <>
            <Navbar />
            <Sidebar />
          </>
        ) : (
          <div className="mx-auto w-4/5 flex items-center my-9 place-content-center px-4 text-center">
            <div className="hidden lg:flex justify-center">
              <Image
                src={"/mobile.jpg"}
                width={2000}
                height={2000}
                alt="img"
                className="h-[75vh] w-full"
              />
            </div>
            <div className="flex flex-col gap-9 mt-7 mx-5">
              <div className="border-2 border-slate-300/60 px-7 py-5 ">
                <span className="flex w-full justify-center my-4">
                  <Image
                    src={"/insta.png"}
                    width={200}
                    height={200}
                    alt="logo"
                    className="w-36 h-14"
                  />
                </span>

                <div className="flex flex-col gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Phone number, username, or email"
                    className="py-1.5 px-3 w-72 md:w-80 placeholder:text-xs border focus:border-slate-600/60 focus:outline-none rounded-sm "
                  />

                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="py-1.5 px-3 w-72 md:w-80 border focus:border-slate-600/60 focus:outline-none rounded-sm placeholder:text-xs"
                  />

                  <button
                    onClick={handleSignIn}
                    className="rounded-md bg-sky-500 text-white py-1 my-3 font-semibold"
                  >
                    Login
                  </button>
                  <p className="text-sm text-center text-slate-700/70">OR</p>
                  <span className="flex items-center gap-1 place-content-center">
                    <Image
                      src={"/facebook.png"}
                      width={30}
                      height={30}
                      className="w-4 h-4"
                      alt="icon"
                    />
                    <h3 className="text-indigo-600">Log in with Facebook</h3>
                  </span>
                  <p className="text-xs text-slate-500/80 font-semibold">
                    {" "}
                    Forget password?
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-1 border-2 border-slate-300/60 py-4 justify-center">
                <p className="text-sm">Don't have an Account?</p>
                <Link href={"signup"}>
                  {" "}
                  <p className="text-sky-500 text-sm">Sign up</p>
                </Link>
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
