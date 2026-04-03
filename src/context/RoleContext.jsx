import { createContext, useContext, useEffect, useState } from "react";

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState();
  const [permission, setPermission] = useState({});

  return (
    <RoleContext.Provider value={{ permission, setPermission, role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};
