/* eslint-disable react/no-unescaped-entities */

import {
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
  useColorMode,
  Box,
  Flex,
  Modal,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";
import { links } from "./utils/constants";

export function ProfileModal() {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box position={"relative"}>
        <Box onClick={onOpen} cursor={"pointer"}>
          <Image
            src="/assets/meldy2.jpg"
            alt="Picture of the author"
            height={500}
            width={500}
            style={{
              borderRadius: "50%",
              height: "80px",
              width: "80px",
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          />
          <Box
            position={"absolute"}
            bottom=".2rem"
            right="0rem"
            h="1rem"
            w="1rem"
            borderRadius={"50%"}
            bg={colorMode === "dark" ? "brand.800" : "brand.850"}
            className="profile"
          />
        </Box>

        <Modal
          isCentered
          size="lg"
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent bg={colorMode === "dark" ? "brand.650" : "brand.100"}>
            <ModalCloseButton
              color={colorMode === "dark" ? "brand.150" : "brand.600"}
            />
            <ModalBody>
              <Flex
                justify={"center"}
                align={"center"}
                direction={"column"}
                pt="2rem"
              >
                <Image
                  src="/assets/meldy2.jpg"
                  alt="Picture of the author"
                  height={800}
                  width={800}
                  style={{
                    borderRadius: "50%",
                    height: "280px",
                    width: "280px",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    border: "10px solid #000",
                  }}
                />
                <Text my="1rem">I'm available to work!</Text>
                <Text
                  pb="1rem"
                  fontSize={"1.2rem"}
                  fontWeight={600}
                  color={colorMode === "dark" ? "brand.800" : "brand.850"}
                >
                  LET'S GET IT STARTED
                </Text>
              </Flex>
              <Flex
                align="flex-end"
                justify="flex-end"
                gap={"1rem"}
                flexWrap={"wrap"}
                w="80%"
                m="auto"
                pb="2rem"
              >
                {links.map((link, index) => {
                  return (
                    <Flex key={index} w="40%">
                      <a href={link.href} target="_blank" rel="noreferrer">
                        <Flex
                          align={"center"}
                          gap=".5rem"
                          _hover={{
                            color:
                              colorMode === "dark" ? "brand.800" : "brand.850",
                          }}
                        >
                          <Icon as={link.icon} />
                          <Text>{link.label}</Text>
                        </Flex>
                      </a>
                    </Flex>
                  );
                })}
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
