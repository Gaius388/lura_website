import React from "react";
import { Navigate } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { TfiPieChart } from "react-icons/tfi";
import { BsFacebook } from "react-icons/bs";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { RiShieldUserFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";
import {
  AiOutlineTag,
  AiFillTwitterCircle,
  AiFillGoogleCircle,
  AiOutlineTeam,
} from "react-icons/ai";
import logo from "./logo192.png";

const withAuth = (Component) => {
  const AuthRoute = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    if (isAuthenticated) {
      return <Component />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return AuthRoute;
};

const Dashboard = () => {
  return (
    <main className="grid grid-cols-dashboard min-h-screen font-nunito">
      <section className="bg-blue-700 grid justify-center items-center font-semibold 2xl:text-xl sm:text-lg text-white">
        <h2 className="text-2xl font-bold">E-Product</h2>
        <div className="grid gap-y-8">
          <article className="flex items-center gap-2">
            <MdOutlineDashboard />
            <p className="capitalize">Dashboard</p>
          </article>
          <article className="flex items-center gap-2">
            <RiShieldUserFill />
            <p className="capitalize">users</p>
          </article>
          <article className="flex items-center gap-2">
            <TfiPieChart />
            <p className="capitalize">statistic</p>
          </article>
          <article className="flex items-center gap-2">
            <AiOutlineTeam />
            <p className="capitalize">team members</p>
          </article>
          <article className="flex items-center gap-2">
            <IoMdSettings />
            <p className="capitalize">settings</p>
          </article>
          <article className="flex items-center gap-2">
            <AiOutlineTag />
            <p className="capitalize">offer</p>
          </article>
        </div>
        <div className="flex gap-3 text-xl">
          <BsFacebook />
          <AiFillTwitterCircle />
          <AiFillGoogleCircle />
        </div>
      </section>
      <section className="pr-10 pl-4 pt-7">
        <div className="flex justify-between items-center">
          <article>
            <h3 className="2xl:text-2xl sm:text-xl font-semibold">User</h3>
            <p className="2xl:text-lg sm:text-md">30 Users found</p>
          </article>
          <article className="flex items-center gap-12 2xl:text-xl sm:text-lg">
            <div className="flex items-center gap-2">
              <IoNotificationsOutline />
              <CiSearch />
            </div>
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="logo"
                className="w-[1rem] h-[1rem] rounded-full border border-green-300 border-2"
              />

              <FiChevronDown />
            </div>
          </article>
        </div>
        <div className="flex items-center 2xl:text-sm sm:text-xs font-medium 2xl:mt-6 sm:mt-4 justify-between">
          <ul className="flex gap-6 text-gray-300">
            <li className="text-black">All Orders</li>
            <li>Paid Users</li>
            <li>Trial Users</li>
          </ul>
          <article className="flex items-center gap-1">
            <div className="flex items-center gap-1 px-1.5 py-0.5 bg-gray-200 rounded-sm">
              <HiOutlineCalendarDays />
              <p>27 march 2023</p>
            </div>
            <p>To</p>
            <div className="flex items-center gap-1 px-1.5 py-0.5 bg-gray-200 rounded-sm">
              <HiOutlineCalendarDays />
              <p>03 Feb 2023</p>
            </div>
          </article>
        </div>
        <div className="grid grid-cols-7 px-3 2xl:py-2 sm:py-1.5 justify-items-center 2xl:text-md sm:text-sm bg-gray-100 rounded-md my-6">
          <p>Id</p>
          <p className="capitalize">Name</p>
          <p className="capitalize">address</p>
          <p>Date</p>
          <p>Price</p>
          <p className="capitalize">status</p>
          <p>Action</p>
        </div>
        <div className="grid">
          <div className="grid grid-cols-7 px-3 2xl:py-2.5 sm:py-1.5 border border-gray-100 shadow-md justify-items-center items-center sm:text-xs 2xl:text-sm rounded-sm font-semibold mb-4">
            <p>#2734</p>
            <p className="capitalize flex items-center gap-1">
              <img
                src={logo}
                alt="logo"
                className="w-[1rem] h-[1rem] rounded-full border border-green-300 border-2"
              />
              <h3 className="capitalize">brooklyn Zoe</h3>
            </p>
            <p className="capitalize">danyor</p>
            <p>03/03/23</p>
            <p>$72.0</p>
            <p className="capitalize">pending</p>
            <p className="flex gap-3">
              <IoMdSettings className="p-0.5 bg-gray-100 text-xl rounded-sm" />
              <FiChevronDown className="p-0.5 bg-gray-100 text-xl rounded-sm" />
            </p>
          </div>
          <div className="grid grid-cols-7 px-3 2xl:py-2.5 sm:py-1.5 border border-gray-100 shadow-md justify-items-center items-center sm:text-xs 2xl:text-sm rounded-sm font-semibold mb-4">
            <p>#2734</p>
            <p className="capitalize flex items-center gap-1">
              <img
                src={logo}
                alt="logo"
                className="w-[1rem] h-[1rem] rounded-full border border-green-300 border-2"
              />
              <h3 className="capitalize">brooklyn Zoe</h3>
            </p>
            <p className="capitalize">danyor</p>
            <p>03/03/23</p>
            <p>$72.0</p>
            <p className="capitalize">pending</p>
            <p className="flex gap-3">
              <IoMdSettings className="p-0.5 bg-gray-100 text-xl rounded-sm" />
              <FiChevronDown className="p-0.5 bg-gray-100 text-xl rounded-sm" />
            </p>
          </div>
          <div className="grid grid-cols-7 px-3 2xl:py-2.5 sm:py-1.5 border border-gray-100 shadow-md justify-items-center items-center sm:text-xs 2xl:text-sm rounded-sm font-semibold mb-4">
            <p>#2734</p>
            <p className="capitalize flex items-center gap-1">
              <img
                src={logo}
                alt="logo"
                className="w-[1rem] h-[1rem] rounded-full border border-green-300 border-2"
              />
              <h3 className="capitalize">brooklyn Zoe</h3>
            </p>
            <p className="capitalize">danyor</p>
            <p>03/03/23</p>
            <p>$72.0</p>
            <p className="capitalize">pending</p>
            <p className="flex gap-3">
              <IoMdSettings className="p-0.5 bg-gray-100 text-xl rounded-sm" />
              <FiChevronDown className="p-0.5 bg-gray-100 text-xl rounded-sm" />
            </p>
          </div>
          <div className="grid grid-cols-7 px-3 2xl:py-2.5 sm:py-1.5 border border-gray-100 shadow-md justify-items-center items-center sm:text-xs 2xl:text-sm rounded-sm font-semibold mb-4">
            <p>#2734</p>
            <p className="capitalize flex items-center gap-1">
              <img
                src={logo}
                alt="logo"
                className="w-[1rem] h-[1rem] rounded-full border border-green-300 border-2"
              />
              <h3 className="capitalize">brooklyn Zoe</h3>
            </p>
            <p className="capitalize">danyor</p>
            <p>03/03/23</p>
            <p>$72.0</p>
            <p className="capitalize">pending</p>
            <p className="flex gap-3">
              <IoMdSettings className="p-0.5 bg-gray-100 text-xl rounded-sm" />
              <FiChevronDown className="p-0.5 bg-gray-100 text-xl rounded-sm" />
            </p>
          </div>
          <div className="grid grid-cols-7 px-3 2xl:py-2.5 sm:py-1.5 border border-gray-100 shadow-md justify-items-center items-center sm:text-xs 2xl:text-sm rounded-sm font-semibold mb-4">
            <p>#2734</p>
            <p className="capitalize flex items-center gap-1">
              <img
                src={logo}
                alt="logo"
                className="w-[1rem] h-[1rem] rounded-full border border-green-300 border-2"
              />
              <h3 className="capitalize">brooklyn Zoe</h3>
            </p>
            <p className="capitalize">danyor</p>
            <p>03/03/23</p>
            <p>$72.0</p>
            <p className="capitalize">pending</p>
            <p className="flex gap-3">
              <IoMdSettings className="p-0.5 bg-gray-100 text-xl rounded-sm" />
              <FiChevronDown className="p-0.5 bg-gray-100 text-xl rounded-sm" />
            </p>
          </div>
          <div className="grid grid-cols-7 px-3 2xl:py-2.5 sm:py-1.5 border border-gray-100 shadow-md justify-items-center items-center sm:text-xs 2xl:text-sm rounded-sm font-semibold mb-4">
            <p>#2734</p>
            <p className="capitalize flex items-center gap-1">
              <img
                src={logo}
                alt="logo"
                className="w-[1rem] h-[1rem] rounded-full border border-green-300 border-2"
              />
              <h3 className="capitalize">brooklyn Zoe</h3>
            </p>
            <p className="capitalize">danyor</p>
            <p>03/03/23</p>
            <p>$72.0</p>
            <p className="capitalize">pending</p>
            <p className="flex gap-3">
              <IoMdSettings className="p-0.5 bg-gray-100 text-xl rounded-sm" />
              <FiChevronDown className="p-0.5 bg-gray-100 text-xl rounded-sm" />
            </p>
          </div>
          <div className="grid grid-cols-7 px-3 2xl:py-2.5 sm:py-1.5 border border-gray-100 shadow-md justify-items-center items-center sm:text-xs 2xl:text-sm rounded-sm font-semibold mb-4">
            <p>#2734</p>
            <p className="capitalize flex items-center gap-1">
              <img
                src={logo}
                alt="logo"
                className="w-[1rem] h-[1rem] rounded-full border border-green-300 border-2"
              />
              <h3 className="capitalize">brooklyn Zoe</h3>
            </p>
            <p className="capitalize">danyor</p>
            <p>03/03/23</p>
            <p>$72.0</p>
            <p className="capitalize">pending</p>
            <p className="flex gap-3">
              <IoMdSettings className="p-0.5 bg-gray-100 text-xl rounded-sm" />
              <FiChevronDown className="p-0.5 bg-gray-100 text-xl rounded-sm" />
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center 2xl:text-sm sm:text-xs font-bold my-4">
          <main>Showing 06-14 Of 28</main>
          <div className="flex items-center gap-2 cursor-pointer">
            <BiChevronLeft />
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <BiChevronRight />
          </div>
        </div>
      </section>
    </main>
  );
};

withAuth(Dashboard)
export default Dashboard;
