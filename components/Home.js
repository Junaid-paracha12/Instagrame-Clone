import React from "react";

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
      <div className="mt-12 w-full px-9 ">
        <div className="w-full flex items-center gap-5">
          <Splide
            options={{
              perPage: 6,
              perMove: 1,
              pagination: false,

              gap: "1rem",
              arrows: false,
              breakpoints: {
                991: {
                  perPage: 5,
                  gap: "1rem",
                },
                767: {
                  perPage: 4,
                  gap: "1rem",
                },
                551: {
                  perPage: 3,
                  gap: "1rem",
                },
              },
            }}
            className="mt-5 w-full lg:w-[70%] px-"
          >
            {homeAPI.stories.map((v, i) => (
              <SplideSlide key={i} className="">
                <Image
                  src={v.img}
                  width={200}
                  height={200}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <p className="text-sm font-semibold">{v.title}</p>
              </SplideSlide>
            ))}
          </Splide>
          <div className="hidden lg:flex items-center justify-between ">
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
        px-0 md:px-14 flex flex-col gap-7 mt-9"
        >
          {homeAPI.post.map((v, i) => (
            <div key={i}>
              <div className="flex items-center justify-between py-3">
                <span className="flex items-center gap-2">
                  <Image
                    src={v.personimg}
                    width={20}
                    height={20}
                    className="w-7 h-7 rounded-full"
                  />
                  <span className="">
                    <h2 className="text-lg font-semibold">
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
              <div className="flex items-center justify-between py-3">
                <span className="flex items-center gap-3">
                  <Image src={v.likeicon} width={20} height={20} className="" />
                  <Image
                    src={v.commenticon}
                    width={20}
                    height={20}
                    className=""
                  />
                  <Image src={v.sendicon} width={20} height={20} className="" />
                </span>
                <span>
                  <Image src={v.saveicon} width={20} height={20} className="" />
                </span>
              </div>
              <input
                placeholder="Add a comment..."
                type="text"
                className="w-full px-2 py-1"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}