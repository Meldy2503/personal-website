import React, { useState } from "react";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { Title } from "../utils/funcs";
import { TechStackData } from "../utils/constants";
import Image from "next/image";

const TechStacks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<any>(null);
  const { colorMode } = useColorMode();

  return (
    <Box id="stacks">
      <Title>Tech Stacks</Title>
      <Box overflow={"hidden"} position="relative" h="9.5rem">
        <Box className="scroll-container primary" pt=".7rem">
          {TechStackData.map((item, index) => (
            <Flex
              key={index}
              direction={"column"}
              w="10rem"
              px="3rem"
              py="1rem"
              shadow={"md"}
              bg={colorMode === "dark" ? "brand.650" : "brand.100"}
              mx="1rem"
              cursor="pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={item.src}
                alt={item.caption}
                height={300}
                width={300}
                style={{
                  width: "150px",
                  filter:
                    index === hoveredIndex ? "saturate(0)" : "saturate(1)",
                }}
              />
              <Text
                textAlign={"center"}
                mt="1rem"
                color={colorMode === "light" ? "brand.600" : "brand.900"}
              >
                {item.caption}
              </Text>{" "}
            </Flex>
          ))}
        </Box>
        <Box className="scroll-container secondary" pt=".7rem">
          {TechStackData.map((item, index) => (
            <Flex
              key={index}
              direction={"column"}
              shadow={"md"}
              w="10rem"
              px="3rem"
              py="1rem"
              bg={colorMode === "dark" ? "brand.650" : "brand.100"}
              mx="1rem"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={item.src}
                alt={item.caption}
                height={300}
                width={300}
                style={{
                  width: "150px",
                  filter:
                    index === hoveredIndex ? "saturate(0)" : "saturate(1)",
                }}
              />
              <Text
                textAlign={"center"}
                color={colorMode === "light" ? "brand.600" : "brand.900"}
                mt="1rem"
              >
                {item.caption}
              </Text>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TechStacks;
