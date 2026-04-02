import React, { useEffect, useState } from "react";
import { getUser } from "../service/getUser";

const useFinancialStats = () => {
  const [balance, setBalance] = useState();
  const [income, setIncome] = useState();
  const [expenses, setExpenses] = useState();

  useEffect(() => {
    async function fetchStats() {
      const [{ financialDetails }] = await getUser();
      setBalance(financialDetails.balance);
      setIncome(financialDetails.income);
      setExpenses(financialDetails.expense);
    }
    fetchStats();

    () => {
      setBalance([]);
      setIncome([]);
      setExpenses([]);
    };
  }, []);

  return { balance, income, expenses };
};

export default useFinancialStats;
