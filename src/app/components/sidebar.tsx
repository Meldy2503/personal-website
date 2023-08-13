import React from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Text,
  Progress,
  ListItem,
  List,
  ListIcon,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import { stackData } from "./utils/constants";
import { BsCheckLg } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";

interface Props {
  w?: string;
}

const Sidebar = ({ w }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        w={w}
        bg={colorMode === "dark" ? "brand.600" : "brand.250"}
        h="100%"
        position="sticky"
        top="0px"
        overflow={"auto"}
        className="scroll-bar"
        shadow={"md"}
        color={colorMode === "dark" ? "brand.350" : "brand.400"}
      >
        <Flex
          direction={"column"}
          align={"center"}
          justify="center"
          py="1.5rem"
          fontSize={"0.9rem"}
          textAlign={"center"}
          position="sticky"
          top="0px"
          zIndex={"100"}
          shadow={"md"}
          bg={colorMode === "dark" ? "brand.500" : "brand.100"}
        >
          <Image
            src="/assets/face-1.jpg"
            alt="Picture of the author"
            height={200}
            width={200}
            style={{
              borderRadius: "50%",
              height: "80px",
              width: "80px",
              backgroundSize: "cover",
            }}
          />
          <Heading
            color={colorMode === "dark" ? "brand.150" : "brand.600"}
            fontSize={"1.1rem"}
            mt="1rem"
            mb=".6rem"
            letterSpacing={".1rem"}
          >
            Emelder Okafor
          </Heading>
          <Text>
            Front-end Developer <br />
            UI/UX Designer
          </Text>
        </Flex>
        <Box
          color={colorMode === "dark" ? "brand.900" : "brand.400"}
          fontSize={".9rem"}
          px="1.5rem"
          mt="1rem"
        >
          <Box>
            {stackData.map((item, index) => {
              return (
                <Flex
                  key={index}
                  rowGap={".5rem"}
                  direction={"column"}
                  mt="1rem"
                >
                  <HStack justifyContent={"space-between"}>
                    <Text>{item.name}</Text>
                    <Text>{item.value}%</Text>
                  </HStack>
                  <Progress
                    bgColor={colorMode === "dark" ? "brand.750" : "brand.900"}
                    colorScheme="yellow"
                    size="xs"
                    value={item.value}
                  />
                </Flex>
              );
            })}
          </Box>
          <List
            spacing={3}
            borderY={`1px solid ${
              colorMode === "dark" ? "#363643" : "#cacaca"
            }`}
            py="1rem"
            mt="2rem"
            color={colorMode === "dark" ? "brand.350" : "brand.400"}
          >
            <ListItem>
              <ListIcon
                as={BsCheckLg}
                color={colorMode === "dark" ? "brand.800" : "brand.850"}
              />
              Figma, Zeplin
            </ListItem>
            <ListItem>
              <ListIcon
                as={BsCheckLg}
                color={colorMode === "dark" ? "brand.800" : "brand.850"}
              />
              Git/Github knowledge{" "}
            </ListItem>
          </List>
          <HStack
            py="1rem"
            mb="2rem"
            color={colorMode === "dark" ? "brand.350" : "brand.400"}
          >
            <Text
              letterSpacing={".1rem"}
              fontWeight={"bold"}
              fontSize={".8rem"}
            >
              DOWNLOAD CV
            </Text>
            <FaDownload />
          </HStack>
        </Box>
        <Flex
          bg={colorMode === "dark" ? "brand.500" : "brand.100"}
          align={"center"}
          justify="center"
          py=".9rem"
          gap={".6rem"}
          position="sticky"
          w="100%"
          bottom="0px"
          shadow={"md"}
        >
          <a
            href="https://www.linkedin.com/in/emelder-okafor-67b22122b/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="mailto:emelder.charles25@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail />
          </a>
          <a
            href="https://www.twitter.com/EmelderOkafor"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter />
          </a>

          <a
            href="https://github.com/Meldy2503 "
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
        </Flex>
      </Box>
    </>
  );
};

export default Sidebar;
