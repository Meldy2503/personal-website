"use client";

import React from "react";
import Projects from "@/app/components/home/projects";
import { Box } from "@chakra-ui/react";

const AllProjects = () => {
  return (
    <Box w="full">
      <Projects />
      <Box>Other Projects</Box>
    </Box>
  );
};

export default AllProjects;
