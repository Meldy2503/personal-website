import React from "react";
import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { BiMessageDots } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import Button from "../button";

const ContactMe = () => {
  return (
    <Box px="2.5rem">
      <Heading
        color="brand.100"
        fontWeight={"600"}
        fontSize={"1.3rem"}
        mt="3rem"
        mb="2rem"
      >
        Get in Touch
      </Heading>
      <Box
        px="2rem"
        py="2.5rem"
        shadow={"lg"}
        style={{
          backgroundImage: "linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)",
        }}
      >
        <form action="">
          <InputGroup color="brand.350" mb="2rem">
            <InputLeftElement pointerEvents="none" bg="brand.550" py="1.6rem">
              <BsFillPersonFill color="gray.300" />
            </InputLeftElement>
            <Input
              style={{
                backgroundImage:
                  "linear-gradient(159deg,#252532 0%,#23232d 100%)",
              }}
              border={"none"}
              focusBorderColor="transparent"
              type="text"
              placeholder="Full name"
              _placeholder={{ color: "brand.350", fontSize: ".95rem" }}
              pl="3.5rem"
              py="1.6rem"
              fontSize={".95rem"}
            />
          </InputGroup>
          <InputGroup color="brand.350" mb="2rem">
            <InputLeftElement pointerEvents="none" bg="brand.550" py="1.6rem">
              <AiTwotoneMail color="gray.300" />
            </InputLeftElement>
            <Input
              style={{
                backgroundImage:
                  "linear-gradient(159deg,#252532 0%,#23232d 100%)",
              }}
              border={"none"}
              focusBorderColor="transparent"
              type="email"
              placeholder="Email"
              _placeholder={{ color: "brand.350", fontSize: ".95rem" }}
              pl="3.5rem"
              py="1.6rem"
              fontSize={".95rem"}
            />
          </InputGroup>
          <InputGroup color="brand.350" mb="2rem">
            <InputLeftElement pointerEvents="none" bg="brand.550" h="full">
              <Box mt="-6.4rem">
                <BiMessageDots color="gray.300" />
              </Box>
            </InputLeftElement>
            <Textarea
              style={{
                backgroundImage:
                  "linear-gradient(159deg,#252532 0%,#23232d 100%)",
              }}
              border={"none"}
              placeholder="Message"
              _placeholder={{ color: "brand.350", fontSize: ".95rem" }}
              size="lg"
              focusBorderColor="transparent"
              pl="3.5rem"
              h="10rem"
              py="1.1rem"
              fontSize={".95rem"}
            />
          </InputGroup>
          <Box my="2rem">
            <Button href="/">send message</Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ContactMe;
