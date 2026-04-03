import React, { useContext, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext.jsx";
import { getTransaction } from "../service/getTransaction.js";
import useFinancialStats from "./useFinancialStats.jsx";

const useTransaction = () => {
  const context = useContext(TransactionContext);

  const {
    transaction,
    setTransaction,
    loading,
    setLoading,
    recentTransaction,
    setRecentTransaction,
  } = context;

  useEffect(() => {
    async function fetchTransaction() {
      try {
        setLoading(true);
        const data = await getTransaction();
        setTransaction(transaction ? transaction : data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchTransaction();
  }, []);

  async function addTransaction(details) {
    setTransaction((prevState) => [details, ...prevState]);
    setRecentTransaction("");
    setRecentTransaction(details);
  }

  async function editTransaction(id, details) {
    const toEdit = transaction.find((dt) => dt.id === id);
    // console.log(toEdit);
  }

  return {
    transaction,
    loading,
    transaction,
    addTransaction,
    recentTransaction,
    editTransaction,
  };
};

export default useTransaction;
