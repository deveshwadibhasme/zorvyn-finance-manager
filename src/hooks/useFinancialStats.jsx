import React, { useEffect, useState } from "react";
import { getUser } from "../service/getUser";
import useTransaction from "./useTransaction";

const useFinancialStats = () => {
  const [balance, setBalance] = useState();
  const [income, setIncome] = useState();
  const [expenses, setExpenses] = useState();
  const { transaction } = useTransaction();

  useEffect(() => {
    // async function fetchStats() {
    //   const [{ financialDetails }] = await getUser();
    //   setBalance(financialDetails.balance);
    //   setIncome(financialDetails.income);
    //   setExpenses(financialDetails.expense);
    // }
    // fetchStats();
    setFinancialState();
  }, [transaction]);

  function setFinancialState() {
    const income = transaction
      ?.filter((t) => t.category === "income")
      .reduce((acc, curr) => acc + curr.amount, 0);

    const expenses = transaction
      ?.filter((t) => t.category === "expense")
      .reduce((acc, curr) => acc + curr.amount, 0);

    const balance = income - expenses;

    setIncome(income);
    setExpenses(expenses);
    setBalance(balance);
  }

  return { balance, income, expenses };
};

export default useFinancialStats;
