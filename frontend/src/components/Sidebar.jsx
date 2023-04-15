import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RxDashboard, RxPerson } from "react-icons/rx";
import { RiLogoutBoxRLine, RiProjectorLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";

// import { navlinks } from '../constants';

const navlinks = [
  {
    name: "dashboard",
    link: "/",
    icon: <RxDashboard />,
    disabled: false,
  },
  {
    name: "project",
    link: "/create-project",
    icon: <RiProjectorLine />,
    disabled: false,
  },
  {
    name: "payment",
    link: "/",
    icon: <RiMoneyDollarCircleLine />,
    disabled: false,
  },
  {
    name: "withdraw",
    link: "/",
    icon: <BiMoneyWithdraw />,
    disabled: false,
  },
  {
    name: "profile",
    link: "/profile",
    icon: <RxPerson />,
    disabled: false,
  },
  {
    name: "logout",
    link: "/",
    icon: <RiLogoutBoxRLine />,
    disabled: false,
  },
];

const Icon = ({ styles, name, icon, isActive, disabled, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive === name ? 'bg-primary-content' : 'text-primary-content'
    } flex justify-center items-center ${
      disabled || isActive !== name ? 'grayscale' : ''
    } cursor-pointer ${styles}`}
    onClick={handleClick}
  >
    {icon}
  </div>
);

const Sidebar = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState("dashboard");

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh] w-full sm:w-auto sm:mx-4">
    <div className="flex-1 flex flex-col justify-between items-center bg-primary rounded-[20px] w-[76px] py-4 mt-12">
      <div className="flex flex-col justify-center items-center gap-3">
        {navlinks.map((link) => (
          <Icon
            key={link.name}
            {...link}
            isActive={isActive}
            handleClick={() => {
              if (!link.disabled) {
                setIsActive(link.name);
                router.push(link.link);
              }
            }}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
