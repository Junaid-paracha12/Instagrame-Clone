import Image from "next/image";

export default function PopupModal() {
  const popupAPI = [
    { icon: "/setting.png", title: "Setting" },
    { icon: "/activity.png", title: "Your activity" },
    { icon: "/bookmark.png", title: "Saved" },
    { icon: "/brightness.png", title: "Switch appearance" },
    { icon: "/problem.png", title: "Report a problem" },
  ];

  return (
    <>
      <div className=" h-[78vh] bg-white fixed bottom-12 overflow-y-scroll scroll-smooth scroll-hidden w-64 p-7">
        <div className="flex flex-col gap-4">
          {popupAPI.map((v, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-md  cursor-pointer hover:bg-slate-300/70 p-2"
            >
              <Image
                src={v.icon}
                width={20}
                height={20}
                className={`w-5 h-5 ${v.rounded ? "rounded-full" : ""}`}
                alt="icon"
              />
              <p className="text-sm font-semibold">{v.title}</p>
            </div>
          ))}
          <span className="mt-12 p-2 flex flex-col gap-7 items-start">
            <button className="text-sm font-semibold">Switch account</button>
            <button className="text-sm font-semibold">Log out</button>
          </span>
        </div>
      </div>
    </>
  );
}
