"use client";
import React from "react";
import Link from "next/link";
import { Box, useColorMode, Button } from "@chakra-ui/react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";

interface Props {
  href: string;
  hoverBg?: string;
  hoverColor?: string;
  children: React.ReactNode;
}

export const Btn = ({ href, hoverBg, hoverColor, children }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Link href={href}>
      <Box
        textAlign="center"
        fontSize=".8rem"
        fontWeight={"600"}
        px="1rem"
        py=".9rem"
        w="11rem"
        bg={colorMode === "dark" ? "brand.800" : "brand.850"}
        letterSpacing={".1rem"}
        textTransform={"uppercase"}
        color="brand.600"
        _hover={{
          textDecoration: "none",
          bg: hoverBg,
          color: hoverColor,
        }}
      >
        {children}
      </Box>
    </Link>
  );
};

export const ColorModeBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      aria-label="Toggle Color Mode"
      onClick={toggleColorMode}
      _focus={{ boxShadow: "none" }}
      w="fit-content"
      bg="transparent"
    >
      {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
    </Button>
  );
};
