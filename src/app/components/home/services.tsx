import React from "react";
import { Box, Flex, Icon, Text, useColorMode } from "@chakra-ui/react";
import { servicesData } from "../utils/constants";
import { Title } from "../utils/funcs";

const Services = () => {
  const { colorMode } = useColorMode();
  return (
    <Box color={colorMode === "dark" ? "brand.350" : "brand.380"} id="services">
      <Title>My Services</Title>
      <Flex justify={"space-between"} flexWrap={"wrap"} rowGap={"1.5rem"}>
        {servicesData.map((item) => {
          return (
            <Box
              key={item.id}
              shadow={"md"}
              w={{ base: "100%", md: "48%", xl: "31.5%" }}
              _hover={{ transform: "scale(1.05)" }}
              transition={"0.3s"}
              bg={colorMode === "dark" ? "brand.650" : "brand.100"}
            >
              <Box px="2rem" py="2.5rem">
                <Flex
                  borderRadius={"50%"}
                  bgColor={colorMode === "dark" ? "brand.550" : "brand.220"}
                  w="4rem"
                  h="4rem"
                  p="1rem"
                  align={"center"}
                  justify="center"
                >
                  <Icon
                    as={item.icon}
                    color={colorMode === "dark" ? "brand.800" : "brand.850"}
                    boxSize={6}
                  />
                </Flex>
                <Text
                  fontSize={"1rem"}
                  color={colorMode === "dark" ? "brand.220" : "brand.980"}
                  fontWeight={colorMode === "dark" ? "500" : "600"}
                  my="1rem"
                >
                  {item.heading}
                </Text>
                <Text fontSize={".95rem"}>{item.text}</Text>
              </Box>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Services;
