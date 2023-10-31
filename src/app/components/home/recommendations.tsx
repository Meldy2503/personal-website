import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import { Title } from "../utils/funcs";
import { reviewData } from "../utils/constants";
import Image from "next/image";
import Carousel from "../carousel";

const Recommendations = () => {
  const { colorMode } = useColorMode();
  const [currentIndex, setCurrentIndex] = useState(0);
  const duplicatedItems = [...reviewData, reviewData[0]];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? duplicatedItems.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === duplicatedItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box id="recommendations">
      <Title>Recommendations</Title>
      <Carousel
        pt="2rem"
        style={{
          transform: `translateX(-${
            ((currentIndex - 1 + reviewData.length) % reviewData.length) * 100
          }%)`,
        }}
        minH={{
          base: "350px",
          sm: "280px",
          md: "300px",
          lg: "320px",
          xl: "300px",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <Flex
            key={index}
            className="slide"
            position={"relative"}
            justify={"center"}
          >
            <Box
              width={{ base: "100%", md: "95%" }}
              position={"absolute"}
              right={"0px"}
              left={"0px"}
              shadow={"md"}
              color={colorMode === "dark" ? "brand.350" : "brand.380"}
            >
              <Box
                bg={colorMode === "dark" ? "brand.650" : "brand.100"}
                py="2rem"
                px={{ base: "1rem", md: "1.5rem", lg: "2rem" }}
                fontSize={".93rem"}
                minH={{ base: "400px", sm: "350px", md: "400px", lg: "400px" }}
              >
                <Box>
                  <Image
                    src={item.image}
                    alt="Picture of the reviewers"
                    height={300}
                    width={300}
                    style={{
                      position: "absolute",
                      borderRadius: "50%",
                      objectFit: "cover",
                      objectPosition: "top",
                      right: "30px",
                      top: "-30px",
                      height: "70px",
                      width: "70px",
                    }}
                  />
                </Box>
                <Heading
                  fontSize={"1rem"}
                  color={colorMode === "dark" ? "brand.800" : "brand.850"}
                  letterSpacing={".1rem"}
                >
                  {item.name}
                </Heading>
                <Text
                  mt=".5rem"
                  mb="1rem"
                  color={colorMode === "dark" ? "brand.150" : "brand.600"}
                >
                  {item.occupation}
                </Text>
                <Text>{item.comment}</Text>
              </Box>
            </Box>
          </Flex>
        ))}
      </Carousel>
    </Box>
  );
};

export default Recommendations;
