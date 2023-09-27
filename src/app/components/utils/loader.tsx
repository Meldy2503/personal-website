"use client";

import { Box, Flex, Text } from "@chakra-ui/react";

const LoadingIcon = () => {
  return (
    <Box bg="brand.550" h={"100%"}>
      <Flex
        align={"center"}
        justify={"center"}
        direction={"column"}
        h="100%"
        mx="auto"
        px="2rem"
      >
        <Text
          textAlign="center"
          color="whitesmoke"
          mt={6}
          fontSize="lg"
          mb="2rem"
          fontWeight={"light"}
        >
          &#128525;Hello..., I&apos;m delighted to have you here.
        </Text>

        <Box>
          <Box className="ring">
            Loading
            <div className="circle"></div>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default LoadingIcon;
