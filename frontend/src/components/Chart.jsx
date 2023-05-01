import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const LineChart = () => {
  const chartRef = useRef(null);
  const { completed } = useSelector((s) => s.orderReducer);
  const [chartInstance, setChartInstance] = useState(null);
  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) return;

    const context = chart.getContext("2d");
    if (!context) return;

    const chartData = {
      labels: Array.from(
        { length: completed?.length },
        (_, i) => `Order ${i + 1}`
      ),
      datasets: [
        {
          label: "Price",
          data: completed?.sort((a, b) => b._id - a._id).map((el) => el.price),
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          fill: true,
        },
      ],
    };

    if (chartInstance) {
      chartInstance.destroy();
    }

    const Newchart = new Chart(context, {
      type: "line",
      data: chartData,
      options: {
        responsive: true,
        scales: {
          xAxes: [
            {
              display: true,
              ticks: {
                reverse: true,
              },
            },
          ],
          yAxes: [
            {
              display: true,
            },
          ],
        },
      },
    });

    setChartInstance(Newchart);
  }, [completed]);

  return (
    <Box w="70%" m="auto">
      <canvas
        style={{
          border: "20px solid #000",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.4)",
          padding: "20px",
        }}
        ref={chartRef}
      />
    </Box>
  );
};

export default LineChart;
