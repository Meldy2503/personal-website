"use client";

import React, { useState } from "react";
import {
  Box,
  Center,
  Flex,
  List,
  ListItem,
  useColorMode,
  Slide,
  useDisclosure,
} from "@chakra-ui/react";
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
              overflow={"hidden"}
              bg={colorMode === "dark" ? "brand.450" : "brand.150"}
            >
              {/* <Box className={showDetails === index ? "zoom-in" : "zoom-out"}> */}
              <Image
                src={project.img}
                height={500}
                width={800}
                alt="picture of this project"
                style={{
                  position: "relative",
                  objectFit: "cover",
                  objectPosition: "top",
                  height: "300px",
                  width: "100%",
                  maxWidth: "100%",
                  padding: "1rem",
                }}
              />
              <Box
                h="90%"
                w={{ base: "93%", sm: "96%", md: "90%" }}
                mx="auto"
                position={"absolute"}
                top="1rem"
                bottom="1rem"
                left={{ base: ".6rem", md: "1rem" }}
                right={{ base: "1rem", md: "1rem" }}
                bg="brand.970"
              />
              {/* </Box> */}
              <ShowDetails
                heading={project.heading}
                brief={project.brief}
                className={showDetails === index ? "slide-in" : "slide-down"}
              >
                <Link href={`/pages/${project.id}`}> READ MORE </Link>

                <FaAngleDoubleRight />
              </ShowDetails>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Projects;
