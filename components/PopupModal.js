import Image from 'next/image'
import React from 'react'

export default function PopupModal() {
  return (
    <>
    <div className=" h-[100vh] fixed top-0 overflow-y-scroll scroll-smooth scroll-hidden border-r-2 border-black w-52">
    <div  className='flex items-center gap-4 rounded-md  cursor-pointer hover:bg-slate-300/70 p-2'>
               <Image src={"/menu.png"} width={20} height={20} className="w-5 h-5 " />
                    <p className='text-sm font-semibold'>More</p>
               </div>
    </div>
    </>
  )
}
