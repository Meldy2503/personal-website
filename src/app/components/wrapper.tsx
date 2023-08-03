"use client";

import React from "react";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import Sidebar from "./sidebar";
import { DesktopNav, MobileNav } from "./navbar";
import Footer from "./footer";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [isMobile] = useMediaQuery("(max-width: 960px)");
  return (
    <Box h="100%">
      {isMobile && <MobileNav />}
      <Flex
        w="95%"
        h={{ base: "98vh", md: "96.5vh" }}
        m="auto"
        bg="brand.550"
        overflow="auto"
        my=".8rem"
        className="scroll-bar"
      >
        {!isMobile && (
          <Sidebar w="23rem" h="100%" position="sticky" top="0px" />
        )}{" "}
        {children}
        {!isMobile && <DesktopNav />}
      </Flex>
    </Box>
  );
};

export default Wrapper;
