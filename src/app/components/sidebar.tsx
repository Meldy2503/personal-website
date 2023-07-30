"use client";

import React from "react";
import { Box } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box
      w="23rem"
      bg="brand.600"
      h="100%"
      position="sticky"
      top="0px"
      className="scroll-bar"
    >
      <Box
        style={{
          backgroundImage:
            "linear-gradient(159deg,rgba(37,37,50,.98) 0%,rgba(35,35,45,.98) 100%)",
        }}
        h="10rem"
      ></Box>
    </Box>
  );
};

export default Sidebar;
