import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const HeaderMenu = () => {
  const menuItems = [
    "About",
    "Student Business",
    "Blogs",
    "Meet the Team",
    "Join!",
  ];

  const handleMenuItem = (item) => {
    const section = document.getElementById(item);
    console.log(item);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="border border-black rounded-md w-[350px] absolute top-24 z-10 bg-white Desktop:hidden">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => handleMenuItem(item)}
        >
          <h3>{item}</h3>
          <FiArrowUpRight />
        </div>
      ))}
      <div className="flex justify-center w-full">
        <img
          src="/public/Logo.png"
          alt="CSUSM Entrepreneurship Society Logo"
          className="w-[55px]"
        />
      </div>
    </section>
  );
};

export default HeaderMenu;
