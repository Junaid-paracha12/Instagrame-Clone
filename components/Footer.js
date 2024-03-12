import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Create from "./Create";

export default function Footer() {
  const[createState,setCreateState] =useState(false);

   const toggleCreate = () =>{
    setCreateState(!createState);
   };

  return (
    <>
      <div className="flex md:hidden fixed bottom-0 w-full bg-white h-12 py-1 z-50">
        <div className="flex items-center justify-between w-full px-4">
          <Link href={"/"}>
          <Image src={"/home.png"} width={20} height={20} className="w-6 h-6" alt="icon" /></Link>
          <Image src={"/search.png"} width={20} height={20} className="w-6 h-6" alt="icon" />
          <Image onClick={toggleCreate} src={"/tab.png"} width={20} height={20} className="w-6 h-6" alt="icon" />
          <Image src={"/video.png"} width={20} height={20} className="w-6 h-6" alt="icon" />
          <Image src={"/1.png"} width={20} height={20} className="w-7 h-7 rounded-full" alt="icon" />
          
        </div>
      </div>
      {createState && <Create onClose={toggleCreate} />}
    </>
  );
};
