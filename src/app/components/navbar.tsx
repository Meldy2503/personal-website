import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export const DesktopNav = () => {
  return (
    <Box
      w="fit-content"
      bg="brand.600"
      h="100%"
      position="sticky"
      top="0px"
      left="10px"
      className="scroll-bar"
      shadow={"md"}
    >
      <Flex bg="brand.500" w="100%" h="4rem" align={"center"}>
        <Text p="1.2rem" color="brand.350">
          hhh
        </Text>
      </Flex>
    </Box>
  );
};
export const MobileNav = () => {
  return (
    <Box
      w="100%"
      zIndex="100"
      p="1.2rem"
      bg="brand.600"
      position="sticky"
      top="0px"
      left="0px"
      className="scroll-bar"
      shadow={"md"}
    >
      <Text>hhh</Text>
    </Box>
  );
};
