import React, { useState } from "react";
import "./style.css";
import {
  AiOutlineTag,
  AiOutlineTeam,
} from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { TfiPieChart } from "react-icons/tfi";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
import { RiShieldUserFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import logo from "../logo192.png";
import MenuItems from "./MenuItems";

const menuItems = [
  { name: "Dashboard", icon: <MdOutlineDashboard />, to: "/layout" },
  {
    name: "Users",
    icon: <RiShieldUserFill />,
    to: "/users",
    subMenus: [{ name: "Courses" }, { name: "Videos" }],
  },
  { name: "Statistics", icon: <TfiPieChart />, to: "/" },
  { name: "Team Member", icon: <AiOutlineTeam />, to: "/" },
  { name: "Settings", icon: <IoMdSettings />, to: "/" },
  { name: "Offer", icon: <AiOutlineTag />, to: "/offers" },
];

const CollapseDashboard = () => {
  const [inactive, setInactive] = useState(false);
  const toggleInactive = () => {
    setInactive(!inactive);
  };
  return (
    <div className="bg-[#eee] min-h-screen">
      <section
        className={`side-menu fixed bg-black h-full px-5 p-7 transition-[width] duration-200s ease-in ${
          inactive ? "w-[4.4em]" : "w-[18em]"
        }`}
      >
        <div className="top-section relative">
          <div className="logo w-[2.2em] h-[2.2em] overflow-hidden inline-block">
            <img src={logo} alt="profile" className="max-w-full max-h-full" />
          </div>
          <div
            className={`toggle-menu-btn text-gray-500 absolute top-1/2 cursor-pointer ${
              inactive ? "right-[-4em]" : "right-0"
            } -translate-y-1/2`}
            onClick={toggleInactive}
          >
            {inactive ? (
              <BsFillArrowLeftSquareFill />
            ) : (
              <BsFillArrowRightSquareFill />
            )}
          </div>
        </div>
        <div className="search-controller relative text-white">
          <CiSearch className="search-btn text-[#666] absolute text-sm w-[2.5em] h-[2em]" />
          <input
            type="text"
            placeholder="search"
            className="outline-none h-[2rem] bg-[#333] rounded-sm block my-5 mx-0 w-full pl-10"
          />
        </div>
        <div className="divider w-full h-[0.1em] rounded-sm bg-[#333]"></div>
        <div className="main-menu my-1.5">
          <ul>
            {menuItems.map((item, index) => (
              <MenuItems
                key={index}
                name={item.name}
                to={item.to}
                inactive={inactive}
                subMenus={item.subMenus || []}
                icon={item.icon}
                onClick={() => {
                  if (inactive) {
                    setInactive(false);
                  }
                }}
              />
            ))}
          </ul>
        </div>
        <div className="side-menu-footer w-full absolute bg-[#333] bottom-0 left-0 p-4">
          <div className="avatar w-[2.2em] h-[2.2em] overflow-hidden rounded-full inline-block">
            <img src={logo} alt="profile" className="max-w-full" />
          </div>
          <div
            className={`user-info absolute inline-block transition-opacity pl-3 text-white ${
              inactive ? "opacity-0 w-0 h-0 overflow-hidden" : "opacity-100"
            }`}
          >
            <h5 className="text-md font-bold">Emmanuel</h5>
            <p className="text-xs">emmanuel@yahoo.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollapseDashboard;
