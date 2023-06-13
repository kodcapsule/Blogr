import { useState } from "react";

import Open_menu from "../assets/images/icon-hamburger.svg";
import Close_menu from "../assets/images/icon-close.svg";
import logo from "../assets/images/logo.svg";
import arrow from "../assets/images/icon-arrow-light.svg";
import dark_arrow from "../assets/images/icon-arrow-dark.svg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(true);

  // function openNavbarMenu() {
  //   setOpenMenu(!openMenu);
  // }
  return (
    <div className=" flex justify-between container items-center mx-auto navbar_container p-5 ">
      <div className=" flex gap-x-20 items-center ">
        <div className="logo__container">
          <img src={logo} alt="" />
        </div>

        <nav>
          <ul className="  hidden gap-x-10 md:flex capitalize">
            <li className=" dropdown relative">
              <button className="link flex items-center gap-1 ">
                product
                <span>
                  <img src={arrow} alt="" />
                </span>
              </button>
              <ul className=" dropdown-menu">
                <li>lihjjhjjhgjh</li>
                <li>li uyyuiui</li>
                <li>li</li>
                <li>li</li>
              </ul>
            </li>
            <li>
              <li className=" dropdown relative">
                <button className="link flex items-center gap-1 ">
                  Company
                  <span>
                    <img src={arrow} alt="" />
                  </span>
                </button>
                <ul className="dropdown-menu">
                  <li>lihjjhjjhgjh</li>
                  <li>li uyyuiui</li>
                  <li>li</li>
                  <li>li</li>
                </ul>
              </li>
            </li>
            <li>
              <li className=" dropdown relative">
                <button className="link flex items-center gap-1 ">
                  Connect
                  <span>
                    <img src={arrow} alt="" />
                  </span>
                </button>
                <ul className="dropdown-menu">
                  <li>Contact</li>
                  <li>NewsLetter</li>
                  <li>LinkedIn</li>
                </ul>
              </li>
            </li>
          </ul>
        </nav>
      </div>

      <div className="btn_container hidden md:flex gap-x-10 capitalize">
        <a href="#" className=" btn ">
          login
        </a>
        <a
          href="#"
          className="py-2 px-7 bg-white rounded-full text-very_light_red text-xs font-bold btn__hover"
        >
          sign up
        </a>
      </div>
      <div className="menu flex md:hidden ">
        <img src={Open_menu} alt="Menu icon" className="" />
        <img src={Close_menu} alt="Menu icon " className=" hidden" />
      </div>
    </div>
  );
};

export default Navbar;
