import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerAPI = [
    { icon: "/home.png" },
    { icon: "/search.png" },
    { icon: "/tab.png" },
    { icon: "/video.png" },
    { icon: "/1.png", rounded: true },
  ];
  return (
    <>
      <div className="flex md:hidden fixed bottom-0 w-full bg-white h-12 py-1">
        <div className="flex items-center justify-between w-full px-4">
          <Link href={"/"}>
          <Image src={"/home.png"} width={20} height={20} className="w-6 h-6" alt="icon" /></Link>
          <Image src={"/search.png"} width={20} height={20} className="w-6 h-6" alt="icon" />
          <Image src={"/tab.png"} width={20} height={20} className="w-6 h-6" alt="icon" />
          <Image src={"/video.png"} width={20} height={20} className="w-6 h-6" alt="icon" />
          <Image src={"/1.png"} width={20} height={20} className="w-6 h-6" alt="icon" />
          {/* {footerAPI.map((v, i) => (
            <div key={i} className="">
              <Image
                src={v.icon}
                width={20}
                height={20}
                className={`w-6 h-6 stroke-black ${
                  v.rounded ? "rounded-full" : ""
                }`}
                alt="icon"
              />
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
}
