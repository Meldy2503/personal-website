import React, { useState } from "react";
import { Box, HStack, Heading, Text, useColorMode } from "@chakra-ui/react";

interface Props {
  heading?: any;
  brief?: any;
  justify?: string;
  children: React.ReactNode;
  className?: any;
}
const ShowDetails = ({
  heading,
  brief,
  justify,
  children,
  className,
}: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      className={className}
      fontSize={".9rem"}
      position={"absolute"}
      bottom={"0"}
      p="1rem"
      bg={colorMode === "dark" ? "brand.450" : "brand.300"}
      shadow="md"
    >
      <Heading
        color={colorMode === "dark" ? "brand.150" : "brand.600"}
        fontSize={"1rem"}
      >
        {heading}
      </Heading>
      <Text color={colorMode === "dark" ? "brand.350" : "brand.380"} my="1rem">
        {brief}
      </Text>
      <HStack
        color={colorMode === "dark" ? "brand.800" : "brand.850"}
        letterSpacing={".1rem"}
        fontWeight={"bold"}
        fontSize={".8rem"}
        justify={justify}
        alignItems="center"
      >
        {children}
      </HStack>
    </Box>
  );
};

export default ShowDetails;
