"use client";

import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { DesktopNav, MobileNav } from "./navbar";
import Sidebar from "./sidebar";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");
  const [isTablet] = useMediaQuery("(max-width: 1250px)");

  return (
    <Flex
      w="full"
      direction={isMobile ? "column" : "row"}
      justifyContent={"center"}
    >
      <Box w={isMobile ? "100%" : isTablet ? "16rem" : "19rem"}>
        {isMobile && <MobileNav />}
        {!isMobile && (
          <Sidebar w={isMobile ? "100%" : isTablet ? "16rem" : "19rem"} />
        )}
      </Box>
      <Box w={isMobile ? "100%" : "70%"}>{children}</Box>

      {!isMobile && (
        <Box w="5rem">
          <DesktopNav />
        </Box>
      )}
    </Flex>
  );
};

export default Wrapper;
