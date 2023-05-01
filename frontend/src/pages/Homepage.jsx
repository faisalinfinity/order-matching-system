import React from "react";
import BuyersTable from "../components/BuyersTable";
import SellersTable from "../components/SellersTable";
import { Box } from "@chakra-ui/react";
import AddOrder from "../components/AddOrder";
import CompletedOrder from "../components/CompletedOrder";
import LineChart from "../components/Chart";

const Homepage = () => {
  return (
    <Box>
      <AddOrder />
      <Box mt="50px" mb="50px" display={"flex"} justifyContent={"space-around"}>
        <BuyersTable />
        <SellersTable />
        <CompletedOrder />
      </Box>
      <LineChart/>
    </Box>
  );
};

export default Homepage;
