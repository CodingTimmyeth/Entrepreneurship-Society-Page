import React from "react";

const NewData = () => {
  return (
    <section
      className="text-white bg-PrimaryColor rounded-xl py-10 mb-16 Tablet:w-[82%] MiniPC:w-[500px]"
      id="Join!"
    >
      <div className="flex flex-col MiniPC:text-xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">100 Million</h1>
          <p className="mb-10">New businesses every year</p>
          <div className="w-full flex justify-center items-center">
            <div className="border border-white w-[56px]"></div>
          </div>
        </div>
        <div className="mb-10">
          <h1 className="text-4xl font-bold">99.9% </h1>
          <p className="mb-10">Of businesses are small business</p>
          <div className="w-full flex justify-center items-center">
            <div className="border border-white w-[56px]"></div>
          </div>
        </div>
        <div className="mb-0">
          <h1 className="text-4xl font-bold mb-2">305 Million</h1>
          <p className="px-11">
            people are starting or running a new businesses worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewData;
