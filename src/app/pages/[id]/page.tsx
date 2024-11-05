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
  useColorMode,
  useMediaQuery
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const ProjectId = () => {
  const { id } = useParams();
  const { colorMode } = useColorMode();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const filteredProject = projectData.filter((item) => {
    return item.id == id;
  });



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

                <Flex
                  justify={"space-between"}
                  w="100%"
                  _hover={{
                    transition: "transform 0.3s ease-in-out",
                    transform: "scale(1.05)",
                  }}
                  style={{
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <Image
                    src={item.img}
                    alt="Picture of the project"
                    height={800}
                    width={1000}
                    style={{
                      objectFit: "cover",
                      objectPosition: "top",
                      maxWidth: "100%",
                      width: isMobile ? "100%" : "95%",
                    }}
                  />
                </Flex>
                <Heading
                  color={colorMode === "dark" ? "brand.220" : "brand.980"}
                  fontSize={"1.2rem"}
                  my="1.5rem"
                  mt="4rem"
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
                  <Text>{item.description}</Text>
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
                    {item.tools.map((tool, index) => {
                      return (
                        <UnorderedList key={index}>
                          <ListItem ml="1rem">{tool}</ListItem>
                        </UnorderedList>
                      );
                    })}
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
                    {item.gitlink && (
                      <HStack justify={"space-between"} columnGap={"1rem"}>
                        <Text>Github:</Text>
                        <a
                          href={item.gitlink}
                          target="_blank"
                          style={{
                            color: "#7d7de3",
                          }}
                        >
                          View on Github
                        </a>
                      </HStack>
                    )}
                    {item.live && (
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
                          View live
                        </a>
                      </HStack>
                    )}         
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
