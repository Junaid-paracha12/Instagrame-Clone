import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

export default function Home() {
  const homeAPI = {
    stories: [
      {
        img: "/1.png",
        title: "Your Story",
      },
      {
        img: "/2.png",
        title: "Jane",
      },
      {
        img: "/3.png",
        title: "Tom",
      },

      {
        img: "/4.png",
        title: "Lily",
      },

      {
        img: "/2.png",
        title: "Chloe",
      },
      {
        img: "/4.png",
        title: "Olivia",
      },
      {
        img: "/3.png",
        title: "Tommy",
      },
      {
        img: "/2.png",
        title: "Lily",
      },
    ],
    post: [
      {
        personimg: "/2.png",
        title: "Chloe Wilson",
        subtitle: "Orignal Pic",
        optionsrc: "/option.png",
        postimg: "/pic1.jpg",
        likeicon: "/heart.png",
        commenticon: "/comment.png",
        sendicon: "/send.png",
        saveicon: "/bookmark.png",
      },
      {
        personimg: "/3.png",
        title: "John Winson",
        subtitle: "Orignal Pic",
        optionsrc: "/option.png",
        postimg: "/pic2.jpg",
        likeicon: "/heart.png",
        commenticon: "/comment.png",
        sendicon: "/send.png",
        saveicon: "/bookmark.png",
      },
      {
        personimg: "/4.png",
        title: "Lily joy",
        subtitle: "Orignal Pic",
        optionsrc: "/option.png",
        postimg: "/pic3.jpg",
        likeicon: "/heart.png",
        commenticon: "/comment.png",
        sendicon: "/send.png",
        saveicon: "/bookmark.png",
      },
      {
        personimg: "/2.png",
        title: "Chloe Wilson",
        subtitle: "Orignal Pic",
        optionsrc: "/option.png",
        postimg: "/pic4.jpg",
        likeicon: "/heart.png",
        commenticon: "/comment.png",
        sendicon: "/send.png",
        saveicon: "/bookmark.png",
      },
      {
        personimg: "/3.png",
        title: "Tommy Versati",
        subtitle: "Orignal Pic",
        optionsrc: "/option.png",
        postimg: "/pic1.jpg",
        likeicon: "/heart.png",
        commenticon: "/comment.png",
        sendicon: "/send.png",
        saveicon: "/bookmark.png",
      },
      {
        personimg: "/4.png",
        title: "Joly Ana",
        subtitle: "Orignal Pic",
        optionsrc: "/option.png",
        postimg: "/pic3.jpg",
        likeicon: "/heart.png",
        commenticon: "/comment.png",
        sendicon: "/send.png",
        saveicon: "/bookmark.png",
      },
    ],
  };

  return (
    <>
      <div className="mt-9 md:mt-2 w-full px-0 md:px-9 ">
      <div className="w-full flex items-center lg:gap-5 px-2">
  <Splide
    options={{
      perPage: 9,
      perMove: 1,
      arrows: false,
      breakpoints: {
        991: {
          perPage: 7,
        },
        767: {
          perPage: 6,
        },
        551: {
          perPage: 4,
        },
      },
    }}
    className="mt-7 md:mt-5 w-full lg:w-[70%] my-4 z-10"
  >
    {homeAPI.stories.map((v, i) => (
      <SplideSlide key={i} className="">
        <Image
          src={v.img}
          width={200}
          height={200}
          className="w-16 h-16 md:w-14 md:h-14 rounded-full object-cover"
          alt="icon"
        />
        <p className="text-xs font-semibold py-2 px-1">{v.title}</p>
      </SplideSlide>
    ))}
  </Splide>
  <div className="hidden lg:flex items-center justify-between z-20">
    <span className="flex items-center gap-2">
      <Image
        src={"/1.png"}
        width={30}
        height={30}
        alt="img"
        className="w-9 h-9 rounded-full"
      />
      <span>
        <h1 className="text-lg font-semibold">John-221</h1>
        <p className="text-sm ">David John</p>
      </span>
    </span>
    <span className="absolute right-9">
      <button className="text-sky-500">Switch</button>
    </span>
  </div>
</div>

        <div
          className="w-full lg:w-[55%]
        px-0 md:px-14 flex flex-col gap-7 mt-0 md:mt-9"
        >
          {homeAPI.post.map((v, i) => (
            <div key={i}>
              <div className="flex items-center justify-between py-3 px-3 md:px-0">
                <span className="flex items-center gap-2">
                  <Image
                    src={v.personimg}
                    width={200}
                    height={200}
                    className="w-9 h-9 rounded-full object-cover"
                    alt="cion"
                  />
                  <span className="">
                    <h2 className="text-base font-semibold">
                      {v.title}
                      <p className="text-xs text-slate-500/80">{v.subtitle}</p>
                    </h2>
                  </span>
                </span>
                <span>
                  <Image
                    src={v.optionsrc}
                    width={20}
                    height={20}
                    className=""
                    alt="icon"
                  />
                </span>
              </div>
              <div>
                <Image
                  src={v.postimg}
                  width={2000}
                  alt="img"
                  height={2000}
                  className="w-full h-[50vh]"
                />
              </div>
              <div className="flex items-center justify-between py-3 px-3 md:px-0">
                <span className="flex items-center gap-3">
                  <Image
                    src={v.likeicon}
                    width={20}
                    height={20}
                    className="cursor-pointer"
                    alt="icon"
                  />
                  <Image
                    src={v.commenticon}
                    width={20}
                    height={20}
                    className="cursor-pointer"
                    alt="icon"
                  />
                  <Image
                    src={v.sendicon}
                    width={20}
                    height={20}
                    className="cursor-pointer"
                    alt="icon"
                  />
                </span>
                <span>
                  <Image
                    src={v.saveicon}
                    width={20}
                    height={20}
                    className="cursor-pointer"
                    alt="icon"
                  />
                </span>
              </div>
              <div className="px-3 md:px-0">
                <p className="text-slate-700/90 pb-3">444 likes</p>
                <p className="text-blue-600 py-2">
                  #viralphoto,#trendingphoto,#topphoto
                </p>
                <p className="text-slate-700/90 cursor-pointer">
                  view all 333 comments
                </p>
              </div>
              <div className="relative px-3 md:px-0">
                <input
                  placeholder="Add a comment..."
                  type="text"
                  className="w-full py-1 placeholder:text-sm border focus:border-hidden focus:outline-none"
                />

                <span className="absolute right-2 top-3">
                  <Image
                    src={"/smile.png"}
                    width={20}
                    height={20}
                    className="w-3 h-3"
                    alt="icon"
                  />
                </span>
                
              </div>
              <div className="h-0.5 bg-slate-300/60 "></div>
            </div>
          ))}
          <div className="my-4">
            <div className="flex items-center justify-between py-3 px-3 md:px-0 ">
              <span className="flex items-center gap-2">
                <Image
                  src={"/1.png"}
                  width={200}
                  height={200}
                  className="w-9 h-9 rounded-full"
                  alt="cion"
                />
                <span className="">
                  <h2 className="text-base font-semibold">
                    John Doe
                    <p className="text-xs text-slate-500/80"></p>
                  </h2>
                </span>
              </span>
              <span>
                <Image
                  src={"/option.png"}
                  width={20}
                  height={20}
                  className=""
                  alt="icon"
                />
              </span>
            </div>
            <div className="h-[50vh] border-slate-500 flex items-center justify-center bg-slate-300/60 rounded-md flex-col">
              <Image
                src={"/calendar.png"}
                width={50}
                height={50}
                className="w-8 h-8"
              />
              <h1 className="text-2xl font-semibold ">
                Born on 1 Octobar 1999
              </h1>
            </div>
            <div className="flex items-center justify-between py-3 px-3 md:px-0">
              <span className="flex items-center gap-3">
                <Image
                  src={"/heart.png"}
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  alt="icon"
                />
                <Image
                  src={"/comment.png"}
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  alt="icon"
                />
                <Image
                  src={"/send.png"}
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  alt="icon"
                />
              </span>
              <span>
                <Image
                  src={"/bookmark.png"}
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  alt="icon"
                />
              </span>
            </div>

            <div className="relative px-3 md:px-0">
              <input
                placeholder="Add a comment..."
                type="text"
                className="w-full py-1 placeholder:text-sm border focus:border-hidden focus:outline-none"
              />

              <span className="absolute right-2 top-3">
                <Image
                  src={"/smile.png"}
                  width={20}
                  height={20}
                  className="w-3 h-3"
                  alt="icon"
                />
              </span>
            </div>
            <div className="h-0.5 bg-slate-300/60 "></div>
          </div>
        </div>
      </div>
    </>
  );
}
