"use-client";

import React from "react";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <>
    <Flex
      bg={colorMode === "dark" ? "brand.450" : "brand.100"}
      py="1rem"
      justify={"center"}
      align={"center"}
      color={colorMode === "dark" ? "brand.350" : "brand.380"}
      fontSize={".9rem"}
      direction="column"
      my="1rem"
      gap=".2rem"
      textAlign={"center"}
      shadow={"md"}
      >
      <Text>© 2023 All Rights Reserved.</Text>
      <Text>Email: emelder.charles25@gmail.com</Text>
    </Flex>
    <Box h='2rem'/>
      </>
  );
};

export default Footer;
