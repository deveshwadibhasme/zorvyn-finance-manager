import React, { useState } from "react";
import Header from "./layouts/TransactionHeader";
import TransactionTable from "./layouts/TransactionTable";
import useTransaction from "../../hooks/useTransaction";
import PopUpModal from "./components/Modal";

const Transaction = () => {
  const { transaction, loading, addTransaction } = useTransaction();
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!open);
  };

  return (
    <section className="p-5">
      <Header openModal={openModal} />

      <TransactionTable dataSource={transaction} />

      <PopUpModal
        title={"Add New Transaction"}
        open={open}
        openModal={openModal}
      >
        <h1> Add Your Transaction </h1>
      </PopUpModal>
    </section>
  );
};

export default Transaction;
