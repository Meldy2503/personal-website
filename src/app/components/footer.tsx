"use-client";

import React from "react";
import { Flex, Text, useColorMode } from "@chakra-ui/react";

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      bg={colorMode === "dark" ? "brand.450" : "brand.100"}
      py="1rem"
      justify={"center"}
      align={"center"}
      color={colorMode === "dark" ? "brand.350" : "brand.380"}
      fontSize={".9rem"}
      direction="column"
      mt="2rem"
      gap=".2rem"
      textAlign={"center"}
      shadow={"md"}
    >
      <Text>© 2023 All Rights Reserved.</Text>
      <Text>Email: emelder.charles25@gmail.com</Text>
    </Flex>
  );
};

export default Footer;
