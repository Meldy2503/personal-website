/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const AboutMe = () => {
  const { colorMode } = useColorMode();
  return (
    <Box id="about" color={colorMode === "dark" ? "brand.350" : "brand.380"}>
      <Flex
        justify={"space-between"}
        direction={{ base: "column", md: "row" }}
        mt={{ base: "2rem", md: "5rem" }}
      >
        <Box w={{ base: "100%", md: "40%" }}>
          <Heading
            fontSize={"1.3rem"}
            color={colorMode === "dark" ? "brand.220" : "brand.980"}
          >
            Any Type of Question & Discussion
          </Heading>
          <HStack
            columnGap={"2rem"}
            mt="1rem"
            mb={{ base: "1rem", md: "2.5rem" }}
          >
            <Text w="fit-content">Let's Talk</Text>
            <Box
              bgColor={colorMode === "dark" ? "brand.800" : "brand.850"}
              h=".2rem"
              w={{ base: "50%", lg: "55%" }}
              borderRadius={"1rem"}
            />
          </HStack>
          <Heading
            fontSize={{ base: "1rem", sm: "1.05rem" }}
            color={colorMode === "dark" ? "brand.800" : "brand.850"}
            fontWeight={"550"}
          >
            <a
              href="mailto:emelder.charles25@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              emelder.charles25@gmail.com
            </a>
          </Heading>
          <HStack my=".7rem">
            <Text color={colorMode === "dark" ? "brand.350" : "brand.380"}>
              LinkedIn:
            </Text>
            <a
              href="https://www.linkedin.com/in/emelder-okafor-67b22122b/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: colorMode === "dark" ? "#d0d0d0" : "#333",
                textDecoration: "underline",
              }}
            >
              Emelder Okafor{" "}
            </a>
          </HStack>
          <HStack>
            <Text color={colorMode === "dark" ? "brand.350" : "brand.380"}>
              Github:
            </Text>
            <a
              href="https://github.com/Meldy2503 "
              target="_blank"
              rel="noreferrer"
              style={{
                color: colorMode === "dark" ? "#d0d0d0" : "#333",
                textDecoration: "underline",
              }}
            >
              Meldy2503
            </a>
          </HStack>
        </Box>
        <Box w={{ base: "100%", md: "56%" }}>
          <Heading
            fontSize={"1.3rem"}
            mt={{ base: "3rem", md: "0rem" }}
            mb=".8rem"
            color={colorMode === "dark" ? "brand.220" : "brand.980"}
          >
            Get to Know me
          </Heading>
          <Text
            color={colorMode === "dark" ? "brand.350" : "brand.380"}
            fontSize={".98rem"}
            lineHeight={1.6}
          >
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
