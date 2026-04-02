import {
  FaMoneyBill,
  FaMoneyBillWave,
  FaMoneyCheck,
  FaRupeeSign,
} from "react-icons/fa";
import { motion } from "framer-motion";
import useFinancialStats from "../../hooks/useFinancialStats";

const Dashboard = () => {
  const { balance, income, expenses } = useFinancialStats();
  console.log(expenses);

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

  return (
    <section className="p-5 flex flex-col items-center">
      <div className="flex gap-2 md:gap-5 items-center w-full justify-center">
        {stats?.map((dt, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="p-2 md:p-5 shadow-sm rounded-2xl md:max-w-80 min-h-30 md:min-h-40 w-full bg-white flex flex-col"
          >
            <span className="md:text-3xl text-gray-700 flex gap-x-5 items-center justify-center md:justify-start">
              {dt.icon}{" "}
              <h2 className="text-sm md:text-lg font-bold">{dt.title}</h2>
            </span>
            <span className="text-5xl mt-5 font-extrabold text-green-950">
              <FaRupeeSign size={25} className="inline-block" />
              {dt.value}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
