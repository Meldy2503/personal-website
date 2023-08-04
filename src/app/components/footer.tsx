"use-client";

import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      bg="brand.450"
      py="1rem"
      justify={"center"}
      align={"center"}
      color="brand.350"
      mx={{ base: ".7rem", sm: "1.5rem", xl: "2.5rem" }}
      fontSize={".85rem"}
      direction="column"
      mt="2rem"
      gap=".2rem"
      textAlign={"center"}
    >
      <Text>© 2023 All Rights Reserved.</Text>
      <Text>Email: emelder.charles25@gmail.com</Text>
    </Flex>
  );
};

export default Footer;
