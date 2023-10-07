"use client";

import { Box, Flex, useColorMode, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { DesktopNav, MobileNav } from "./navbar";
import Sidebar from "./sidebar";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");
  const [isTablet] = useMediaQuery("(max-width: 1250px)");

  return (
    <Flex py=".8rem" maxW="1440px" mx="auto" position={"relative"}>
      <Flex position={"absolute"} w={isMobile ? "100%" : "30%"}>
        <Box w={isMobile ? "100%" : ""}>{isMobile && <MobileNav />}</Box>
        <Box>
          {!isMobile && (
            <Sidebar w={isMobile ? "100%" : isTablet ? "16rem" : "19rem"} />
          )}
        </Box>
      </Flex>
      <Flex
        w={isMobile ? "100%" : isTablet ? "77%" : "77%"}
        position={"absolute"}
        right="0px"
      >
        <Box>{children}</Box>
        <Box w="10rem">{!isMobile && <DesktopNav />}</Box>
      </Flex>
    </Flex>
  );
};

export default Wrapper;
