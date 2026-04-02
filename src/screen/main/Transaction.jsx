import React, { useEffect, useState } from "react";
import useRole from "../../hooks/useRole";
import AddTransaction from "./layouts/TransactionHeader";

const Transaction = () => {
  return (
    <section className="p-5">
      <AddTransaction />
    </section>
  );
};

export default Transaction;
