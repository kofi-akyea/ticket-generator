import React, { Suspense } from "react";
import Image from "next/image";
import { images } from "../helpers";
import TicketContent from "../components/TicketContent";

export default function TicketPageWrapper() {
  return (
    <div className="bg-[url('/images/background-desktop.png')] bg-cover bg-no-repeat bg-center text-white w-[100vw] h-[100vh] flex flex-col items-center justify-center p-5 pt-14">
      <Image
        src={images.logo}
        alt="logo"
        height={50}
        width={150}
        className="mb-8"
      />

      <Suspense
        fallback={
          <div className="text-center text-xl text-gray-400">
            Loading your ticket details...
            <div className="mt-4 animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400 mx-auto"></div>
          </div>
        }
      >
        <TicketContent />
      </Suspense>
    </div>
  );
}
