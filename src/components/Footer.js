import React from "react";

import logo from "../images/musimatch_logo.png";

function Footer() {
  return (
    <div className="fixed left-0 bottom-0 w-full pl-8 pt-4 pb-4 flex justify-between font-bold bg-[#36213E] text-white text-left">
      <a href="/">
        <img className="w-8 h-8" src={logo} alt="musimatch logo" />
      </a>
      <div> MusiMatch, 2022. © All rights reserved </div>
    </div>
   );
}
export default Footer;
