"use client";

import React from "react";
import { Box } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box
      w="18rem"
      bg="red"
      h="100%"
      position="sticky"
      top="0px"
      className="scroll-bar"
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
