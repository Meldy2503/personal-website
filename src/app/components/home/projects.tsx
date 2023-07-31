"use client";

import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { projectData } from "../utils/constants";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

const Projects = () => {
  const [showDetails, setShowDetails] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL CATEGORIES");
  const activeColorScheme = useColorModeValue("brand.150", "brand.350");

  const handleMouseEnter = (index: any) => {
    setShowDetails(index);
  };

  const handleMouseLeave = () => {
    setShowDetails(null);
  };

  const handleSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "ALL CATEGORIES"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

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

      <List
        as={Flex}
        color="brand.350"
        rowGap=".5rem"
        columnGap="1.2rem"
        letterSpacing={".1rem"}
        fontWeight={"bold"}
        fontSize={".8rem"}
        flexWrap={"wrap"}
        pb="1.5rem"
        pt=".5rem"
      >
        <ListItem
          onClick={() => handleSelectedCategory("ALL CATEGORIES")}
          color={
            selectedCategory === "ALL CATEGORIES"
              ? activeColorScheme
              : undefined
          }
        >
          <Link href="/">ALL CATEGORIES</Link>
        </ListItem>
        {Array.from(
          new Set(projectData.map((project) => project.category))
        ).map((category) => (
          <ListItem
            key={category}
            color={
              selectedCategory === category ? activeColorScheme : undefined
            }
            onClick={() => handleSelectedCategory(category)}
          >
            <Link href="/">{category}</Link>
          </ListItem>
        ))}
      </List>

      <Flex flexWrap={"wrap"} gap={"1.5rem"} justify={"space-between"}>
        {filteredProjects.map((project: any, index: any) => {
          return (
            <Box
              key={project.id}
              position="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              w={{ base: "100%", md: "47%", lg: "31.5%" }}
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
                    {project.heading}
                  </Heading>
                  <Text color="brand.350" my="1rem">
                    {project.description}
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
