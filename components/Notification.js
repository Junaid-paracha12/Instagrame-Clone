import Image from "next/image";

export default function() {
    return (
        <>
        <div className="fixed top-12 md:top-0 right-5 md:left-24 bg-white-300 overflow-y-scroll scroll-smooth h-full w-96 bg-white"> 
            <div className="py-7 px-3">
               <h1 className="text-2xl font-semibold">
                Notifications
               </h1>
               <p className="font-semibold py-4">Today</p>
               <div className="flex flex-col gap-4">
               <div className="flex items-center justify-between">
                <span className="flex items-center w-full gap-2">
                    <Image src={"/2.png"} width={200} height={300} alt="img" className="w-10 h-10 rounded-full" />
                    <span className="">
                        <h1 className="text-base font-semibold">Jane Widson</h1>
                        <p className="text-xs">Start Folling you.</p>
                    </span>
                </span>
                <span>
                    <button className="bg-sky-500 px-4 py-1 rounded-md text-white font-semibold">
                        Follow
                    </button>
                </span>
               </div>
               <div className="flex items-center justify-between">
                <span className="flex items-center w-full gap-2">
                    <Image src={"/3.png"} width={200} height={300} alt="img" className="w-10 h-10 rounded-full" />
                    <span className="">
                        <h1 className="text-base font-semibold">Jammy wala</h1>
                        <p className="text-xs">Start Folling you.</p>
                    </span>
                </span>
                <span>
                    <button className="bg-sky-500 px-4 py-1 rounded-md text-white font-semibold">
                        Follow
                    </button>
                </span>
               </div>
               </div>
            </div>
        </div>
        </>
    );
}