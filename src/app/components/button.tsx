"use client";
import React from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/react";

interface Props {
  href: string;
  hoverBg?: string;
  hoverColor?: string;
  children: React.ReactNode;
}

const Button = ({ href, hoverBg, hoverColor, children }: Props) => {
  return (
    <Link href={href}>
      <Box
        textAlign="center"
        fontSize=".8rem"
        fontWeight={600}
        px="1rem"
        py=".9rem"
        w="11rem"
        bg="brand.800"
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

export default Button;
