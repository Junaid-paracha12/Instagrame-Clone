import Image from "next/image";
import { useState } from "react";
import Home from "./Home";
import Link from "next/link";
import PopupModal from "./PopupModal";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [popupModalState, setPopupModalState] = useState(false);

  const toggleModal = () => {
    setPopupModalState(!popupModalState);
    console.log("Popup modal state:", !popupModalState);
  };

  const sidebarAPI = [
    { title: "Home", icon: "/home.png" },
    { title: "Search", icon: "/search.png" },
    { title: "Explore", icon: "/direction.png" },
    { title: "Reels", icon: "/video.png" },
    { title: "Messages", icon: "/chat.png" },
    { title: "Notifications", icon: "/heart.png" },
    { title: "create", icon: "/tab.png" },
    { title: "Profile", icon: "/1.png", rounded: true },
  ];

  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="hidden md:flex h-[100vh] fixed top-0 overflow-y-scroll scroll-smooth scroll-hidden border-r-2 border-slate-200/70">
          <div
            className={`${
              open ? "w-64" : "w-24"
            } py-4 px-6 flex flex-col gap-9 bg-white`}
          >
            {/* <Image
              width={20}
              height={20}
              src="/left.png"
              className={`absolute cursor-pointer right-2 top-16 md:bottom-12 w-4 h-4  ${
                !open && "rotate-180"
              }`}
              onClick={() => setOpen(!open)}
            /> */}

            <Link href={"/"} className="mt-4 ">
              {" "}
              <Image
                src={"/insta.png"}
                width={100}
                height={20}
                className={`${!open && "hidden"} w-32 h-12 object-cover`}
                alt="img"
              />
              <Image
                src={"/instagram.png"}
                width={20}
                height={20}
                alt="icon"
                className={` ${open && "hidden"} mx-3`}
              />
            </Link>

            <div className="flex flex-col gap-4">
              {sidebarAPI.map((v, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-md  cursor-pointer hover:bg-slate-300/70 p-2"
                >
                  <Image
                    src={v.icon}
                    width={20}
                    height={20}
                    className={`w-6 h-6 ${v.rounded ? "rounded-full" : ""}`}
                    alt="icon"
                  />
                  <p
                    className={`text-sm md:text-base ${
                      !open && "hidden"
                    } origin-left duration-200`}
                  >
                    {v.title}
                  </p>
                </div>
              ))}
              <div className="flex items-center gap-4 rounded-md  cursor-pointer hover:bg-slate-300/70 px-1 ">
                <Image
                  src={"/menu.png"}
                  width={20}
                  height={20}
                  className="w-7 h-7 object-cover"
                  alt="icon"
                />

                <p
                  onClick={toggleModal}
                  className={`${
                    !open && "hidden"
                  } text-sm font-semibold text-black`}
                >
                  More
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${open ? "ml-0 md:ml-64" : "ml-0 md:ml-24"}`}>
          <Home />
        </div>
        <Footer />
      </div>
      {popupModalState && <PopupModal />}
    </>
  );
}
