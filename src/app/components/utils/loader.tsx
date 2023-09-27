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
