"use client";
import React from "react";
import Link from "next/link";
import { Box, useColorMode, Button } from "@chakra-ui/react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";

interface Props {
  href: string;
  children: React.ReactNode;
}
interface BtnProps {
  children: React.ReactNode;
  type?: any;
  loading?: boolean;
  onClick?: () => void;
}

export const Btn = ({ href, children }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Link href={href}>
      <Box
        className="pulse"
        textAlign="center"
        fontSize=".8rem"
        fontWeight={"600"}
        px="1rem"
        py=".9rem"
        w="11rem"
        bg={colorMode === "dark" ? "brand.800" : "brand.850"}
        color={colorMode === "dark" ? "brand.600" : "brand.150"}
        letterSpacing={".1rem"}
        textTransform={"uppercase"}
        _hover={{
          textDecoration: "none",
          bg: colorMode === "dark" ? "yellow.500" : "orange.600",
        }}
        _active={{ transform: "translateY(1px)" }}
      >
        {children}
      </Box>
    </Link>
  );
};
export const Buttn = ({ children, onClick, type, loading }: BtnProps) => {
  const { colorMode } = useColorMode();

  return (
    <Button
      className="pulse"
      textAlign="center"
      fontSize=".8rem"
      fontWeight={"600"}
      borderRadius={"0px"}
      transition={"all .3s ease-in"}
      isLoading={loading}
      px="1rem"
      py=".9rem"
      w="11rem"
      type={type}
      onClick={onClick}
      bg={colorMode === "dark" ? "brand.800" : "brand.850"}
      color={colorMode === "dark" ? "brand.600" : "brand.150"}
      letterSpacing={".1rem"}
      textTransform={"uppercase"}
      _hover={{
        textDecoration: "none",
        bg: colorMode === "dark" ? "yellow.500" : "orange.600",
      }}
      _active={{ transform: "translateY(1px)" }}
    >
      {children}
    </Button>
  );
};

export const ColorModeBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      aria-label="Toggle Color Mode"
      onClick={toggleColorMode}
      _focus={{ boxShadow: "none" }}
      _active={{ transform: "translateY(1px)" }}
      w="fit-content"
      bg="transparent"
    >
      {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
    </Button>
  );
};
