"use client";
import { ContactModal } from "@/app/components/contact-modal";
import Footer from "@/app/components/footer";
import { projectData } from "@/app/components/utils/constants";
import { Back } from "@/app/components/utils/funcs";
import {
  Box,
  Flex,
  HStack,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  useColorMode
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const ProjectId = () => {
  const { id } = useParams();
  const { colorMode } = useColorMode();

  const filteredProject = projectData.find((item) => item.id == id);

  if (!filteredProject) {
    return <div>Project not found</div>;
  }

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false,
  };

  return (
    <Box
      bg={colorMode === "dark" ? "brand.550" : "brand.300"}
      w="full"
      mt={{ base: "4rem", lg: "0rem" }}
    >
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
          <Box
            key={filteredProject.id}
            color={colorMode === "dark" ? "brand.350" : "brand.380"}
            py="1rem"
          >
            <Flex
              align="center"
              gap="2rem"
              mt={{ base: "1.5rem", md: "2rem", xl: "2rem" }}
              mb="1.5rem"
            >
              <Back />
              <Heading
                color={colorMode === "dark" ? "brand.100" : "brand.450"}
                fontWeight={"600"}
                fontSize={"1.3rem"}
              >
                {filteredProject.heading}{" "}
              </Heading>
            </Flex>

            <Box>
              <Slider {...settings}>
                {filteredProject.img.map((imgSrc, index) => (
                  <Box key={index}>
                    <Image
                      src={imgSrc}
                      alt="Picture of the project"
                      height={1000}
                      width={1500}
                      objectPosition="center"
                      style={{
                        display: "block",
                        margin: "auto",
                      }}
                    />
                    <style>
                      {`
                  .slick-dots li button:before {
                    font-size: .6rem;
                    color: ${colorMode === "dark" ? "#ffffff" : "#000000"};
                  }
                  .slick-dots li.slick-active button:before {
                     color: ${colorMode === "dark" ? "#ffffff" : "#000000"};
                    font-size: 1rem;
                  }
                
                `}
                    </style>
                  </Box>
                ))}
              </Slider>
            </Box>

            <Heading
              color={colorMode === "dark" ? "brand.220" : "brand.980"}
              fontSize={"1.2rem"}
              mb="1.5rem"
              mt={"4rem"}
              fontWeight={"700"}
            >
              Project Details
            </Heading>
            <Box
              bg={colorMode === "dark" ? "brand.650" : "brand.100"}
              py="2rem"
              fontSize={"1rem"}
              px={{ base: "1rem", sm: "1.5rem" }}
              lineHeight={1.8}
              shadow={"md"}
              mb="1.5rem"
            >
              <Text>{filteredProject.description}</Text>
              <Box mt="2rem">
                <Heading
                  color={colorMode === "dark" ? "brand.220" : "brand.980"}
                  fontSize={"1.1rem"}
                  my=".5rem"
                  mt="2rem"
                  fontWeight={"700"}
                >
                  Tools
                </Heading>
                {filteredProject.tools.map((tool, index) => (
                  <UnorderedList key={index}>
                    <ListItem ml="1rem">{tool}</ListItem>
                  </UnorderedList>
                ))}
              </Box>
            </Box>
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
                  color={colorMode === "dark" ? "brand.220" : "brand.980"}
                  fontSize={"1.1rem"}
                  mb=".5rem"
                  fontWeight={"700"}
                >
                  Features
                </Heading>
                <Text>{filteredProject.features}</Text>
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
                {filteredProject.gitlink && (
                  <HStack justify={"space-between"} columnGap={"1rem"}>
                    <Text>Github:</Text>
                    <a
                      href={filteredProject.gitlink}
                      target="_blank"
                      style={{
                        color: "#7d7de3",
                      }}
                    >
                      View on Github
                    </a>
                  </HStack>
                )}
                {filteredProject.live && (
                  <HStack justify={"space-between"} columnGap={"1rem"}>
                    <Text>Live:</Text>
                    <a
                      href={filteredProject.live}
                      target="_blank"
                      style={{
                        color: "#dd6b21",
                      }}
                    >
                      {" "}
                      View live
                    </a>
                  </HStack>
                )}
                <HStack justify={"space-between"} columnGap={"1rem"}>
                  <Text>Status:</Text>
                  <Text
                    color={colorMode === "dark" ? "brand.350" : "brand.380"}
                  >
                    {filteredProject.status}
                  </Text>
                </HStack>
              </Flex>
            </Flex>
          </Box>
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
            _hover={{ color: colorMode === "dark" ? "brand.150" : "brand.400" }}
          >
            <Link href="/pages/all-projects">
              <HStack>
                <FaAngleDoubleLeft />
                <Text>VIEW MORE PROJECTS</Text>
                <FaAngleDoubleRight />
              </HStack>
            </Link>
          </Flex>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectId;
