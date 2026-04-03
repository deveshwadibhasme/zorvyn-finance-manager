import React, { useEffect, useState } from "react";
import { getUser } from "../service/getUser";

const useData = () => {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchUser() {
      const [userData] = await getUser();
      userData.permission = {
        canEdit: false,
        canDelete: false,
        canAdd: false,
        canView: true,
      };
      setData(userData);
    }
    fetchUser();
  }, []);

  return { data };
};

export default useData;
