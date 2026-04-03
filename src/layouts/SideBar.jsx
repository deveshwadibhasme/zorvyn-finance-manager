import React from "react";
import logo from "/image.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LuLayoutDashboard,
  LuArrowLeftRight,
  LuChartPie,
} from "react-icons/lu";

const navItems = [
  { to: "/", label: "Dashboard", icon: LuLayoutDashboard },
  { to: "/transactions", label: "Transactions", icon: LuArrowLeftRight },
  { to: "/insights", label: "Insights", icon: LuChartPie },
];

const SideBar = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="md:max-w-45 z-10 md:w-full shadow-sm md:p-4 border-r border-gray-200 bg-white/10 backdrop-blur-sm rounded-2xl flex md:flex-col md:h-full absolute left-1/2 -translate-x-1/2 md:translate-x-0 bottom-10 md:static justify-center md:justify-start"
    >
      <div className="w-15 mx-auto mb-10 hidden md:block">
        <img src={logo} alt="" />
      </div>

      <div className="flex md:flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "text-black hover:bg-gray-100"
              }`
            }
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 w-full"
            >
              <item.icon size={20} />
              <span className="md:font-medium">{item.label}</span>
            </motion.div>
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
};

export default SideBar;
