import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <ul className="flex gap-8 text-lg">
      <li className="p-2 border bg-black rounded-full">
        <a href="/">
          <BsInstagram className="text-white" />
        </a>
      </li>
      <li className="p-2 border bg-black rounded-full">
        <a href="/">
          <BiLogoFacebook className="text-white" />
        </a>
      </li>
      <li className="p-2 border bg-black rounded-full">
        <a href="/">
          <BiLogoLinkedin className="text-white" />
        </a>
      </li>
      <li className="p-2 border bg-black rounded-full">
        <a href="/">
          <BsTwitter className="text-white" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
