"use client";

import LandingPage from "./components/home/landing-page";
import Services from "./components/home/services";
import Projects from "./components/home/projects";
import ContactMe from "./components/home/contact-me";
import Recommendations from "./components/home/recommendations";
import TechStacks from "./components/home/tech-stacks";
import { Box, Flex } from "@chakra-ui/react";
import Footer from "./components/footer";

export default function Home() {
  return (
    <Box w="full" style={{ scrollBehavior: "smooth" }}>
      <LandingPage />
      <Services />
      {/* <TechStacks /> */}
      <Projects />
      {/* <Recommendations /> */}
      <ContactMe>Get in touch</ContactMe>
      <Footer />
    </Box>
  );
}
