import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import useFinancialStats from "../hooks/useFinancialStats";

const PieChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const { income, expenses } = useFinancialStats();

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Income", "Expenses"],
        datasets: [
          {
            data: [income || 0, expenses || 0],
            backgroundColor: [
              "rgba(34, 197, 94, 0.6)", // Green for income
              "rgba(239, 68, 68, 0.6)",
            ],
            borderColor: ["rgb(34, 197, 94)", "rgb(239, 68, 68)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          animateRotate: true,
          animateScale: true,
          duration: 1000,
        },
        plugins: {
          legend: {
            position: "bottom",
          },
          title: {
            display: true,
            text: "Income vs Expenses Distribution",
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, [income, expenses]);

  return <canvas height={"500px"} width={"200px"} ref={chartRef} />;
};

export default PieChart;
