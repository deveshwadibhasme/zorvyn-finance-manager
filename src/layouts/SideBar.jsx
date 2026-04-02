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
      className="max-w-45 w-full shadow-sm p-4 border-r border-gray-200 flex flex-col h-full"
    >
      <div className="w-15 mx-auto mb-10">
        <img src={logo} alt="" />
      </div>

      <div className="flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 w-full"
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </motion.div>
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
};

export default SideBar;
