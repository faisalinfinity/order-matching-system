import React from "react";
import BuyersTable from "../components/BuyersTable";
import SellersTable from "../components/SellersTable";
import { Box } from "@chakra-ui/react";
import AddOrder from "../components/AddOrder";
import CompletedOrder from "../components/CompletedOrder";
import LineChart from "../components/Chart";

//Mainpage 
const Homepage = () => {
  return (
    <Box>
        {/* wrapping all components */}
      <AddOrder />
      <Box
        mt="50px"
        mb="50px"
        display={"flex"}
        justifyContent={"space-around"}
        flexDirection={{ base: "column", sm: "column", md: "row" }}
      >
        <BuyersTable />
        <SellersTable />
        <CompletedOrder />
      </Box>
      <LineChart />
    </Box>
  );
};

export default Homepage;
