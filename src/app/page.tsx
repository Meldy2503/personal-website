"use client";

import LandingPage from "./components/home/landing-page";
import Services from "./components/home/services";
import Projects from "./components/home/projects";
import ContactMe from "./components/home/contact-me";
import Recommendations from "./components/home/recommendations";
import TechStacks from "./components/home/tech-stacks";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <Box bg="brand.750" h="100%">
      <Flex
        w="95%"
        h={{ base: "98vh", md: "96.5vh" }}
        m="auto"
        bg="brand.800"
        overflow={"auto"}
        my=".8rem"
        gap="2rem"
        className="scroll-bar"
      >
        <Sidebar />
        <Box w="full" h="200rem">
          <LandingPage />
          <Services />
          <TechStacks />
          <Projects />
          <Recommendations />
          <ContactMe />
        </Box>
      </Flex>
    </Box>
  );
}
