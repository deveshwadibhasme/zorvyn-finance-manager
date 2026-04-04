import { FaRupeeSign } from "react-icons/fa";
import { FaMoneyBill, FaMoneyBillWave, FaMoneyCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import StatsGraph from "./layouts/StatsGraph";

const StatsCard = ({ allStats, recentTransaction }) => {
  const [balance, income, expenses] = allStats;

  const stats = [
    {
      title: "Balance",
      value: balance,
      icon: <FaMoneyBill />,
    },
    {
      title: "Income",
      value: income,
      icon: <FaMoneyCheck />,
    },
    {
      title: "Expenses",
      value: expenses,
      icon: <FaMoneyBillWave />,
    },
  ];

  return stats?.map((dt, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="p-2 md:p-5 shadow-sm rounded-2xl md:max-w-80 min-h-30 md:min-h-40 w-full bg-white flex flex-col"
    >
      <span className="md:text-3xl text-gray-700 flex gap-x-5 items-center justify-center md:justify-start">
        {dt.icon} <h2 className="text-sm md:text-lg font-bold">{dt.title}</h2>
      </span>
      <span className="text-3xl md:text-5xl mt-5 font-extrabold text-green-950">
        <FaRupeeSign className="inline-block text-sm md:text-2xl" />
        {dt.value}
      </span>
      <span className="flex items-center ml-auto">
        <StatsGraph
          type={recentTransaction?.category}
          category={dt?.title}
          value={recentTransaction?.amount}
        />
      </span>
    </motion.div>
  ));
};

export default StatsCard;
