import Image from "next/image";
import React from "react";

export default function Create ({ onClose }){
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Do something with the selected file
    console.log("Selected file:", file);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <Image
        onClick={onClose}
        src={"/close.png"}
        width={30}
        height={40}
        className="absolute top-4 right-4 w-5 h-5 cursor-pointer"
        alt="icon"
      />

      <div className="bg-white px-10 md:px-20 py-4 rounded-lg relative text-center h-[65vh]">
        <h2 className="text-sm md:text-base font-semibold mb-4">
          Create new post
        </h2>
        <div className="flex flex-col gap-5 mt-20">
          <span className="flex justify-center">
            <Image
              src={"/create.png"}
              width={300}
              height={300}
              alt="icon"
              className="w-20 h-20"
            />
          </span>
          <h2 className="text-sm md:text-xl font-semibold">
            Drag photo and video here
          </h2>
          <span>
          <label
            htmlFor="fileInput"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer text-center text-xs md:text-sm w-auto"
          >
            Select from Computer
          </label>
          </span>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
};


