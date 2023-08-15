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
  Heading,
  Modal,
  useDisclosure,
} from "@chakra-ui/react";
import ContactMe from "./home/contact-me";
import { Buttn } from "./button";

export function ContactModal() {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
            <Buttn onClick={onOpen}>CONTACT ME</Buttn>
            <Modal
              isCentered
              size="lg"
              onClose={onClose}
              isOpen={isOpen}
              motionPreset="slideInBottom"
            >
              <ModalOverlay />
              <ModalContent
                bg={colorMode === "dark" ? "brand.650" : "brand.100"}
              >
                <ModalCloseButton
                  color={colorMode === "dark" ? "brand.150" : "brand.600"}
                />
                <ModalBody p="0">
                  <ContactMe>
                    <Text px="1.9rem">Get in Touch</Text>{" "}
                  </ContactMe>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
