"use client";

import LandingPage from "./components/home/landing-page";
import Services from "./components/home/services";
import Projects from "./components/home/projects";
import ContactMe from "./components/home/contact-me";
import Recommendations from "./components/home/recommendations";
import TechStacks from "./components/home/tech-stacks";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import Footer from "./components/footer";
import AboutMe from "./components/home/about-me";
import { Title } from "./components/utils/funcs";

export default function Home() {
  const { colorMode } = useColorMode();

  return (
    <Box w="fit-content">
      <LandingPage />
      <Flex
        direction="column"
        color="rgb(240, 240, 246)"
        style={{ scrollBehavior: "smooth" }}
        position={"relative"}
        px={{ base: "15px", md: "30px" }}
        bg={colorMode === "dark" ? "brand.960" : "brand.300"}
      >
        <AboutMe />
        <Services />
        <TechStacks />
        <Box>
          <Title>My Projects</Title>
          <Projects />
        </Box>
        <Recommendations />
        <ContactMe py="2.5rem" shadow="md">
          Get in touch
        </ContactMe>
        <Footer />
      </Flex>
    </Box>
  );
}
