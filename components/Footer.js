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
        <div className="flex items-center justify-between w-full px-2">
          {footerAPI.map((v, i) => (
            <div key={i} className="">
              <Image
                src={v.icon}
                width={20}
                height={20}
                className={`w-5 h-5 ${v.rounded ? "rounded-full" : ""}`}
              />
            </div>
          ))}
        
        </div>
      </div>
    </>
  );
}
