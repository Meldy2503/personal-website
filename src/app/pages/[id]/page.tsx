/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { projectData } from "@/app/components/utils/constants";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Text,
  useDisclosure,
  Button,
  Modal,
  useColorMode,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Footer from "@/app/components/footer";
import { Back, Title } from "@/app/components/utils/funcs";
import { ContactModal } from "@/app/components/contact-modal";

const ProjectId = () => {
  const { id } = useParams();
  const { colorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const filteredProject = projectData.filter((item) => {
    return item.id == id;
  });

  return (
    <Box bg={colorMode === "dark" ? "brand.550" : "brand.300"} w="full">
      <Box
        bgImage="/assets/bg.jpg"
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPosition={"center"}
        h="24rem"
      >
        <Box
          h="24rem"
          bg={colorMode === "dark" ? "brand.960" : "brand.220"}
          px={{ base: "15px", md: "35px" }}
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
                <Box h="16.8rem" w="20rem" bg="brand.800"></Box>
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

          <Box bg={colorMode === "dark" ? "brand.550" : "brand.300"}>
            <Box
              bgImage="/assets/img2.jpg"
              h="20rem"
              bgRepeat={"no-repeat"}
              bgSize={"cover"}
              bgPosition={"bottom"}
              my="2rem"
            >
              <Flex
                h="100%"
                w="100%"
                align={"center"}
                justify={"center"}
                direction="column"
                color="brand.150"
                bg="brand.990"
              >
                <Heading
                  fontSize={"2.5rem"}
                  fontWeight={"900"}
                  textAlign={"center"}
                >
                  Ready to Order your Projects?
                </Heading>

                <Text my="1.5rem">Let's Work Together!</Text>
                <Button
                  onClick={onOpen}
                  borderRadius={"0px"}
                  fontSize=".8rem"
                  color="brand.600"
                  bg={colorMode === "dark" ? "brand.800" : "brand.850"}
                  letterSpacing={".1rem"}
                  px="2rem"
                  _hover={{ backgroundColor: "brand.900" }}
                >
                  CONTACT ME
                </Button>
                <Modal
                  isCentered
                  size="lg"
                  onClose={onClose}
                  isOpen={isOpen}
                  motionPreset="slideInBottom"
                >
                  <ContactModal />
                </Modal>
              </Flex>
            </Box>

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
    </Box>
  );
};

export default ProjectId;
