import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { RxDashboard, RxPerson } from "react-icons/rx";
import { RiProjectorLine } from "react-icons/ri";

const icon_size = 24;

const navlinks = [
  {
    name: "home",
    link: "/Home",
    icon: <RxDashboard size={icon_size}/>,
  },
  {
    name: "create-project",
    link: "/CreateProject",
    icon: <RiProjectorLine size={icon_size}/>,
  },
  {
    name: "profile",
    link: "/Profile",
    icon: <RxPerson size={icon_size}/>,
  },
];

const Icon = ({ styles, name, icon, isActive, disabled, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive === name ? "bg-primary-content text-primary " : ""
    } flex justify-center items-center ${
      disabled || isActive !== name ? "bg-primary text-primary-content" : ""
    } cursor-pointer ${styles}`}
    onClick={handleClick}
  >
    {icon}
  </div>
);

const Sidebar = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState("dashboard");

  useEffect(() => {
    // Update the state of isActive based on the current path
    const path = router.pathname;
    const activeLink = navlinks.find((link) => link.link === path);
    if (activeLink) {
      setIsActive(activeLink.name);
    } else {
      setIsActive(""); // Set default active link
    }
  }, [router.pathname]);

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh] w-full sm:w-auto sm:mx-4">
      <Link href='/' className="text-xl font-bold text-primary">
        SourceLink
      </Link>
      <div className="flex-1 flex flex-col justify-between items-center bg-primary rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled && link.link !== router.pathname) {
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
