"use client";

import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Button from "../button";

const LandingPage = () => {
  return (
    <Box
      id="home"
      bgImage="/assets/bg.jpg"
      h="25rem"
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={"center"}
      position="relative"
    >
      <Box
        h="100%"
        style={{
          backgroundImage:
            "linear-gradient(180deg,rgba(30,30,40,.93) 0%,rgba(30,30,40,.96) 70%,rgba(30,30,40,1) 10%,#1e1e28 100%)",
        }}
      >
        <Box
          m="auto"
          bgImage="/assets/bg.jpg"
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
          bgPosition={"center"}
          position="absolute"
          top={{ base: "20px", md: "40px" }}
          left={{ base: "10px", sm: "24px", xl: "40px" }}
          right={{ base: "10px", sm: "24px", xl: "40px" }}
          bottom="0px"
          h="fit-content"
        >
          <Box
            h="100%"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(45,45,58,.9) 15%,rgba(45,45,58,.7) 50%,rgba(43,43,53,.7) 100%)",
            }}
          >
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
                <Text my="1.5rem">I build.....</Text>
                <Button href="/">Explore now</Button>
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
