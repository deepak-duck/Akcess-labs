import React from "react";
import { Link } from "react-router-dom";
import { NavItem } from "../types/NavItems";

interface NavItemProps {
  item: NavItem;
  isActive: boolean;
  isMobile: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, hash?: string) => void;
  onCloseMenu: () => void;
}

export const NavItemComponent: React.FC<NavItemProps> = ({
  item,
  isActive,
  isMobile,
  onClick,
  onCloseMenu,
}) => {
  const baseClasses = isMobile
    ? `transition-colors py-2 ${isActive ? "font-medium text-akcess-lime" : "text-white hover:text-akcess-lime"}`
    : `text-white hover:text-akcess-lime transition-colors relative ${isActive ? "font-medium" : ""}`;

  const buttonClasses = isMobile
    ? `px-4 py-2 rounded font-semibold text-center transition-all duration-300 ${
        isActive ? "bg-akcess-lime text-akcess-black" : "bg-akcess-lime text-akcess-black hover:bg-opacity-90"
      }`
    : "bg-akcess-lime text-akcess-black px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition-all duration-300";

  return item.isButton ? (
    <Link
      to={item.path}
      className={buttonClasses}
      onClick={onCloseMenu}
      tabIndex={isMobile && !isActive ? -1 : undefined}
    >
      {item.label}
    </Link>
  ) : (
    <a
      href={item.path}
      className={baseClasses}
      onClick={(e) => onClick(e, item.hash)}
      tabIndex={isMobile && !isActive ? -1 : undefined}
    >
      {item.label}
      {isActive && (
        <span
          className={`block w-full h-0.5 bg-akcess-lime rounded-full ${
            isMobile ? "mt-1" : "absolute -bottom-1.5 left-0"
          }`}
        />
      )}
    </a>
  );
};