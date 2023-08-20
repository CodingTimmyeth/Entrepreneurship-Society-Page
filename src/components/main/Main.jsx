import React from "react";
import ClubEvents from "./ClubEvents";
import NewData from "./NewData";
import StudentBus from "./StudentBus";

const Main = () => {
  return (
    <main className="flex flex-col justify-center text-center text-PrimaryColor Tablet:items-center">
      <div
        className="mb-14 Tablet:flex Tablet:items-center Tablet:justify-center Tablet:mt-5"
        id="About"
      >
        <div className="Tablet:w-[65%]">
          <h1 className="font-semibold text-3xl mb-3 leading-9 px-1 Tablet:px-10 MiniPC:text-4xl MiniPC:mb-5">
            The Lifestyle Of Living Your Dreams
          </h1>
          <p className="font-medium leading-6  mb-10 text-lg MiniPC:px-5">
            With its diverse list of members, business owners and practical
            resources the Entrepreneurship Society is the perfect place for your
            entrepreneurial goals!
          </p>
          <div className="w-full ">
            <a
              href="https://csusm.presence.io/organization/entrepreneurship-society"
              className="bg-PrimaryColor w-fit px-6 py-4 rounded-sm text-white"
              target="_blank"
            >
              Join the Family!
            </a>
          </div>
        </div>
      </div>
      <ClubEvents />
      <NewData />
      <StudentBus />
    </main>
  );
};

export default Main;
