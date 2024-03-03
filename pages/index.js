import Home from "@/components/Home";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
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
            <Sidebar />
          </>
        ) : (
          <div className="mx-auto w-3/5 flex flex-row gap-24 my-9 place-content-center">
            <div className="hidden lg:flex">
              <Image
                src={"/mobile.jpg"}
                width={2000}
                height={2000}
                alt="img"
                className="h-[90vh] w-full"
              />
            </div>
            <div className="flex flex-col gap-8 mt-7">
              <Image
                src={"/insta.png"}
                width={200}
                height={200}
                alt="logo"
                className=""
              />

              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Phone number, username, or email"
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
                  onClick={handleSignIn}
                  className="rounded-md bg-sky-600 text-white py-1"
                >
                  Login
                </button>
                <p className="text-sm text-center">OR</p>
                <span className="flex items-center gap-1">
                  <Image
                    src={"/facebook.png"}
                    width={30}
                    height={30}
                    className="w-4 h-4"
                  />
                  <h3 className="text-indigo-600">Log in with Facebook</h3>
                </span>
                <p className="text-xs text-slate-500/80"> Forget password?</p>
              </div>
              <span className="flex items-center gap-1">
                <p className="text-sm">Don't have an Account?</p>
                <p className="text-sky-500 text-sm">Sign up</p>
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
