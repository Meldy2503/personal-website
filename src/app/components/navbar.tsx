import React, { useState } from "react";
import {
  Box,
  Flex,
  Icon,
  Tooltip,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";

import { menuData } from "./utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsPersonCircle } from "react-icons/bs";
import Sidebar from "./sidebar";
import { ColorModeBtn } from "./button";
import Image from "next/image";
import { BiArrowToBottom } from "react-icons/bi";
import { FaAngleDoubleDown, FaAngleDown, FaAngleRight } from "react-icons/fa";

export const DesktopNav = () => {
  const { colorMode } = useColorMode();

  const activeColorScheme = colorMode === "dark" ? "brand.800" : "brand.850";

  const [currentMenu, setCurrentMenu] = useState("#home");
  const path = usePathname();

  const handlecurrentMenu = (menu: string) => {
    setCurrentMenu(menu);
  };
  return (
    <Flex
      bg={colorMode === "dark" ? "brand.500" : "brand.250"}
      minH={"100vh"}
      position="sticky"
      top="0px"
      right="0rem"
      shadow={"md"}
      direction={"column"}
      align={"center"}
      py="1rem"
      px=".5rem"
      zIndex={"500"}
    >
      <ColorModeBtn />
      {!path.includes("pages") ? (
        <Flex direction="column" rowGap={"2rem"} align={"center"} mt="1.5rem">
          {menuData.map((menu, index) => {
            return (
              <Tooltip label={menu.name} placement="left" key={index}>
                <Link href={menu.id}>
                  <Icon
                    onClick={() => handlecurrentMenu(menu.id)}
                    as={menu.icon}
                    boxSize={4}
                    color={
                      currentMenu === menu.id
                        ? activeColorScheme
                        : colorMode === "dark"
                        ? "brand.900"
                        : "brand.400"
                    }
                    _hover={{
                      color: colorMode === "dark" ? "brand.800" : "brand.850",
                    }}
                  />
                </Link>
              </Tooltip>
            );
          })}
        </Flex>
      ) : (
        <Tooltip label="Go to Home" placement="left">
          <Link href="/">
            <Icon
              as={AiFillHome}
              boxSize={5}
              color={colorMode === "dark" ? "brand.800" : "brand.850"}
              mt="1.5rem"
              _hover={{
                color: "brand.350",
              }}
            />
          </Link>
        </Tooltip>
      )}
    </Flex>
  );
};

export const MobileNav = () => {
  const { colorMode } = useColorMode();

  const {
    isOpen: isProfileOpen,
    onOpen: onProfileOpen,
    onClose: onProfileClose,
  } = useDisclosure();
  const {
    isOpen: isMenuOpen,
    onOpen: onMenuOpen,
    onClose: onMenuClose,
  } = useDisclosure();

  const [currentMenu, setCurrentMenu] = useState("#home");
  const path = usePathname();

  const handlecurrentMenu = (menu: string) => {
    setCurrentMenu(menu);
  };

  return (
    <>
      <Flex
        justify={"space-between"}
        w="100%"
        zIndex="100"
        px="1.2rem"
        py="1rem"
        bg={colorMode === "dark" ? "brand.600" : "brand.250"}
        position="fixed"
        top="0px"
        shadow={"md"}
        align={"center"}
      >
        {/* to open profile on mobile */}
        <>
          <Flex onClick={onProfileOpen} gap={".5rem"} align={"center"}>
            <Image
              src="/assets/meldy2.jpg"
              alt="Picture of the author"
              height={500}
              width={500}
              style={{
                borderRadius: "50%",
                height: "25px",
                width: "25px",
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            />
            <Icon
              as={FaAngleRight}
              color={colorMode === "dark" ? "brand.900" : "brand.600"}
            />
          </Flex>
          <Drawer
            placement="left"
            onClose={onProfileClose}
            isOpen={isProfileOpen}
          >
            <DrawerOverlay />
            <DrawerContent bg="brand.600">
              <Box
                onClick={onProfileClose}
                bg={colorMode === "dark" ? "brand.500" : "brand.100"}
                px="1.7rem"
                py="1rem"
              >
                <Icon
                  as={AiOutlineClose}
                  color={colorMode === "dark" ? "brand.900" : "brand.600"}
                />
              </Box>
              <DrawerBody p="0">
                <Sidebar />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>

        <ColorModeBtn />

        {/* to open the menu on mobile */}

        <>
          <Box onClick={onMenuOpen}>
            <Icon
              as={GiHamburgerMenu}
              boxSize={5}
              color={colorMode === "dark" ? "brand.900" : "brand.600"}
            />
          </Box>
          <Drawer placement="right" onClose={onMenuClose} isOpen={isMenuOpen}>
            <DrawerOverlay />
            <DrawerContent
              bg={colorMode === "dark" ? "brand.600" : "brand.250"}
            >
              <Box
                onClick={onMenuClose}
                bg={colorMode === "dark" ? "brand.500" : "brand.100"}
                px="1.7rem"
                py="1rem"
              >
                <Icon
                  as={AiOutlineClose}
                  color={colorMode === "dark" ? "brand.900" : "brand.600"}
                />
              </Box>
              <DrawerBody>
                {!path.includes("pages") ? (
                  <Flex
                    direction="column"
                    rowGap={"2rem"}
                    align={"center"}
                    mt="1rem"
                  >
                    {menuData.map((menu, index) => {
                      return (
                        <Box
                          color={
                            colorMode === "dark" ? "brand.900" : "brand.600"
                          }
                          key={index}
                        >
                          <Link
                            href={menu.id}
                            onClick={() => {
                              handlecurrentMenu(menu.id);
                              onMenuClose();
                            }}
                          >
                            {menu.name}
                          </Link>
                        </Box>
                      );
                    })}
                  </Flex>
                ) : (
                  <Box
                    color={colorMode === "dark" ? "brand.900" : "brand.600"}
                    mt="1.5rem"
                  >
                    <Link href="/" onClick={onMenuClose}>
                      Home
                    </Link>
                  </Box>
                )}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      </Flex>
    </>
  );
};
