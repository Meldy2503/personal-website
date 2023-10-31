import React from "react";
import { Box, Icon, Heading, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { BsArrowLeftSquare } from "react-icons/bs";

export const Back = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  return (
    <Box onClick={() => router.back()} mt=".3rem" cursor="pointer">
      <Icon
        as={BsArrowLeftSquare}
        boxSize={6}
        color={colorMode === "dark" ? "brand.150" : "brand.450"}
        _hover={{ color: colorMode === "dark" ? "brand.800" : "brand.850" }}
      />
    </Box>
  );
};
export const Title = ({ children }: { children: React.ReactNode }) => {
  const { colorMode } = useColorMode();
  return (
    <Heading
      color={colorMode === "dark" ? "brand.220" : "brand.980"}
      fontWeight={"600"}
      fontSize={"1.3rem"}
      mt={{ base: "5rem", md: "7rem" }}
      mb="1rem"
    >
      {children}
    </Heading>
  );
};
