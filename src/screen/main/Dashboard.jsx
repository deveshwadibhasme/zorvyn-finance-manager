import useFinancialStats from "../../hooks/useFinancialStats";
import useTransaction from "../../hooks/useTransaction";
import Graph from "../../layouts/Line.jsx";
import PieChart from "../../layouts/Pie";
import StatsCard from "./components/StatsCard";

const Dashboard = () => {
  const { balance, income, expenses } = useFinancialStats();
  const { transaction } = useTransaction();

  return (
    <section className="p-5 flex flex-col items-center h-screen">
      <div className="flex gap-2 md:gap-5 items-center w-full justify-center">
        <StatsCard allStats={[balance, income, expenses]} />
      </div>
      <div className="flex justify-center items-center gap-0 w-full h-75 md:h-90 mt-4 p-4 bg-white rounded-xl shadow-sm">
        <PieChart />
      </div>
      <div className="flex justify-center items-center gap-0 w-full h-75 md:h-90 mt-4 p-4 bg-white rounded-xl shadow-sm">
        <Graph transaction={transaction} />
      </div>
    </section>
  );
};

export default Dashboard;
