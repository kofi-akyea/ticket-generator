import React from "react";
import Image from "next/image";
import { images } from "../helpers";

const ticketpage = () => {
  return (
    <div>
      <div className="bg-black text-white w-[100vw] h-auto flex flex-col items-center justify-center p-5 pt-14">
        <Image
          src={images.logo}
          alt="logo"
          height={50}
          width={150}
          className="mb-8"
        />
        <div className="pl-4 pr-4 text-center">
          <h1 className="text-2xl  font-bold mb-4">
            Congrats Jonatan Kristov! Your ticket is ready.
          </h1>
          <p>Secure your spot at next years biggest coding conference</p>
        </div>
      </div>
    </div>
  );
};

export default ticketpage;
