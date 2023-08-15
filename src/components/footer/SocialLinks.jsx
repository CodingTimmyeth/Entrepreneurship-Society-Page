import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <ul className="flex gap-8 text-lg">
      <li className="p-2 border bg-black rounded-full">
        <a
          href="https://www.instagram.com/csusmentrepreneurshipsociety/"
          target="_blank"
        >
          <BsInstagram className="text-white" />
        </a>
      </li>
      <li className="p-2 border bg-black rounded-full">
        <a
          href="https://www.facebook.com/CSUSMEntrepreneurshipSociety"
          target="_blank"
        >
          <BiLogoFacebook className="text-white" />
        </a>
      </li>
      <li className="p-2 border bg-black rounded-full">
        <a
          href="https://www.linkedin.com/company/csusm-entrepreneurship-society/"
          target="_blank"
        >
          <BiLogoLinkedin className="text-white" />
        </a>
      </li>
      <li className="p-2 border bg-black rounded-full">
        <a href="https://twitter.com/CSUSMes2021" target="_blank">
          <BsTwitter className="text-white" />
        </a>
      </li>
      <li className="p-2 border bg-black rounded-full">
        <a href="https://discord.gg/Z2CJF67uc" target="_blank">
          <BsDiscord className="text-white" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
