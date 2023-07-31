"use client";

import React, { useState } from "react";
import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { projectData } from "../utils/constants";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

const Projects = () => {
  const [showDetails, setShowDetails] = useState(null);

  const handleMouseEnter = (index: any) => {
    setShowDetails(index);
  };

  const handleMouseLeave = () => {
    setShowDetails(null);
  };

  return (
    <Box px="2.5rem">
      <Heading
        color="brand.100"
        fontWeight={"600"}
        fontSize={"1.3rem"}
        mt="3rem"
        mb="2rem"
      >
        My Projects
      </Heading>
      <Flex flexWrap={"wrap"} justify={"space-between"} rowGap={"1.5rem"}>
        {projectData.map((project, index) => {
          return (
            <Box
              key={project.id}
              w={{ base: "100%", md: "46%", lg: "31%" }}
              position="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={project.img}
                height={500}
                width={500}
                alt="picture of this project"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  height: "300px",
                  backgroundImage:
                    "linear-gradient(159deg,rgba(45,45,58,.98) 0%,rgba(43,43,53,.98) 100%)",
                }}
              />
              {showDetails === index && (
                <Box
                  fontSize={".9rem"}
                  position={"absolute"}
                  bottom={"0"}
                  px="1.5rem"
                  py="2rem"
                  style={{
                    backgroundImage:
                      "linear-gradient(159deg,rgba(45,45,58,.98) 0%,rgba(43,43,53,.98) 100%)",
                  }}
                >
                  <Heading color="brand.150" fontSize={".9rem"}>
                    Fitness Trainer UI Card
                  </Heading>
                  <Text color="brand.350" my="1rem">
                    My job is simple and sophisticated, so it is possible to
                    describe.
                  </Text>
                  <HStack
                    color="brand.800"
                    letterSpacing={".1rem"}
                    fontWeight={"bold"}
                    fontSize={".8rem"}
                  >
                    <Link href="/">READ MORE </Link>
                    <FaAngleDoubleRight />
                  </HStack>
                </Box>
              )}
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Projects;
