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
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import ContactMe from "@/app/components/home/contact-me";
import Link from "next/link";
import Footer from "@/app/components/footer";
import { Back, Title } from "@/app/components/utils/funcs";
// import Button from "@/app/components/button";
import { ContactModal } from "@/app/components/contact-modal";

const ProjectId = () => {
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const filteredProject = projectData.filter((item) => {
    return item.id == id;
  });

  return (
    <Box
      w="full"
      bgImage="/assets/bg.jpg"
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={"center"}
      h="15rem"
    >
      <Box
        h="100%"
        style={{
          backgroundImage:
            "linear-gradient(180deg,rgba(30,30,40,.93) 0%,rgba(30,30,40,.96) 70%,rgba(30,30,40,1) 10%,#1e1e28 100%)",
        }}
      >
        {filteredProject.map((item) => {
          return (
            <Box
              key={item.id}
              color="brand.350"
              py="1rem"
              px={{ base: ".7rem", sm: "1.5rem", xl: "2.5rem" }}
            >
              <Flex align="center" gap="2rem">
                <Back />
                <Title>{item.heading}</Title>
              </Flex>
              <Box h="15rem" w="20rem" bg="brand.800"></Box>
              <Heading
                color="brand.100"
                fontSize={"1rem"}
                my="1.5rem"
                mt="3rem"
              >
                Project Details
              </Heading>
              <Flex
                justify={"space-between"}
                direction={{ base: "column", xl: "row" }}
                rowGap={"1rem"}
              >
                <Text
                  bg="brand.650"
                  py="2rem"
                  fontSize={".95rem"}
                  px={{ base: "1rem", sm: "1.5rem" }}
                  w={{ base: "100%", xl: "67%" }}
                  lineHeight={1.8}
                >
                  {item.description}
                </Text>
                <Flex
                  bg="brand.650"
                  py="2rem"
                  px={{ base: "1rem", sm: "1.5rem" }}
                  w={{ base: "100%", xl: "30%" }}
                  direction={"column"}
                  rowGap={".6rem"}
                  fontSize={".9rem"}
                >
                  <HStack justify={"space-between"} columnGap={"1rem"}>
                    <Text color="brand.150">Github:</Text>
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
                    <Text color="brand.150">Live:</Text>
                    <a
                      href={item.live}
                      target="_blank"
                      style={{
                        color: "#ffc107",
                      }}
                    >
                      {" "}
                      View live Preview
                    </a>
                  </HStack>
                  <HStack justify={"space-between"} columnGap={"1rem"}>
                    <Text color="brand.150">Status:</Text>
                    <Text>{item.status}</Text>
                  </HStack>
                  <HStack justify={"space-between"} columnGap={"1rem"}>
                    <Text color="brand.150">Client:</Text>
                    <Text>{item.client}</Text>
                  </HStack>
                </Flex>
              </Flex>
            </Box>
          );
        })}

        <Box
          bgImage="/assets/img2.jpg"
          h="20rem"
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
          bgPosition={"bottom"}
          mx={{ base: ".7rem", sm: "1.5rem", xl: "2.5rem" }}
          my="2rem"
        >
          <Flex
            h="100%"
            w="100%"
            align={"center"}
            justify={"center"}
            direction="column"
            color="brand.150"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(45,45,58,.9) 15%,rgba(45,45,58,.7) 50%,rgba(43,43,53,.7) 100%)",
            }}
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
              bg="brand.800"
              letterSpacing={".1rem"}
              px="2rem"
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
          bg="brand.450"
          py="1.5rem"
          justify={"center"}
          color="brand.800"
          letterSpacing={".1rem"}
          mx={{ base: ".7rem", sm: "1.5rem", xl: "2.5rem" }}
          fontSize={".83rem"}
          fontWeight={"bold"}
          mt="1rem"
        >
          <Link href="/pages/all-projects">VIEW ALL PROJECTS</Link>
        </Flex>
        <Footer />
      </Box>
    </Box>
  );
};

export default ProjectId;
