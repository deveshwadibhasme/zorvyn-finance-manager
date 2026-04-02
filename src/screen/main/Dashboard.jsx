import useFinancialStats from "../../hooks/useFinancialStats";
import StatsCard from "./components/StatsCard";

const Dashboard = () => {
  const { balance, income, expenses } = useFinancialStats();

  return (
    <section className="p-5 flex flex-col items-center">
      <div className="flex gap-2 md:gap-5 items-center w-full justify-center">
        <StatsCard allStats={[balance, income, expenses]} />
      </div>
    </section>
  );
};

export default Dashboard;
