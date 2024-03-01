import Image from "next/image";

export default function Footer() {
  const footerAPI = [
    { icon: "/home.png" },
    { icon: "/direction.png" },
    { icon: "/video.png" },
    { icon: "/tab.png" },
    { icon: "/chat.png" },
    { icon: "/1.png", rounded: true },
  ];
  return (
    <>
      <div className="flex md:hidden fixed bottom-0 w-full bg-white h-12 py-1">
        <div className="flex items-center justify-between w-full px-5">
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
