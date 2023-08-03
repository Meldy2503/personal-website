"use client";

import React from "react";
import Projects from "@/app/components/home/projects";
import { Box } from "@chakra-ui/react";
import Footer from "@/app/components/footer";

const AllProjects = () => {
  return (
    <Box w="full">
      <Projects />
      <Box>Other Projects</Box>
      <Footer />
    </Box>
  );
};

export default AllProjects;
