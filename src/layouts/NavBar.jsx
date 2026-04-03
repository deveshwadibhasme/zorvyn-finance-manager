import { Flex, Switch } from "antd";
import React from "react";
import { LuUser } from "react-icons/lu";
import useRole from "../hooks/useRole";
import useData from "../hooks/useData";

const NavBar = () => {
  const { role, changeRole } = useRole();
  const { data } = useData();

  function handleChange(changed) {
    if (changed) {
      changeRole("admin");
    } else {
      changeRole("viewer");
    }
  }
  return (
    <header className="bg-white w-full p-5 flex justify-between">
      <h1 className="text-2xl font-bold">Finance Manager</h1>
      <Flex gap={12} align="center">
        <Switch
          onChange={handleChange}
          value={role == "admin" ? true : false}
        />
        <span>Admin</span>
        <LuUser
          size={30}
          className={`p-1 rounded-full ${
            role !== "admin" ? " bg-blue-400" : "bg-purple-900"
          } text-white`}
        />
        <span className="hidden md:block">{data?.name}</span>
      </Flex>
    </header>
  );
};

export default NavBar;
