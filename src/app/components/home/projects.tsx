"use client";

import React, { useState } from "react";
import { Box, Flex, List, ListItem, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import { projectData } from "../utils/constants";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
import ShowDetails from "../show-details";

const Projects = () => {
  const [showDetails, setShowDetails] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL CATEGORIES");
  const { colorMode } = useColorMode();
  const activeColorScheme = colorMode === "dark" ? "brand.150" : "brand.600";

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
        pb="2rem"
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

      <Flex flexWrap={"wrap"} columnGap={"1.3rem"} rowGap="1.5rem">
        {filteredProjects.map((project, index) => {
          return (
            <Box
              key={project.id}
              position="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              w={{ base: "100%", md: "48%", xl: "31.5%" }}
              shadow={"md"}
              bg={colorMode === "dark" ? "brand.450" : "brand.100"}
            >
              <Image
                src={project.img}
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
                <ShowDetails heading={project.heading} brief={project.brief}>
                  <Link href={`/pages/${project.id}`}> READ MORE </Link>

                  <FaAngleDoubleRight />
                </ShowDetails>
              )}
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Projects;
