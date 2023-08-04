import React, { useState } from "react";
import {
  Box,
  Flex,
  Icon,
  Tooltip,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";

import { menuData } from "./utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsPersonCircle } from "react-icons/bs";
import Sidebar from "./sidebar";

export const DesktopNav = () => {
  const activeColorScheme = useColorModeValue("brand.800", "brand.350");
  const [currentMenu, setCurrentMenu] = useState("#home");
  const path = usePathname();

  const handlecurrentMenu = (menu: string) => {
    setCurrentMenu(menu);
  };
  return (
    <Box
      w="fit-content"
      bg="brand.600"
      h="100%"
      position="sticky"
      top="0px"
      left="10px"
      className="scroll-bar"
      shadow={"md"}
      py="1rem"
      px="1.5rem"
    >
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
                      currentMenu === menu.id ? activeColorScheme : "brand.900"
                    }
                    _hover={{
                      color: "brand.800",
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
              color="brand.800"
              mt="1.5rem"
              _hover={{
                color: "brand.900",
              }}
            />
          </Link>
        </Tooltip>
      )}
    </Box>
  );
};

export const MobileNav = () => {
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
        bg="brand.600"
        position="sticky"
        top="0px"
        shadow={"md"}
      >
        {/* to open profile on mobile */}
        <>
          <Box onClick={onProfileOpen}>
            <Icon as={BsPersonCircle} boxSize={5} color="brand.900" />
          </Box>
          <Drawer
            placement="left"
            onClose={onProfileClose}
            isOpen={isProfileOpen}
          >
            <DrawerOverlay />
            <DrawerContent bg="brand.600">
              <Box
                onClick={onProfileClose}
                bg="brand.500"
                px="1.7rem"
                py="1rem"
              >
                <Icon as={AiOutlineClose} color="brand.900" />
              </Box>
              <DrawerBody p="0">
                <Sidebar />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>

        {/* to open the menu on mobile */}

        <>
          <Box onClick={onMenuOpen}>
            <Icon as={GiHamburgerMenu} boxSize={5} color="brand.900" />
          </Box>
          <Drawer placement="right" onClose={onMenuClose} isOpen={isMenuOpen}>
            <DrawerOverlay />
            <DrawerContent bg="brand.600">
              <Box onClick={onMenuClose} bg="brand.500" px="1.7rem" py="1rem">
                <Icon as={AiOutlineClose} color="brand.900" />
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
                        <Box color="brand.900" key={index}>
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
                  <Box color="brand.900" mt="1.5rem">
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
