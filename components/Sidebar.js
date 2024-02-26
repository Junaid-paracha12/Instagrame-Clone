import Image from 'next/image';
import React, { useState } from 'react'
import Home from './Home';
import Link from 'next/link';
import PopupModal from './PopupModal';

export default function Sidebar() {
    const [popupModalState, setPopupModalState] = useState(false);
    const toggleModal = () => {
        setPopupModalState(!popupModalState);
        console.log("Popup modal state:", !popupModalState);
    };

    const sidebarAPI = [
        { title: "Home", icon: "/home.png" },
        { title: "Search", icon: "/search.png"},
        { title: "Explore", icon: "/direction.png" },
        { title: "Reels", icon: "/video.png" },
        { title: "Messages", icon: "/chat.png" },
        { title: "Notifications", icon: "/heart.png" },
        { title: "create", icon: "/tab.png" },
        { title: "Profile", icon: "/1.png", rounded: true },
        
      ];

  return (
    <>
    <div className='w-full'>
    <div className=' h-[100vh] fixed overflow-y-scroll scroll-smooth scroll-hidden border-r-2 border-black'>
        <div className='py-6 w-52 px-6 flex flex-col gap-6'>
            
        <Link href={"/"}>   <Image  src={"/insta.png"} width={100} height={20} className='w-26 h-9' /></Link>
          
            <div className='flex flex-col gap-6'>
                {sidebarAPI.map((v,i) =>(
                    <div key={i} className='flex items-center gap-4 rounded-md  cursor-pointer hover:bg-slate-300/70 p-2'>
                     <Image src={v.icon} width={20} height={20} className={`w-5 h-5 ${v.rounded ? 'rounded-full' : ''}`} />
                     <p className='text-sm font-semibold'>{v.title}</p>
                    </div>
                ))}
                <div onClick={toggleModal} className='flex items-center gap-4 rounded-md  cursor-pointer hover:bg-slate-300/70 p-2'>
                <Image src={"/menu.png"} width={20} height={20} className="w-5 h-5 " />
                     <p className='text-sm font-semibold'>More</p>
                </div>
            </div>
            </div>
         
    </div>
    <div className='ml-52'>
   <Home />
   </div>
    </div>
    {popupModalState && <PopupModal />}
    </>
  )
}
