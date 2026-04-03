import React, { useContext, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext.jsx";
import { getTransaction } from "../service/getTransaction.js";

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
        setTransaction(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchTransaction();
  }, []);

  async function addTransaction(details) {
    setTransaction((prevState) => [...transaction, details]);
    setRecentTransaction("");
    setRecentTransaction(details);
  }

  return {
    transaction,
    loading,
    transaction,
    addTransaction,
    recentTransaction,
  };
};

export default useTransaction;
