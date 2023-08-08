import {
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import ContactMe from "./home/contact-me";

export function ContactModal() {
  const { colorMode } = useColorMode();

  return (
    <>
      <ModalOverlay />
      <ModalContent bg={colorMode === "dark" ? "brand.650" : "brand.100"}>
        <ModalCloseButton
          color={colorMode === "dark" ? "brand.150" : "brand.600"}
        />
        <ModalBody p="0">
          <ContactMe>
            <Text px="1.9rem">Get in Touch</Text>{" "}
          </ContactMe>
        </ModalBody>
      </ModalContent>
    </>
  );
}
