import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-PrimaryColor mb-10">
      <h1 className="mb-4">CSUSM ES © 2023</h1>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
