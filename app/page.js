import Image from "next/image";
import { images } from "./helpers";
import UploadAvatar from "./components/UploadAvatar";
import Form from "./components/Form";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white w-[100vw] h-[100vh] flex flex-col items-center justify-center p-5">
        <Image
          src={images.logo}
          alt="logo"
          height={50}
          width={150}
          className="mb-8"
        />
        <div className="pl-4 pr-4 text-center">
          <h1 className="text-2xl  font-bold mb-4">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
          <p>Secure your spot at next years biggest coding conference</p>
        </div>

        {/* Image component */}
        <UploadAvatar />

        {/* Form component */}
        <Form />
      </div>
    </>
  );
}
