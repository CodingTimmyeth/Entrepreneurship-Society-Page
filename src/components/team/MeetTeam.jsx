import React from "react";
import { BsPersonBoundingBox } from "react-icons/bs";

const MeetTeam = () => {
  const teamMembers = [
    {
      id: 1,
      image: "",
      name: "Domingo Miguel",
      title: "Chief Executive Officer (CEO)",
      description:
        "Being in the e-commerce and retail business for the past fives years. Started a marketing agency with my brothers. I have learned what it takes to be an entrepreneur. I enjoy running in my freetime.",
    },
    {
      id: 2,
      image: "",
      name: "Domingo Miguel",
      title: "Chief Executive Officer (CEO)",
      description:
        "Being in the e-commerce and retail business for the past fives years. Started a marketing agency with my brothers. I have learned what it takes to be an entrepreneur. I enjoy running in my freetime.",
    },
    {
      id: 3,
      image: "",
      name: "Domingo Miguel",
      title: "Chief Executive Officer (CEO)",
      description:
        "Being in the e-commerce and retail business for the past fives years. Started a marketing agency with my brothers. I have learned what it takes to be an entrepreneur. I enjoy running in my freetime.",
    },
    {
      id: 4,
      image: "",
      name: "Domingo Miguel",
      title: "Chief Executive Officer (CEO)",
      description:
        "Being in the e-commerce and retail business for the past fives years. Started a marketing agency with my brothers. I have learned what it takes to be an entrepreneur. I enjoy running in my freetime.",
    },
  ];
  return (
    <section className="text-center text-PrimaryColor mb-16" id="Meet the Team">
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-3">Meet the Team!</h1>
        <p className="text-[15px] leading-8">
          Get to know the dedicated individuals behind the Entrepreneurship
          Society
        </p>
      </div>
      {teamMembers.map((person) => (
        <div
          className="flex flex-col items-center justify-center py-4 mb-10"
          key={person.id}
        >
          <BsPersonBoundingBox className="text-3xl mb-5" />
          <h1 className="font-bold text-xl">{person.name}</h1>
          <h3 className="mb-4">{person.title}</h3>
          <p>{person.description}</p>
        </div>
      ))}
    </section>
  );
};

export default MeetTeam;
