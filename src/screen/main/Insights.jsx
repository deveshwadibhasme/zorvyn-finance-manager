import React from "react";
import useInsight from "../../hooks/useInsight";
import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi";
import { MdOutlineAnalytics } from "react-icons/md";

const Insights = () => {
  const { resp, callAi } = useInsight();

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-100 space-y-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={callAi}
        className="flex items-center gap-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-indigo-500/30 transition-all"
      >
        <HiOutlineSparkles className="text-xl" />
        Generate AI Insights
      </motion.button>
      <p>
        Using free service 15 allowed (contact : deveshwadibhasme.03@gmail.com)
      </p>
      {resp && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-2 mb-4 text-indigo-600 font-bold">
            <MdOutlineAnalytics size={24} />
            <h3>Financial Analysis</h3>
          </div>
          <div className="space-y-4 text-gray-700">
            <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase">Balance</p>
                <p className="font-bold text-indigo-600">
                  {resp.financialSummary?.balance}
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase">Income</p>
                <p className="font-bold text-green-600">
                  {resp.financialSummary?.income}
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase">Expenses</p>
                <p className="font-bold text-red-600">
                  {resp.financialSummary?.expenses}
                </p>
              </div>
            </div>
            <p className="italic border-l-4 border-indigo-400 pl-4 py-2 bg-indigo-50/50 rounded-r-lg">
              {resp.spendingAnalysis?.message}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Insights;
