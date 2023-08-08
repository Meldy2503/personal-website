import React, { Children } from "react";
import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import { BiMessageDots } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { Btn } from "../button";
import { Title } from "../utils/funcs";

interface Props {
  children?: React.ReactNode;
  px?: string | any;
  py?: string;
  shadow?: string;
}

const ContactMe = ({ children, px, py, shadow }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Box id="contact" px={px} pb="1rem">
      <Title>{children}</Title>

      <Box
        px={{ base: ".7rem", sm: "1.3rem", md: "2rem" }}
        py={py}
        shadow={shadow}
        bg={colorMode === "dark" ? "brand.650" : "brand.100"}
      >
        <form action="">
          <InputGroup
            color={colorMode === "dark" ? "brand.350" : "brand.380"}
            mb="2rem"
          >
            <InputLeftElement
              pointerEvents="none"
              bg={colorMode === "dark" ? "brand.550" : "brand.320"}
              py="1.6rem"
            >
              <BsFillPersonFill />
            </InputLeftElement>
            <Input
              bg={colorMode === "dark" ? "brand.700" : "brand.250"}
              border={"none"}
              focusBorderColor="transparent"
              type="text"
              placeholder="Full name"
              _placeholder={{ color: "brand.350", fontSize: ".95rem" }}
              pl="3.5rem"
              py="1.6rem"
              fontSize={".95rem"}
              shadow={"md"}
            />
          </InputGroup>
          <InputGroup
            color={colorMode === "dark" ? "brand.350" : "brand.380"}
            mb="2rem"
          >
            <InputLeftElement
              pointerEvents="none"
              py="1.6rem"
              bg={colorMode === "dark" ? "brand.550" : "brand.320"}
            >
              <AiTwotoneMail />
            </InputLeftElement>
            <Input
              bg={colorMode === "dark" ? "brand.700" : "brand.250"}
              border={"none"}
              focusBorderColor="transparent"
              type="email"
              placeholder="Email"
              _placeholder={{ color: "brand.350", fontSize: ".95rem" }}
              pl="3.5rem"
              py="1.6rem"
              fontSize={".95rem"}
              shadow={"md"}
            />
          </InputGroup>
          <InputGroup
            color={colorMode === "dark" ? "brand.350" : "brand.380"}
            mb="2rem"
          >
            <InputLeftElement
              pointerEvents="none"
              bg={colorMode === "dark" ? "brand.550" : "brand.320"}
              h="full"
            >
              <Box mt="-6.4rem">
                <BiMessageDots />
              </Box>
            </InputLeftElement>
            <Textarea
              bg={colorMode === "dark" ? "brand.700" : "brand.250"}
              border={"none"}
              placeholder="Message"
              _placeholder={{ color: "brand.350", fontSize: ".95rem" }}
              size="lg"
              focusBorderColor="transparent"
              pl="3.5rem"
              h="10rem"
              py="1.1rem"
              fontSize={".95rem"}
              shadow={"md"}
            />
          </InputGroup>
          <Box my="2rem">
            <Btn href="/">send message</Btn>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ContactMe;
