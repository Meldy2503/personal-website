import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Title } from "../utils/funcs";
import { TechStackData } from "../utils/constants";
import Image from "next/image";

const TechStacks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<any>(null);

  return (
    <Box mx={{ base: ".7rem", sm: "1.5rem", xl: "2.5rem" }}>
      <Title>Tech Stack</Title>
      <Box overflow={"hidden"} id="stacks" position="relative" h="10rem">
        <Box className="scroll-container primary">
          {TechStackData.map((item, index) => (
            <Flex
              key={index}
              direction={"column"}
              w="7rem"
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
                  width: "200px",
                  filter:
                    index === hoveredIndex ? "saturate(1)" : "saturate(0)",
                }}
              />
              <Text textAlign={"center"} color={"brand.900"} mt="1rem">
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
              w="7rem"
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
                  width: "200px",
                  filter:
                    index === hoveredIndex ? "saturate(1)" : "saturate(0)",
                }}
              />
              <Text textAlign={"center"} color={"brand.900"} mt="1rem">
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
