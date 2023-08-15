import React from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const [menu, setMenu] = useState(true);

  const handleMenuClick = () => {
    setMenu(!menu);
  };

  return (
    <header className="flex flex-col justify-between items-center mb-8  IPad:items-stretch">
      <section className="flex justify-between items-center mb-4">
        <h1 className="text-l text-PrimaryColor font-bold pr-5">
          CSUSM Entrepreneurship Society
        </h1>
        <div className="flex items-center gap-4">
          <p className="text-PrimaryColor text-md">Menu</p>
          <RiMenu4Fill
            className="font-bold text-2xl cursor-pointer"
            onClick={handleMenuClick}
          />
        </div>
      </section>
      {menu ? "" : <HeaderMenu />}
    </header>
  );
};

export default Header;
