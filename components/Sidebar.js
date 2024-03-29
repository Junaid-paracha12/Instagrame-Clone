import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import PopupModal from "./PopupModal";
import Notification from "./Notification";
import Create from "./Create";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [popupModalState, setPopupModalState] = useState(false);
  const [notificationState, setNotificationState] = useState(false);
  const[createState,setCreateState] =useState(false);

   const toggleCreate = () =>{
    setCreateState(!createState);
   };


  const toggleNotification = () =>{
    setNotificationState(!notificationState);
    console.log("notification bar:",!notificationState );
  };

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
  ];

  return (
    <>
      <div className="w-full">
     
        <div className="hidden md:flex h-[100vh] fixed top-0 overflow-y-scroll scroll-smooth scroll-hidden border-r-2 border-slate-200/70">
          <div
            className={`${
              open ? "w-64" : "w-24"
            } py-4 px-6 flex flex-col gap-9 bg-white`}
          >
            

            <Link href={"/"} className="mt-4 ">
              {" "}
              <Image
                src={"/insta.png"}
                width={100}
                height={20}
                className={`${!open && "hidden"} w-32 h-10 object-cover`}
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

            <div className="flex flex-col gap-8">
              <Link href={"/"}>
              <div className="flex items-center gap-4 rounded-md  cursor-pointer hover:bg-slate-300/70 px-1 ">
                <Image
                  src={"/home.png"}
                  width={20}
                  height={20}
                  className="w-6 h-6 object-cover"
                  alt="icon"
                />

                <p  
                  className={`${
                    !open && "hidden"
                  } text-sm font-semibold text-black`}>Home</p>
              </div></Link>
              <div className="flex items-center gap-4 rounded-md  cursor-pointer hover:bg-slate-300/70 px-1 ">
                <Image
                  src={"/search.png"}
                  width={20}
                  height={20}
                  className="w-6 h-6 object-cover"
                  alt="icon"
                />

                <p  
                  className={`${
                    !open && "hidden"
                  } text-sm font-semibold text-black`}>Search</p>
              </div>
              <div className="flex items-center gap-4 rounded-md  cursor-pointer hover:bg-slate-300/70 px-1 ">
                <Image
                  src={"/direction.png"}
                  width={20}
                  height={20}
                  className="w-6 h-6 object-cover"
                  alt="icon"
                />

                <p  
                  className={`${
                    !open && "hidden"
                  } text-sm font-semibold text-black`}>Explore</p>
              </div>
              <div className="flex items-center gap-4 rounded-md  cursor-pointer hover:bg-slate-300/70 px-1 ">
                <Image
                  src={"/video.png"}
                  width={20}
                  height={20}
                  className="w-6 h-6 object-cover"
                  alt="icon"
                />

                <p  
                  className={`${
                    !open && "hidden"
                  } text-sm font-semibold text-black`}>Reels</p>
              </div>
              <div className="flex items-center gap-4 rounded-md  cursor-pointer hover:bg-slate-300/70 px-1 ">
                <Image
                  src={"/chat.png"}
                  width={20}
                  height={20}
                  className="w-6 h-6 object-cover"
                  alt="icon"
                />

                <p  
                  className={`${
                    !open && "hidden"
                  } text-sm font-semibold text-black`}>Messages</p>
              </div>
              <div
               onClick={toggleNotification}
              className=" ">
                <span  onClick={() => setOpen(!open)} className="flex items-center gap-4 rounded-md  cursor-pointer hover:bg-slate-300/70 px-1">
                <Image
                  src={"/heart.png"}
                  width={20}
                  height={20}
                  className={`w-6 h-6  ${
                    !open && ""
                  }`}
                 
                  alt="icon"
                />

                <p  
                  className={`${
                    !open && "hidden"
                  } text-sm font-semibold text-black`}>Notifications</p></span>
              </div>
              <div
              onClick={toggleCreate}
               className=" ">
                <span className="flex items-center gap-4 rounded-md  cursor-pointer hover:bg-slate-300/70 px-1">
                <Image
                  src={"/tab.png"}
                  width={20}
                  height={20}
                  className="w-6 h-6 object-cover"
                  alt="icon"
                />

                <p  
                  className={`${
                    !open && "hidden"
                  } text-sm font-semibold text-black`}>create</p></span>
              </div>
              <Link href={"profile"}>
                <div className="flex items-center gap-4 rounded-md  cursor-pointer hover:bg-slate-300/70 px-1 ">
                  <Image
                    src={"/1.png"}
                    width={20}
                    height={20}
                    className="w-7 h-7 object-cover rounded-full"
                    alt="icon"
                  />

                  <p  
                  className={`${
                    !open && "hidden"
                  } text-sm font-semibold text-black`}>Profile</p>
                </div>
              </Link>
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
        
      </div>
      {popupModalState && <PopupModal />}
      {notificationState && <Notification />}
      {createState && <Create onClose={toggleCreate} />}

    </>
  );
}
