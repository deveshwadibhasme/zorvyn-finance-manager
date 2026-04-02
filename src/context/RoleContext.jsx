import { createContext, useContext, useEffect, useState } from "react";

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [data, setData] = useState();
  const [role, setRole] = useState();
  const [permission, setPermission] = useState({});

  return (
    <RoleContext.Provider
      value={{ data, setData, permission, setPermission, role, setRole }}
    >
      {children}
    </RoleContext.Provider>
  );
};
