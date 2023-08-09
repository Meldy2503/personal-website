"use client";

import React from "react";
import { Box, Flex, useMediaQuery, useColorMode } from "@chakra-ui/react";
import Sidebar from "./sidebar";
import { DesktopNav, MobileNav } from "./navbar";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [isMobile] = useMediaQuery("(max-width: 960px)");
  const { colorMode } = useColorMode();

  return (
    <Box bg={colorMode === "light" ? "brand.320" : "brand.750"} py=".8rem">
      {isMobile && <MobileNav />}
      <Flex
        w="95%"
        h={{ base: "98vh", md: "96.5vh" }}
        m="auto"
        bg={colorMode === "dark" ? "brand.960" : "brand.300"}
        overflow="auto"
        className="scroll-bar"
      >
        {!isMobile && <Sidebar w="23rem" />} {children}
        {!isMobile && <DesktopNav />}
      </Flex>
    </Box>
  );
};

export default Wrapper;
