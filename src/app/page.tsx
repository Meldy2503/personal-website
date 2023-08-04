"use client";

import LandingPage from "./components/home/landing-page";
import Services from "./components/home/services";
import Projects from "./components/home/projects";
import ContactMe from "./components/home/contact-me";
import Recommendations from "./components/home/recommendations";
import TechStacks from "./components/home/tech-stacks";
import { Box, Flex } from "@chakra-ui/react";
import Footer from "./components/footer";
import AboutMe from "./components/home/about-me";

export default function Home() {
  return (
    <Box w="full" style={{ scrollBehavior: "smooth" }}>
      <LandingPage />
      <AboutMe />
      <Services />
      {/* <TechStacks /> */}
      <Projects />
      {/* <Recommendations /> */}
      <ContactMe
        py="2.5rem"
        shadow="lg"
        px={{ base: ".7rem", sm: "1.5rem", xl: "2.5rem" }}
      >
        Get in touch
      </ContactMe>
      <Footer />
    </Box>
  );
}
