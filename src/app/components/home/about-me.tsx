/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Box
      id="about"
      color="brand.350"
      px={{ base: ".7rem", sm: "1.5rem", xl: "2.5rem" }}
      mt={{ base: "2rem", md: "5rem" }}
    >
      <Flex justify={"space-between"} direction={{ base: "column", md: "row" }}>
        <Box w={{ base: "100%", md: "40%" }}>
          <Heading fontSize={"1.3rem"} color="brand.100">
            Any Type of Question & Discussion
          </Heading>
          <HStack
            columnGap={"2rem"}
            mt="1rem"
            mb={{ base: "1rem", md: "2.5rem" }}
          >
            <Text w="fit-content">Let's Talk</Text>
            <Box
              bgColor="brand.800"
              color="brand.800"
              h=".2rem"
              w={{ base: "50%", lg: "55%" }}
              borderRadius={"1rem"}
            />
          </HStack>
          <Heading fontSize={"1.1rem"} color="brand.800" fontWeight={"700"}>
            emelder.charles25@gmail.com
          </Heading>
          <Text my="1rem">LinkedIn: Emelder Okafor </Text>
          <Text>Github: Meldy2503</Text>
        </Box>
        <Box w={{ base: "100%", md: "56%" }}>
          <Heading
            fontSize={"1.3rem"}
            mt={{ base: "3rem", md: "0rem" }}
            mb=".8rem"
            color="brand.100"
          >
            Get to Know me
          </Heading>
          <Text color="brand.350" fontSize={".95rem"} lineHeight={1.6}>
            I'm a success driven and determined frontend developer who loves
            creating maintainable and responsive applcations using React,
            Nextjs, JS(ES6), Typescript and other technologies for developing
            user friendly interfaces. I have a good understanding of relational
            databases as well as solid computer software foundations such as DOM
            manipulations. I'm a team player, a fast learner and I have
            excellent communication skills in English.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutMe;
