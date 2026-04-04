import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import useRole from "../../../hooks/useRole";

const TransactionHeader = ({ openModal }) => {
  const { permission } = useRole();

  return (
    <header className="flex justify-between items-center px-4 py-5 bg-white rounded-2xl">
      <h1 className="text-xl md:text-2xl">Your Transaction</h1>
      {permission?.canAdd && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openModal}
          className="shadow-xl border rounded-full md:w-45 flex justify-center items-center gap-2 py-1 px-2 cursor-pointer hover:bg-green-400"
        >
          <FaPlus /> Add Transaction
        </motion.button>
      )}
    </header>
  );
};

export default TransactionHeader;
