import React from "react";
import ClubEvents from "./ClubEvents";
import NewData from "./NewData";
import StudentBus from "./StudentBus";

const Main = () => {
  return (
    <main className="flex flex-col justify-center text-center text-PrimaryColor">
      <div className="mb-14">
        <h1 className="font-semibold text-3xl mb-3 leading-9 px-1">
          The Lifestyle Of Living Your Dreams
        </h1>
        <p className="font-medium leading-6 px- mb-10 text-lg">
          With its diverse list of members, business owners and practical
          resources the Entrepreneurship Society is the perfect place for your
          entrepreneurial goals!
        </p>
        <div className="w-full ">
          <button className="bg-PrimaryColor w-fit px-6 py-4 rounded-sm text-white">
            Join the Family!
          </button>
        </div>
      </div>
      <ClubEvents />
      <NewData />
      <StudentBus />
    </main>
  );
};

export default Main;
