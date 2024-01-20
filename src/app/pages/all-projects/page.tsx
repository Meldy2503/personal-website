"use client";

import React, { useState } from "react";
import Projects from "@/app/components/home/projects";
import {
  Box,
  Flex,
  Heading,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import Footer from "@/app/components/footer";
import { Back } from "@/app/components/utils/funcs";
import { otherProjects } from "@/app/components/utils/constants";
import Image from "next/image";
import ShowDetails from "@/app/components/show-details";
import { ContactModal } from "@/app/components/contact-modal";

const AllProjects = () => {
  const { colorMode } = useColorMode();
  const [isMobile] = useMediaQuery("(max-width: 1024px)");
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
      mt={isMobile ? "4.5rem" : "0rem"}
      pt="1rem"
      px={{ base: "15px", md: "30px" }}
      bg={colorMode === "dark" ? "brand.960" : "brand.300"}
    >
      <Flex align="center" gap="2rem" my={{ base: "1.5rem", md: "2rem" }}>
        <Back />
        <Heading
          color={colorMode === "dark" ? "brand.220" : "brand.980"}
          fontWeight={"600"}
          fontSize={"1.3rem"}
        >
          My Projects
        </Heading>
      </Flex>
      <Projects />
      <Box>
        <Heading
          color={colorMode === "dark" ? "brand.220" : "brand.980"}
          fontWeight={"600"}
          fontSize={"1.3rem"}
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
                overflow={"hidden"}
                w={{ base: "100%", md: "48%" }}
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
                <ShowDetails
                  heading={list.heading}
                  brief={list.brief}
                  className={showDetails === index ? "slide-in" : "slide-down"}
                  justify="space-between"
                >
                  <Flex direction={'column'} w='100%'>
                    <Flex align={"center"}>
                      <Text
                        fontSize={".9rem"}
                        color={colorMode === "dark" ? "brand.150" : "brand.600"}
                      >
                        TechStacks:
                      </Text>

                      {list.stacks?.map((stack: any) => {
                        return (
                          <Image
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
                    <Flex mt='1rem' justify={'space-between'}>
                      <a href={list.gitlink} target="_blank" rel="noreferrer">
                        {" "}
                        GITHUB{" "}
                      </a>
                      <a href={list.live} target="_blank" rel="noreferrer">
                        {" "}
                        PREVIEW{" "}
                      </a>
                    </Flex>
                  </Flex>
                </ShowDetails>
              </Box>
            );
          })}
        </Flex>
      </Box>
      <Box mt="7rem">
        <ContactModal />
      </Box>

      <Footer />
    </Box>
  );
};

export default AllProjects;
