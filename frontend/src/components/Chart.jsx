import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";
import {
  Box,
  Heading,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineStock } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
import { BiDoughnutChart } from "react-icons/bi";
import { TiChartPieOutline } from "react-icons/ti";
const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const LineChart = () => {
  const chartRef = useRef(null);
  const [chartType, setchartType] = useState("line");
  const { completed } = useSelector((s) => s.orderReducer);
  const [chartInstance, setChartInstance] = useState(null);
  const [chartWidth, setChartWidth] = useState("70%");
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
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(75, 192, 192)",
            "rgb(255, 205, 86)",
            "rgb(201, 203, 207)",
            "rgb(54, 162, 235)",
          ],
          fill: true,
        },
      ],
    };

    if (chartInstance) {
      chartInstance.destroy();
    }

    const Newchart = new Chart(context, {
      type: chartType,
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
  }, [completed, chartType]);

  return (
    <Box
      bg={useColorModeValue("transparent", "transparent")}
      display={"flex"}
      flexDirection={"column"}
      gap="10px"
      w={{ base: "90%", sm: "90%", md: "80%", lg: chartWidth }}
      m="auto"
    >
      <Box
        mb="10px"
        display={"flex"}
        fontSize={"30px"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"5px"}
        p="20px"
        bgColor="none"
      >
        <IconButton
          color={"#ffa91b"}
          onClick={() => {
            setChartWidth("70%");
            setchartType("line");
          }}
          fontSize={"30px"}
          icon={<AiOutlineStock />}
        ></IconButton>
        <IconButton
          color={"#027bff"}
          onClick={() => {
            setChartWidth("70%");
            setchartType("bar");
          }}
          fontSize={"30px"}
          icon={<BsFillBarChartFill />}
        ></IconButton>
        <IconButton
          color={"#1dbf73"}
          onClick={() => {
            setchartType("doughnut");
            setChartWidth("50%");
          }}
          fontSize={"30px"}
          icon={<BiDoughnutChart />}
        ></IconButton>
        <IconButton
          color={"#d9114e"}
          onClick={() => {
            setchartType("polarArea");
            setChartWidth("50%");
          }}
          fontSize={"30px"}
          icon={<TiChartPieOutline />}
        ></IconButton>
      </Box>
      <Text textAlign={"center"}>Click to change chart style </Text>
      <canvas
        style={{
          border: "20px solid #000",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.4)",
          padding: "20px",
          backgroundColor: useColorModeValue("white", "black"),
          borderRadius:"25px"
        }}
        ref={chartRef}
      />
      <Heading fontSize={"20px"} mb="50px" textAlign={"center"}>
        Matching Order Chart
      </Heading>
    </Box>
  );
};

export default LineChart;
