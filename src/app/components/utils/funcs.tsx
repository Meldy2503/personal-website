import React from "react";
import { Box, Icon, Heading } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { BsArrowLeftSquare } from "react-icons/bs";

export const Back = () => {
  const router = useRouter();

  return (
    <Box onClick={() => router.back()} mt="1.2rem" cursor="pointer">
      <Icon
        as={BsArrowLeftSquare}
        boxSize={6}
        color="brand.150"
        _hover={{ color: "brand.800" }}
      />
    </Box>
  );
};
export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <Heading
      color="brand.100"
      fontWeight={"600"}
      fontSize={"1.3rem"}
      mt="3rem"
      mb="2rem"
    >
      {children}
    </Heading>
  );
};
