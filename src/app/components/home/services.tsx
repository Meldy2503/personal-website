import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { servicesData } from "../utils/constants";
import { Title } from "../utils/funcs";

const Services = () => {
  return (
    <Box
      color="brand.350"
      px={{ base: ".7rem", sm: "1.5rem", xl: "2.5rem" }}
      id="services"
    >
      <Title>My Services</Title>
      <Flex justify={"space-between"} flexWrap={"wrap"} rowGap={"1.5rem"}>
        {servicesData.map((item) => {
          return (
            <Box
              key={item.id}
              w={{ base: "100%", md: "48%", xl: "31.5%" }}
              bg="brand.650"
            >
              <Box px="2rem" py="2.5rem">
                <Flex
                  borderRadius={"50%"}
                  bgColor="brand.550"
                  w="4rem"
                  h="4rem"
                  p="1rem"
                  align={"center"}
                  justify="center"
                >
                  <Icon as={item.icon} color="brand.800" boxSize={6} />
                </Flex>
                <Text
                  fontSize={"1.1rem"}
                  color="brand.150"
                  fontWeight={"500"}
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
