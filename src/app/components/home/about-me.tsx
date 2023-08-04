import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { Title } from "../utils/funcs";

const AboutMe = () => {
  return (
    <Box
      color="brand.350"
      px={{ base: ".7rem", sm: "1.5rem", xl: "2.5rem" }}
      id="services"
    >
      <Title>Get to Know Me</Title>
      <Flex justify={"space-between"} flexWrap={"wrap"} rowGap={"1.5rem"}>
        <Box w={{ base: "100%", md: "48%", xl: "31.5%" }} bg="brand.650"></Box>
        <Box px="2rem" py="2.5rem"></Box>
      </Flex>
    </Box>
  );
};

export default AboutMe;
