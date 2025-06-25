"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { images } from "../helpers";

const TicketContent = () => {
  const searchParams = useSearchParams();

  const fullName = searchParams.get("fullName");
  const email = searchParams.get("email");
  const githubUsername = searchParams.get("githubUsername");
  const imageUrl = searchParams.get("imageUrl");

  return (
    <>
      <div className="pl-4 pr-4 text-center flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 lg:text-5xl lg:w-[700px]">
          Congrats {fullName} Your ticket is ready.
        </h1>
        <p className="lg:w-[500px]">
          We have emailed your ticket to {email} and will send updates in the
          run up to the event.
        </p>
      </div>
      <div className="bg-[url('/images/pattern-ticket.svg')] bg-contain bg-no-repeat bg-center w-[300px] h-[150px] mt-6 pt-6 pl-4 lg:w-[500px] lg:h-[250px]">
        <div>
          <Image
            src={images.logo}
            alt="logo"
            height={150}
            width={300}
            className="mb-1"
          />
          <p className="text-[12px] ml-9 lg:ml-17 lg:text-[18px]">
            Jan 31, 2025 / Austin, TX
          </p>
        </div>
        <div className="flex mt-4 flex-row items-center">
          {/* Use imageUrl if available, otherwise fallback to default avatar */}
          <Image
            src={imageUrl || images.avatar} // Use imageUrl if it exists, otherwise use the default images.avatar
            alt="User Avatar"
            height={100}
            width={100}
            className="mb-1 rounded-sm"
          />
          <div>
            <h4 className="text-[12px] ml-3 lg:text-[20px]">{fullName}</h4>
            <div className="text-[12px] ml-3 flex items-center">
              <Image
                src={images.githubIcon}
                alt="GitHub icon"
                height={30}
                width={30}
                className="mt-1 rounded-sm"
              />
              <h4 className="lg:text-[18px]">{githubUsername}</h4>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.print()}
        className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl"
      >
        Print Ticket
      </button>
    </>
  );
};

export default TicketContent;
