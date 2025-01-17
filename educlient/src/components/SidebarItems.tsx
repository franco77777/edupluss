import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { log } from "console";
import { current } from "@reduxjs/toolkit";

export default function SidebarWrapper({ children }) {
  const expanded = useSelector((state: RootState) => state.utils.handleSideBar);

  return (
    <aside
      className={`min-h-[calc(100vh-4rem)] mt-16 transition-all duration-300 ${
        expanded ? "w-24" : "w-0"
      }`}
    >
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <ul className="flex flex-col justify-center items-center px-1">
          {children}
        </ul>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, url }) {
  const expanded = useSelector((state: RootState) => state.utils.handleSideBar);
  const currentUrl = useLocation();
  return (
    <li className="mt-4">
      <Link
        to={url}
        className={`
        animation text-sm mx-1 
        relative flex flex-col items-center py-2  my-1
        font-light rounded-md cursor-pointer
        transition-all group  duration-300 ease-in-out 
        ${expanded ? "right-0" : "right-24"}
        ${
          currentUrl.pathname === url
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
      >
        {icon}
        <span>{text}</span>

        {!expanded && (
          <div
            className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
          >
            {text}
          </div>
        )}
      </Link>

      <div
        className={`h-0 mt-4 w-24 border-[0.5px] relative ${
          expanded ? "right-0" : "right-24"
        }`}
      ></div>
    </li>
  );
}
