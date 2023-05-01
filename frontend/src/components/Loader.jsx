import { Box } from "@chakra-ui/react";
import React from "react";
import { ColorRing } from "react-loader-spinner";

//Loader component from external library
const Loader = () => {
  return (
    <Box
      m="auto"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <ColorRing
        visible={true}
        height="80"
        width="80"
        margin="auto"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#131927", "#12d9df", "#e81e62", "#2c4bff", "#00ff2a"]}
      />
    </Box>
  );
};

export default Loader;
