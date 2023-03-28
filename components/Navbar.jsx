import Image from "next/image";
import logo from "../public/s-logo.png";
import { useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
];

function Navbar() {
  const [activeItemId, setActiveItemId] = useState("home");

  const handleClick = (itemId) => {
    setActiveItemId(itemId);
  };

  return (
    <div className="grid grid-cols-3">
      <div className="flex justify-start items-start">
        <Image
          src={logo}
          height={512}
          width={512}
          alt="logo"
          className="w-auto h-16 cursor-pointer"
        />
      </div>

      <div className="flex justify-center items-center 2xl:gap-x-14">
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.id}
            label={item.label}
            itemId={item.id}
            activeItemId={activeItemId}
            onClick={handleClick}
          />
        ))}
      </div>

      <div className="flex justify-end items-center text ">
        <div className="navBtn py-3 px-10 rounded-2xl cursor-pointer">
          <p className="navbarfont font-bold 2xl:text-base text-white">
            Contact me
          </p>
        </div>
      </div>
    </div>
  );
}

function NavItem({ itemId, label, activeItemId, onClick }) {
  const isActive = activeItemId === itemId;

  const handleClick = () => {
    onClick(itemId);
  };

  const className = `navbarfont cursor-pointer 2xl:text-base ${
    isActive ? "home" : "navbartext"
  }`;

  return (
    <p className={className} id={itemId} onClick={handleClick}>
      {label}
    </p>
  );
}

export default Navbar;
