import React from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const [menu, setMenu] = useState(true);

  const handleMenuClick = () => {
    setMenu(!menu);
  };

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
    <header className="flex flex-col justify-between items-center mb-8  IPad:items-stretch">
      <section className="flex justify-between items-center mb-4">
        <h1 className="text-l text-PrimaryColor font-bold pr-5">
          CSUSM Entrepreneurship Society
        </h1>
        <div className="flex items-center gap-4 Desktop:hidden">
          <p className="text-PrimaryColor text-md">Menu</p>
          <RiMenu4Fill
            className="font-bold text-2xl cursor-pointer"
            onClick={handleMenuClick}
          />
        </div>
        <section className="hidden Desktop:flex Desktop:items-center Desktop:w-[70%] Desktop:justify-around">
          <nav>
            <ul className="flex items-center gap-8 text-xs text-PrimaryColor">
              <div className="flex items-center justify-around w-[80px] cursor-pointer">
                <li onClick={() => handleMenuItem("About")}>About</li>
                <div>/</div>
              </div>
              <div
                className="flex items-center justify-around w-[150px] cursor-pointer"
                onClick={() => handleMenuItem("Student Business")}
              >
                <li>Student Business</li>
                <div>/</div>
              </div>
              <div
                className="flex items-center justify-around w-[75px] cursor-pointer"
                onClick={() => handleMenuItem("Blogs")}
              >
                <li>Blogs</li>
                <div>/</div>
              </div>
              <li
                className="cursor-pointer"
                onClick={() => handleMenuItem("Meet the Team")}
              >
                Meet The Team
              </li>
            </ul>
          </nav>
          <button className="bg-PrimaryColor w-fit px-6 py-2 text-white rounded-md">
            Join Us!
          </button>
        </section>
      </section>
      {menu ? "" : <HeaderMenu />}
    </header>
  );
};

export default Header;
