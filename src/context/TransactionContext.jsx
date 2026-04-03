import { createContext, useState } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transaction, setTransaction] = useState();
  const [loading, setLoading] = useState(false);
  const [recentTransaction, setRecentTransaction] = useState();

  return (
    <TransactionContext.Provider
      value={{
        transaction,
        setTransaction,
        loading,
        setLoading,
        recentTransaction,
        setRecentTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
