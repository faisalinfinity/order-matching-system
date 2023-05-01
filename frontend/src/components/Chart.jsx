import React, { useEffect, useRef, useState } from "react";
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

//Chart Component
const LineChart = () => {
  //Initializing canvas ref.
  const chartRef = useRef(null);
  const [chartType, setchartType] = useState("line");

  //importing completed[] from redux store for dynamic chart
  const { completed } = useSelector((s) => s.orderReducer);
  //Initializing chartInstance
  const [chartInstance, setChartInstance] = useState(null);
  const [chartWidth, setChartWidth] = useState("70%");

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) return;

    //creating context for 2d canvas
    const context = chart.getContext("2d");
    if (!context) return;

    //customizing chartData a/c to Chart.js  official Docs
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

    //destroying or removing multiple Instances of canvas
    if (chartInstance) {
      chartInstance.destroy();
    }

    //Creating new chart from Chart constructor class
    const Newchart = new Chart(context, {
      type: chartType,
      data: chartData,

      options: {
        responsive: true,
      },
    });
    //setting every chart instances
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
            //changing chart type when click event triggered
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
      {/* Stylying canvas */}
      <canvas
        style={{
          border: "20px solid #000",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.4)",
          padding: "20px",
          backgroundColor: useColorModeValue("white", "black"),
          borderRadius: "25px",
        }}
        ref={chartRef}
      />
      <Heading fontSize={"20px"} mb="50px" textAlign={"center"}>
       Dynamic Matching Order Chart
      </Heading>
    </Box>
  );
};

export default LineChart;
