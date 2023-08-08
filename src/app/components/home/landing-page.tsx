"use client";

import React from "react";
import { Box, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import { Btn } from "../button";
import Typewriter from "typewriter-effect";

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
          left={{ base: "15px", md: "35px" }}
          right={{ base: "15px", md: "35px" }}
          bottom="0px"
          h="fit-content"
        >
          <Box h="100%" bg={colorMode === "dark" ? "brand.980" : "brand.990"}>
            <Flex
              justify={{ base: "center", xl: "space-between" }}
              align={"center"}
            >
              <Box
                py={{ base: "2.5rem", sm: "3rem", md: "4rem" }}
                px={{ base: "1rem", sm: "2rem", md: "3.5rem" }}
                w={{ base: "100%", xl: "60%" }}
              >
                <Heading
                  color="brand.100"
                  fontWeight={"900"}
                  fontSize={{ base: "2.3rem", sm: "2.5rem", md: "2.7rem" }}
                >
                  Discover my Amazing Art Space!
                </Heading>
                <Flex my="1.5rem" color="brand.150">
                  <Text color="brand.800">{"<>"}</Text>
                  <Typewriter
                    options={{
                      strings: [
                        " I build visually appealing websites",
                        "I develop dynamic, scalable web applications",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                  <Text color="brand.800">{"</>"}</Text>
                </Flex>
                <Btn href="/">Explore now</Btn>
              </Box>
              <Box w="40%" display={{ base: "none", xl: "block" }}>
                <Image
                  src="/assets/face-2.png"
                  alt="Picture of the author"
                  height={380}
                  width={380}
                  style={{
                    position: "absolute",
                    right: "0px",
                    bottom: "0px",
                  }}
                />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
