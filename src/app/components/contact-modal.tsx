import {
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import ContactMe from "./home/contact-me";

export function ContactModal() {
  return (
    <>
      <ModalOverlay />
      <ModalContent
        style={{
          backgroundImage: "linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)",
        }}
      >
        <ModalCloseButton color="brand.150" />
        <ModalBody p="0">
          <ContactMe>
            <Text px="1.9rem">Get in Touch</Text>{" "}
          </ContactMe>
        </ModalBody>
      </ModalContent>
    </>
  );
}
