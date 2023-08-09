"use client";

import React, { useState } from "react";
import Projects from "@/app/components/home/projects";
import { Box, Flex, Heading, useColorMode } from "@chakra-ui/react";
import Footer from "@/app/components/footer";
import { Back } from "@/app/components/utils/funcs";
import { otherProjects } from "@/app/components/utils/constants";
import Image from "next/image";
import ShowDetails from "@/app/components/show-details";

const AllProjects = () => {
  const { colorMode } = useColorMode();
  const [showDetails, setShowDetails] = useState(null);
  const handleMouseEnter = (index: any) => {
    setShowDetails(index);
  };

  const handleMouseLeave = () => {
    setShowDetails(null);
  };

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
      <Box>
        <Heading
          color={colorMode === "dark" ? "brand.100" : "brand.450"}
          fontWeight={"600"}
          fontSize={"1.1rem"}
          mt={{ base: "5rem", md: "7rem" }}
          mb="2rem"
        >
          Other Projects
        </Heading>
        <Flex flexWrap={"wrap"} columnGap={"1.3rem"} rowGap="1.5rem">
          {otherProjects.map((list, index) => {
            return (
              <Box
                key={list.id}
                position="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                w={{ base: "100%", md: "48%", xl: "31.5%" }}
                shadow={"md"}
                bg={colorMode === "dark" ? "brand.450" : "brand.100"}
              >
                <Image
                  src={list.img}
                  height={500}
                  width={800}
                  alt="picture of this project"
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                    height: "300px",
                    width: "100%",
                    maxWidth: "100%",
                    padding: "1rem",
                  }}
                />
                {showDetails === index && (
                  <ShowDetails
                    heading={list.heading}
                    brief={list.brief}
                    justify="space-between"
                  >
                    <a href={list.gitlink} target="_blank" rel="noreferrer">
                      {" "}
                      GITHUB{" "}
                    </a>
                    <a href={list.live} target="_blank" rel="noreferrer">
                      {" "}
                      PREVIEW{" "}
                    </a>
                  </ShowDetails>
                )}
              </Box>
            );
          })}
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default AllProjects;
