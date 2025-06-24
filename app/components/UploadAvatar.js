import React from "react";
import Image from "next/image";
import { images } from "../helpers";

const UploadAvatar = () => {
  return (
    <div className="text-left w-full mt-10">
      <p>Upload Avatar</p>
      <div className="bg-gray-400/30 w-full h-[150px] border-1 border-dashed rounded-2xl mt-3.5 flex flex-col items-center justify-center">
        <Image
          src={images.uploadIcon}
          alt="upload icon"
          width={55}
          height={55}
          className="p-2.5 border-1 rounded-xl border-solid border-gray-500 mb-2 bg-gray-200/30 shadow-lg"
        />
        <p>Drag and drop or click to upload</p>
      </div>
      <div className="flex mt-3">
        <Image
          src={images.infoIcon}
          alt="info icon"
          width={15}
          height={15}
          className="mr-1.5"
        />{" "}
        <p className="text-[10px]">
          Upload your photo (JPG or PNG, max size: 5MB).
        </p>
      </div>
    </div>
  );
};

export default UploadAvatar;
