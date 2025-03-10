"use client";

import { Box, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import ShowDetails from "../show-details";
import { projectData } from "../utils/constants";

const Projects = () => {
  const [showDetails, setShowDetails] = useState(null);
  const pathname = usePathname();

  const { colorMode } = useColorMode();

  const handleMouseEnter = (index: any) => {
    setShowDetails(index);
  };

  const handleMouseLeave = () => {
    setShowDetails(null);
  };

  return (
    <Box bg={colorMode === "dark" ? "brand.960" : "brand.300"}>
      <Flex flexWrap={"wrap"} columnGap={"1.3rem"} rowGap="1.5rem">
        {projectData.map((project, index) => {
          return (
            <Box
              key={project.id}
              position="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              w={{ base: "100%", md: "48%" }}
              shadow={"md"}
              overflow={"hidden"}
              h="fit-content"
              bg={colorMode === "dark" ? "brand.450" : "brand.150"}
            >
              <Image
                src={project.img[0]}
                height={500}
                width={800}
                alt="picture of this project"
                style={{
                  position: "relative",
                  objectFit: "cover",
                  objectPosition: "top",
                  height: "235px",
                  width: "100%",
                  maxWidth: "100%",
                  padding: ".5rem",
                }}
              />
              <Box
                h="100%"
                w="100%"
                mx="auto"
                position={"absolute"}
                top="0rem"
                bg="brand.970"
              />
              <Box px="1rem" pb="1rem">
                <Heading
                  color={colorMode === "dark" ? "brand.150" : "brand.600"}
                  fontSize={"1rem"}
                  textAlign={"center"}
                >
                  {project.heading}{" "}
                </Heading>
              </Box>
              <Link href={`/pages/${project.id}`}>
                <ShowDetails
                  heading={project.heading}
                  brief={project.brief}
                  className={showDetails === index ? "slide-in" : "slide-down"}
                >
                  <Flex direction={"column"}>
                    <Flex align={"center"}>
                      <Text
                        fontSize={".9rem"}
                        color={colorMode === "dark" ? "brand.150" : "brand.600"}
                      >
                        TechStacks:
                      </Text>

                      {project.stacks?.map((stack, index) => {
                        return (
                          <Image
                            key={index}
                            src={stack}
                            height={500}
                            width={800}
                            alt="picture of this project"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                              width: "2.5rem",
                              maxWidth: "100%",
                              padding: ".5rem",
                            }}
                          />
                        );
                      })}
                    </Flex>
                    <Flex alignItems={"center"} mt="1rem">
                      <Link href={`/pages/${project.id}`}> READ MORE </Link>
                      <FaAngleDoubleRight />
                    </Flex>
                  </Flex>
                </ShowDetails>
              </Link>
            </Box>
          );
        })}
      </Flex>
      {pathname === "/" && (
        <Flex
          justify={"center"}
          align={"center"}
          gap=".5rem"
          mt="2rem"
          _hover={{
            color: colorMode === "dark" ? "brand.850" : "brand.800",
          }}
          color={colorMode === "dark" ? "brand.800" : "brand.850"}
        >
          <Link href="/pages/all-projects">View More</Link>
          <FaAngleDoubleRight />
        </Flex>
      )}
    </Box>
  );
};

export default Projects;
