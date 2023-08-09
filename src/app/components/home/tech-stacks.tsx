import React, { useState } from "react";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { Title } from "../utils/funcs";
import { TechStackData } from "../utils/constants";
import Image from "next/image";

const TechStacks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<any>(null);
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Title>Tech Stack</Title>
      <Box overflow={"hidden"} id="stacks" position="relative" h="8.5rem">
        <Box className="scroll-container primary">
          {TechStackData.map((item, index) => (
            <Flex
              key={index}
              direction={"column"}
              w="5.5rem"
              mx="1.5rem"
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
                    index === hoveredIndex
                      ? "saturate(1)"
                      : "saturate(0) contrast(130%)",
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
        <Box className="scroll-container secondary">
          {TechStackData.map((item, index) => (
            <Flex
              key={index}
              direction={"column"}
              w="5.5rem"
              mx="1.5rem"
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
                    index === hoveredIndex
                      ? "saturate(1) contrast(10px)"
                      : "saturate(0) contrast(130%)",
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
