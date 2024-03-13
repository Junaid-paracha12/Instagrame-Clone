import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function() {
    return (
        <>
        <Navbar />
        <Sidebar />
        <Footer />
        <div className="md:ml-64 py-8 px-5 md:px-20 my-9">
           <div className="flex flex-row gap-5 md:gap-8">
            <span>
            <Image src={"/1.png"} width={200} height={200} className="rounded-full w-20 h-20 md:w-28 md:h-28"/>
            </span>
            <div className="md:ml-9">
                <span className="flex flex-col lg:flex-row gap-2">
                <h1 className="text-lg md:text-xl font-semibold">John Doe</h1>
                <span className="flex items-center gap-2 md:ml-4">
                <button className="bg-slate-300/70 px-3 py-1 rounded-lg  text-xs md:text-base font-semibold">Edit profile</button>
                <button className="bg-slate-300/70 px-3 py-1 rounded-lg text-xs md:text-base font-semibold">view archieve</button>
                <Image src={"/setting.png"} width={20} height={20}/>
                </span></span>
                <span className="flex items-center gap-7 py-4">
                    <p className="text-xs md:text-base font-semibold">4 posts</p>
                    <p className="text-xs md:text-base font-semibold">0 followers</p>
                    <p className="text-xs md:text-base font-semibold"> 0 following</p>
                </span>
                <span>
                    <p className="text-xs md:text-base font-semibold">John Doe</p>
                    <p className="text-xs md:text-base font-semibold">#Mister</p>
                </span>
            </div>
           </div>
           <div className="mt-9">
            <span className="">
            <Image src={"/plus.png"} width={200} height={300} alt="icon" className="h-10 w-10 md:h-14 md:w-14 bg-slate-300/60 p-3 rounded-full" />
            </span>
            <p className="text-sm md:text-base font-semibold p-2">New</p>
           </div>
           <div className="h-0.5 bg-slate-300/70 mt-24"></div>
           <div className="flex items-center justify-center gap-9 py-5">
            <span className="flex items-center gap-1">
            <Image src={"/bookmark.png"} width={20} height={50} className="w-4 h-4" />
             <p className="font-semibold">Post</p></span>
             <span className="flex items-center gap-1">
                <Image src={"/bookmark.png"} width={20} height={50} className="w-4 h-4" />
             <p className="font-semibold">Saved</p></span>
            <span className="flex items-center gap-1">
            <Image src={"/man.png"} width={20} height={50} className="w-5 h-5" />
                 <p className="font-semibold">Taged</p></span>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Image src={"/pic1.jpg"} width={3000} height={3000} className="h-[40vh] w-full" />
            <Image src={"/pic1.jpg"} width={3000} height={3000} className="h-[40vh] w-full" />
            <Image src={"/pic1.jpg"} width={3000} height={3000} className="h-[40vh] w-full" />
            <Image src={"/pic1.jpg"} width={3000} height={3000} className="h-[40vh] w-full" />
           </div>
        </div>
        </>
    );
}