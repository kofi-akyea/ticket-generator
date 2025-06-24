import React from "react";

const Form = () => {
  return (
    <form className="w-full mt-7">
      <label htmlFor="fullName">Full Name</label>
      <input
        name="fullName"
        id="fullName"
        className="w-full h-[50px] bg-gray-100/20 rounded-xl mt-2 mb-5 border-1 border-gray-200/50"
      />
      <label htmlFor="fullName">Email Address</label>
      <input
        name="email"
        id="email"
        className="w-full h-[50px] bg-gray-100/20 rounded-xl mt-2 mb-5 border-1 border-gray-200/50"
      />
      <label htmlFor="githubUsername">Github Username</label>
      <input
        name="githubUsername"
        id="githubUsername"
        className="w-full h-[50px] bg-gray-100/20 rounded-xl mt-2 mb-5 border-1 border-gray-200/50"
      />

      <button className="text-center w-full h-[50px] mb-16 mt-6 bg-amber-600 rounded-xl">
        Generate My Ticket
      </button>
    </form>
  );
};

export default Form;
