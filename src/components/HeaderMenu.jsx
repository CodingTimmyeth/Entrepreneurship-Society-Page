import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const HeaderMenu = () => {
  const menuItems = [
    "About",
    "Student Busines",
    "Blogs",
    "Meet the Team",
    "Join!",
  ];
  return (
    <section className="border border-black rounded-md w-[95%] py-3">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-4 cursor-pointer"
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
