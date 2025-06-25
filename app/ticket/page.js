"use client";

import React from "react";
import Image from "next/image";
import { images } from "../helpers";
import { useSearchParams } from "next/navigation";

const TicketPage = () => {
  const searchParams = useSearchParams();

  const fullName = searchParams.get("fullName");
  const email = searchParams.get("email");
  const githubUsername = searchParams.get("githubUsername");

  return (
    <div>
      <div className="bg-[url('/images/background-desktop.png')] bg-cover bg-no-repeat bg-center text-white w-[100vw] h-[100vh] flex flex-col items-center justify-center p-5 pt-14">
        <Image
          src={images.logo}
          alt="logo"
          height={50}
          width={150}
          className="mb-8"
        />
        <div className="pl-4 pr-4 text-center">
          <h1 className="text-2xl  font-bold mb-4">
            Congrats {fullName} Your ticket is ready.
          </h1>
          <p>
            We have emailed your ticket to {email} and will send updates in the
            run up to the event.
          </p>
        </div>
        <div className="bg-[url('/images/pattern-ticket.svg')] bg-contain bg-no-repeat bg-center w-[300px] h-[150px] mt-6 pt-6 pl-4">
          <div>
            {" "}
            <Image
              src={images.logo}
              alt="logo"
              height={50}
              width={150}
              className="mb-1"
            />
            <p className="text-[12px] ml-9">Jan 31, 2025 / Austin, TX</p>
          </div>
          <div className="flex mt-4 flex-row items-center">
            {" "}
            <Image
              src={images.avatar}
              alt="logo"
              height={50}
              width={50}
              className="mb-1 rounded-sm"
            />
            <div>
              <h4 className="text-[12px] ml-3">{fullName}</h4>
              <div className="text-[12px] ml-3 flex items-center">
                <Image
                  src={images.githubIcon}
                  alt="logo"
                  height={20}
                  width={20}
                  className="mt-1 rounded-sm"
                />
                <h4>{githubUsername}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
