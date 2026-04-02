import React, { useContext, useEffect } from "react";
import { RoleContext } from "../context/RoleContext";
import { getUser } from "../service/getUser";

const useRole = () => {
  const context = useContext(RoleContext);

  const { data, setData, permission, setPermission, role, setRole } = context;

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

  useEffect(() => {
    async function fetchUser() {
      const [userData] = await getUser();
      userData.role = role;
      setPermission({
        canEdit: false,
        canDelete: false,
        canAdd: false,
        canView: true,
      });
      userData.permission = permission;
      setData(userData);
    }
    fetchUser();

    () => {
      setData([]);
    };
  }, [role]);

  return { data, changeRole, role };
};

export default useRole;
