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
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import { projectData } from "../utils/constants";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Projects = () => {
  const [showDetails, setShowDetails] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL CATEGORIES");
  const { colorMode } = useColorMode();
  const activeColorScheme = colorMode === "dark" ? "brand.150" : "brand.600";

  const path = usePathname();

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
    <Box id="projects" bg={colorMode === "dark" ? "brand.960" : "brand.300"}>
      <List
        as={Flex}
        color="brand.350"
        rowGap=".7rem"
        columnGap="1.5rem"
        letterSpacing={".1rem"}
        fontWeight={"700"}
        fontSize={".8rem"}
        flexWrap={"wrap"}
        pb="1.5rem"
        pt=".5rem"
        cursor={"pointer"}
      >
        <ListItem
          onClick={() => handleSelectedCategory("ALL CATEGORIES")}
          color={
            selectedCategory === "ALL CATEGORIES"
              ? activeColorScheme
              : "brand.350"
          }
        >
          ALL CATEGORIES
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
            {category}
          </ListItem>
        ))}
      </List>

      <Flex flexWrap={"wrap"} justify={"space-between"} rowGap="1.5rem">
        {filteredProjects.map((project: any, index: any) => {
          return (
            <Box
              key={project.id}
              position="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              w={{ base: "100%", md: "48%", xl: "31.5%" }}
            >
              <Image
                src={project.img}
                height={500}
                width={800}
                alt="picture of this project"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  height: "280px",
                  maxWidth: "100%",
                }}
              />
              {showDetails === index && (
                <Box
                  fontSize={".9rem"}
                  position={"absolute"}
                  bottom={"0"}
                  px="1.5rem"
                  py="2rem"
                  bg={colorMode === "dark" ? "brand.720" : "brand.150"}
                >
                  <Heading
                    color={colorMode === "dark" ? "brand.150" : "brand.600"}
                    fontSize={".9rem"}
                  >
                    {project.heading}
                  </Heading>
                  <Text
                    color={colorMode === "dark" ? "brand.350" : "brand.380"}
                    my="1rem"
                  >
                    {project.brief}
                  </Text>
                  <HStack
                    color={colorMode === "dark" ? "brand.800" : "brand.850"}
                    letterSpacing={".1rem"}
                    fontWeight={"bold"}
                    fontSize={".8rem"}
                  >
                    <Link href={`/pages/${project.id}`}> READ MORE </Link>

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
