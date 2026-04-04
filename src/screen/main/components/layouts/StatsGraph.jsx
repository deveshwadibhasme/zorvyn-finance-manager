import { FaArrowDown, FaArrowUp, FaRupeeSign } from "react-icons/fa";

const StatsGraph = ({ category, type, value }) => {
  if (!type || !category) return null;

  function provideArrow(type) {
    switch (type) {
      case "income":
        return <FaArrowUp color="green" />;
      case "expense":
        return <FaArrowDown color="red" />;
      default:
        return "";
    }
  }

  if (type?.[0] === category?.toLowerCase()?.[0]) {
    return (
      <>
        <FaRupeeSign />
        {provideArrow(type)}
        <span>{value}</span>
      </>
    );
  } else if (category === "Balance") {
    return (
      <>
        <FaRupeeSign />
        {provideArrow(type)}
        <span>{value}</span>
      </>
    );
  }
};

export default StatsGraph;
