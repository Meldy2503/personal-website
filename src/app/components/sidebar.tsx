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
  Tooltip,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { links, stackData } from "./utils/constants";
import { BsCheckLg } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { ProfileModal } from "./profile-modal";

interface Props {
  w?: any;
}

const Sidebar = ({ w }: Props) => {
  const [isMobile] = useMediaQuery("(max-width: 960px)");

  const { colorMode } = useColorMode();

  return (
    <Box
      w={w}
      bg={colorMode === "dark" ? "brand.600" : "brand.250"}
      position= {isMobile ? "sticky" : "fixed"}
      minH={"100vh"}
      zIndex={"500"}
      top="10px"
       overflow={"auto"}
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
        <ProfileModal />
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
        <Flex align={"center"} justify="center" pt="1rem" columnGap={"1.2rem"}>
          {links.map((link, index) => {
            return (
              <Tooltip key={index} label={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  <Icon
                    as={link.icon}
                    _hover={{
                      color: colorMode === "dark" ? "brand.800" : "brand.850",
                    }}
                  />
                </a>
              </Tooltip>
            );
          })}
        </Flex>
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
              <Flex key={index} rowGap={".5rem"} direction={"column"} mt="1rem">
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
          borderY={`1px solid ${colorMode === "dark" ? "#363643" : "#cacaca"}`}
          py="1rem"
          my="2rem"
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
      </Box>
      <Flex
        bg={colorMode === "dark" ? "brand.500" : "brand.100"}
        align={"center"}
        justify="center"
        columnGap={"1.2rem"}
        position="sticky"
        w="100%"
        bottom="0px"
        shadow={"md"}
        zIndex={"500"}
      >
        <HStack
          py=".9rem"
          color={colorMode === "dark" ? "brand.800" : "brand.850"}
          align={"center"}
          justify="center"
        >
          <Text letterSpacing={".1rem"} fontWeight={"bold"} fontSize={".8rem"}>
            DOWNLOAD CV
          </Text>
          <FaDownload />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Sidebar;
