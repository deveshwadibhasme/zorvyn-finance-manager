import React, { useContext, useEffect } from "react";
import { RoleContext } from "../context/RoleContext";
import { getUser } from "../service/getUser";

const useRole = () => {
  const context = useContext(RoleContext);

  const { permission, setPermission, role, setRole } = context;

  function changeRole(roleTo) {
    setRole(roleTo);
    if (roleTo === "admin") {
      setPermission({
        canEdit: true,
        canDelete: true,
        canAdd: true,
        canView: true,
      });
    } else {
      setPermission({
        canEdit: false,
        canDelete: false,
        canAdd: false,
        canView: true,
      });
    }
  }

  return { changeRole, role, permission };
};

export default useRole;
