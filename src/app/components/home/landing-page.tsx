"use client";

import React from "react";
import { Box, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import { Btn } from "../button";
import Typewriter from "typewriter-effect";
import MainHeading from "../heading";

const LandingPage = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      id="home"
      bgImage="/assets/bg.jpg"
      h="24.5rem"
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={"center"}
      position="relative"
    >
      <Box bg={colorMode === "dark" ? "brand.960" : "brand.220"} h="100%">
        <Box
          m="auto"
          bgImage="/assets/bg.jpg"
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
          bgPosition={"center"}
          position="absolute"
          top={{ base: "20px", md: "40px" }}
          left={{ base: "15px", md: "30px" }}
          right={{ base: "15px", md: "30px" }}
          bottom="0px"
          h="fit-content"
        >
          <Box h="100%" bg={colorMode === "dark" ? "brand.980" : "brand.990"}>
            <Box
              py={{ base: "2.5rem", sm: "3rem", md: "4rem" }}
              px={{ base: "1rem", sm: "2rem", md: "3.5rem" }}
              w={{ base: "100%", xl: "80%" }}
            >
              <MainHeading />
              <Flex my="1.5rem" color="brand.150">
                <Text color={colorMode === "dark" ? "brand.800" : "brand.850"}>
                  {"<>"}
                </Text>
                <Typewriter
                  options={{
                    strings: [
                      "I Develop Dynamic",
                      "Scalable",
                      "User Friendly",
                      "Responsive",
                      "And Maintainable",
                      " Web Applications",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <Text color={colorMode === "dark" ? "brand.800" : "brand.850"}>
                  {"</>"}
                </Text>
              </Flex>
              <Btn href="/pages/all-projects">View Projects</Btn>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
