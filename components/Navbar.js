import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between w-full md:hidden absolute bg-white h-14 top-0 ">
        <ul className="flex items-center justify-between px-3 w-full">
          <li>
            <Link href={"/"}>
              {" "}
              <Image
                src={"/insta.png"}
                width={100}
                height={20}
                className=" w-32 h-12 object-cover"
                alt="logo"
              />{" "}
            </Link>
          </li>
          {/* <li className="relative ">
            <input
              type="search"
              placeholder="Search"
              className="px-8 py-1 max-w-32"
            />
            <span className="absolute top-1.5 left-2">
              <Image
                src={"/search.png"}
                width={20}
                height={20}
                alt="icon"
                className="w-5 h-5"
              />
            </span>
          </li> */}
          <li className="flex items-center gap-2">
            <span>
              <Image
                src={"/heart.png"}
                width={20}
                height={20}
                className="w-6 h-6"
                alt="icon"
              />

            </span>
            <span>
              <Image
                src={"/chat.png"}
                width={20}
                height={20}
                className="w-6 h-6"
                alt="icon"
              />
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
