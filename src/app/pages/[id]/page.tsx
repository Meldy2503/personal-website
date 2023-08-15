"use client";
import React, { useEffect, useState } from "react";
import { projectData } from "@/app/components/utils/constants";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Footer from "@/app/components/footer";
import { Back } from "@/app/components/utils/funcs";
import { ContactModal } from "@/app/components/contact-modal";
import Carousel from "@/app/components/carousel";
import Image from "next/image";

const ProjectId = () => {
  const { id } = useParams();
  const { colorMode } = useColorMode();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery("(max-width: 468px)");

  const filteredProject = projectData.filter((item) => {
    return item.id == id;
  });
  const carouselContent = filteredProject[0]?.carousel || [];
  const duplicatedItems = [...carouselContent, carouselContent[0]];

  const prevSlide = () => {
    setCurrentIndex((prevIndex: any) =>
      prevIndex === 0 ? carouselContent.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex: any) =>
      prevIndex === carouselContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box bg={colorMode === "dark" ? "brand.550" : "brand.300"} w="full">
      <Box
        bgImage="/assets/bg.jpg"
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPosition={"top"}
      >
        <Box
          bg={colorMode === "dark" ? "brand.960" : "brand.220"}
          px={{ base: "15px", md: "30px" }}
        >
          {filteredProject.map((item) => {
            return (
              <Box
                key={item.id}
                color={colorMode === "dark" ? "brand.350" : "brand.380"}
                py="1rem"
              >
                <Flex
                  align="center"
                  gap="2rem"
                  my={{ base: "1.5rem", md: "2rem" }}
                >
                  <Back />
                  <Heading
                    color={colorMode === "dark" ? "brand.100" : "brand.450"}
                    fontWeight={"600"}
                    fontSize={"1.3rem"}
                  >
                    {item.heading}{" "}
                  </Heading>
                </Flex>

                <Carousel
                  onClickNext={nextSlide}
                  onClickPrev={prevSlide}
                  style={{
                    transform: `translateX(-${
                      ((currentIndex - 1 + carouselContent.length) %
                        carouselContent.length) *
                      100
                    }%)`,
                  }}
                >
                  {duplicatedItems.map((list, index) => (
                    <Flex
                      key={index}
                      className="slide"
                      justify={"space-between"}
                      w="100%"
                    >
                      <Image
                        src={list}
                        alt="Picture of the project"
                        height={800}
                        width={1000}
                        style={{
                          objectFit: "cover",
                          objectPosition: "top",
                          maxWidth: "100%",
                          width: isMobile ? "100%" : "95%",
                          height: isTablet ? "300px" : "350px",
                        }}
                      />
                    </Flex>
                  ))}
                </Carousel>
                <Heading
                  color={colorMode === "dark" ? "brand.100" : "brand.450"}
                  fontSize={"1.1rem"}
                  my="1.5rem"
                  mt="3rem"
                  fontWeight={"700"}
                >
                  Project Details
                </Heading>
                <Text
                  bg={colorMode === "dark" ? "brand.650" : "brand.100"}
                  py="2rem"
                  fontSize={"1rem"}
                  px={{ base: "1rem", sm: "1.5rem" }}
                  lineHeight={1.8}
                  shadow={"md"}
                  mb="1.5rem"
                >
                  {item.description}
                </Text>
                <Flex
                  justify={"space-between"}
                  direction={{ base: "column", xl: "row" }}
                  rowGap={"1.5rem"}
                >
                  <Box
                    bg={colorMode === "dark" ? "brand.650" : "brand.100"}
                    py="2rem"
                    fontSize={"1rem"}
                    px={{ base: "1rem", sm: "1.5rem" }}
                    w={{ base: "100%", xl: "67%" }}
                    lineHeight={1.8}
                    shadow={"md"}
                  >
                    <Heading
                      color={colorMode === "dark" ? "brand.100" : "brand.450"}
                      fontSize={"1.1rem"}
                      mb=".5rem"
                      fontWeight={"700"}
                    >
                      Features
                    </Heading>
                    <Text>{item.features}</Text>
                  </Box>
                  <Flex
                    bg={colorMode === "dark" ? "brand.650" : "brand.100"}
                    py="2rem"
                    px={{ base: "1rem", sm: "1.5rem" }}
                    w={{ base: "100%", xl: "30%" }}
                    direction={"column"}
                    rowGap={"1rem"}
                    fontSize={".9rem"}
                    color={colorMode === "dark" ? "brand.150" : "brand.600"}
                    shadow={"md"}
                  >
                    <HStack justify={"space-between"} columnGap={"1rem"}>
                      <Text>Github:</Text>
                      <a
                        href={item.gitlink}
                        target="_blank"
                        style={{
                          color: "blue",
                        }}
                      >
                        View on Github
                      </a>
                    </HStack>
                    <HStack justify={"space-between"} columnGap={"1rem"}>
                      <Text>Live:</Text>
                      <a
                        href={item.live}
                        target="_blank"
                        style={{
                          color: "#dd6b21",
                        }}
                      >
                        {" "}
                        View live Preview
                      </a>
                    </HStack>
                    <HStack justify={"space-between"} columnGap={"1rem"}>
                      <Text>Status:</Text>
                      <Text
                        color={colorMode === "dark" ? "brand.350" : "brand.380"}
                      >
                        {item.status}
                      </Text>
                    </HStack>
                  </Flex>
                </Flex>
              </Box>
            );
          })}
          <ContactModal />
          <Flex
            py="1.5rem"
            justify={"center"}
            color={colorMode === "dark" ? "brand.800" : "brand.850"}
            bg={colorMode === "dark" ? "brand.450" : "brand.100"}
            letterSpacing={".1rem"}
            fontSize={".83rem"}
            fontWeight={"bold"}
            mt="1rem"
            shadow={"md"}
          >
            <Link href="/pages/all-projects">VIEW ALL PROJECTS</Link>
          </Flex>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};
export default ProjectId;
