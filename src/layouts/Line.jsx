import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Graph = ({ transaction }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    if (!transaction) return;

    const sortedData = [...transaction].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    const labels = sortedData.map((t) => t.date);
    const amounts = sortedData.map((t) => t.amount);

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Transaction Amount",
            data: amounts,
            borderColor: "rgb(37, 99, 235)",
            backgroundColor: "rgba(37, 99, 235, 0.1)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, [transaction]);

  return <canvas height={"400px"} width={200} ref={chartRef} />;
};

export default Graph;
