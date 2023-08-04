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
  h?: string;
  position?: string | any;
  top?: string;
}

const Sidebar = ({ w, h, position, top }: Props) => {
  return (
    <>
      <Box
        w={w}
        bg="brand.600"
        h="100%"
        position="sticky"
        top="0px"
        overflow={"auto"}
        className="scroll-bar"
        shadow={"md"}
      >
        <Flex
          style={{
            backgroundImage:
              "linear-gradient(159deg,rgba(37,37,50,.98) 0%,rgba(35,35,45,.98) 100%)",
          }}
          direction={"column"}
          align={"center"}
          justify="center"
          color="brand.350"
          py="1.5rem"
          fontSize={".9rem"}
          textAlign={"center"}
          position="sticky"
          top="0px"
          zIndex={"100"}
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
            color="brand.150"
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
        <Box color="brand.900" fontSize={".9rem"} px="1.5rem" mt="1rem">
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
                    bgColor="brand.750"
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
            borderY="1px solid #363643"
            py="1rem"
            mt="2rem"
            color="brand.350"
          >
            <ListItem>
              <ListIcon as={BsCheckLg} color="brand.800" />
              Figma, Zeplin
            </ListItem>
            <ListItem>
              <ListIcon as={BsCheckLg} color="brand.800" />
              Git/Github knowledge{" "}
            </ListItem>
          </List>
          <HStack color="brand.350" py="1rem" mb="2rem">
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
          style={{
            backgroundImage:
              "linear-gradient(159deg,rgba(37,37,50,.98) 0%,rgba(35,35,45,.98) 100%)",
          }}
          align={"center"}
          justify="center"
          color="brand.350"
          py=".9rem"
          gap={".6rem"}
          position={"sticky"}
          w="100%"
          bottom="0px"
        >
          <AiFillLinkedin />
          <AiOutlineTwitter />
          <AiOutlineMail />
          <AiFillGithub />
        </Flex>
      </Box>
    </>
  );
};

export default Sidebar;
