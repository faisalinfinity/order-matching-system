import React from "react";
import BuyersTable from "../components/BuyersTable";
import SellersTable from "../components/SellersTable";
import { Box } from "@chakra-ui/react";
import AddOrder from "../components/AddOrder";
import CompletedOrder from "../components/CompletedOrder";

const Homepage = () => {
  return (
    <Box>
        <AddOrder/>
      <Box display={"flex"} justifyContent={"space-around"}>
        <BuyersTable />
        <SellersTable />
        <CompletedOrder/>
      </Box>
    </Box>
  );
};

export default Homepage;