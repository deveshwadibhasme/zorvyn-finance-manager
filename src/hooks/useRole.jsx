import React, { useContext, useEffect } from "react";
import { RoleContext } from "../context/RoleContext";
import { getUser } from "../service/getUser";

const useRole = () => {
  const context = useContext(RoleContext);

  const { data, setData, permission, setPermission, role, setRole } = context;

  function changeRole(roleTo) {
    console.log(roleTo);
    setRole(roleTo);
    if (roleTo === "admin") {
      setPermission({
        canEdit: true,
        canDelete: true,
        canAdd: true,
        canView: true,
      });
    }
  }

  useEffect(() => {
    async function fetchUser() {
      const [userData] = await getUser();
      userData.role = role;
      userData.permission.length = 0;
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
