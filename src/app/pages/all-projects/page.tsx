"use client";

import React from "react";
import Projects from "@/app/components/home/projects";
import { Box, Flex, Heading, useColorMode } from "@chakra-ui/react";
import Footer from "@/app/components/footer";
import { Back } from "@/app/components/utils/funcs";

const AllProjects = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      w="full"
      px={{ base: "15px", md: "35px" }}
      bg={colorMode === "dark" ? "brand.960" : "brand.300"}
    >
      <Flex align="center" gap="2rem" my={{ base: "1.5rem", md: "2rem" }}>
        <Back />
        <Heading
          color={colorMode === "dark" ? "brand.100" : "brand.450"}
          fontWeight={"600"}
          fontSize={"1.3rem"}
        >
          My Projects
        </Heading>
      </Flex>
      <Projects />
      <Box>Other Projects</Box>
      <Footer />
    </Box>
  );
};

export default AllProjects;
