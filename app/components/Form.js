"use client";

import { useState } from "react";
import UploadAvatar from "./UploadAvatar";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    githubUsername: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams({
      fullName: formData.fullName,
      email: formData.email,
      githubUsername: formData.githubUsername,
    }).toString();

    router.push(`./ticket?${queryParams}`);
  };

  return (
    <form
      className="w-full mt-7 md:w-[500px] lg:w-[500px]"
      onSubmit={handleSubmit}
    >
      <UploadAvatar onImageChange={handleImageChange} image={formData.image} />
      <label htmlFor="fullName">Full Name</label>
      <input
        name="fullName"
        id="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
        className="w-full h-[50px] bg-gray-100/20 rounded-xl mt-2 mb-5 border-1 border-gray-200/50"
      />
      <label htmlFor="fullName">Email Address</label>
      <input
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full h-[50px] bg-gray-100/20 rounded-xl mt-2 mb-5 border-1 border-gray-200/50"
      />
      <label htmlFor="githubUsername">Github Username</label>
      <input
        name="githubUsername"
        id="githubUsername"
        value={formData.githubUsername}
        onChange={handleChange}
        required
        className="w-full h-[50px] bg-gray-100/20 rounded-xl mt-2 mb-5 border-1 border-gray-200/50"
      />

      <button
        type="submit"
        className="text-center w-full h-[50px] mb-16 mt-6 bg-amber-600 rounded-xl cursor-pointer"
      >
        Generate My Ticket
      </button>
    </form>
  );
};

export default Form;
