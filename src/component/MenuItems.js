import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuItems = ({
  name,
  subMenus,
  inactive,
  icon,
  onClick,
  to,
  activeColour_bg,
}) => {
  const [expand, setExpand] = useState(false);
  const toggleDropdown = () => {
    setExpand(!expand);
  };
  return (
    <li onClick={onClick} className="mt-2">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `menu-item text-blue-700 text-lg block font-semibold cursor-pointer rounded-md bg-${activeColour_bg} `
            : `menu-item text-white text-lg block font-semibold cursor-pointer`
        }
        onClick={toggleDropdown}
      >
        <div className="menu-icon inline-block w-[40px] h-[40px] text-3xl pt-2">
          {icon}
        </div>
        <span
          className={`absolute inline-block transition-opacity leading-10 pl-2 pt-1 ${
            inactive ? "opacity-0 w-0 h-0 overflow-hidden" : "opacity-100"
          } duration-200s ease-in`}
        >
          {name}
        </span>
      </NavLink>
      {subMenus && subMenus.length > 0 ? (
        <ul
          className={`sub-menu text-white ml-[1.1em] pl-7 max-h-0 overflow-hidden transition-[max-height] duration-200s ease-in ${
            expand ? "max-h-[200px]" : ""
          }`}
        >
          {subMenus.map((menu, index) => (
            <li key={index}>
              <button
                className={`block my-1 text-sm font-medium inline-block transition-opacity ${
                  inactive ? "opacity-0 w-0 h-0 overflow-hidden" : "opacity-100"
                } duration-200s ease-in`}
              >
                {menu.name}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItems;
