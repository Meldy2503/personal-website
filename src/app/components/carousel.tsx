import React from "react";
import { Box, Flex, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface Props {
  onClickNext?: () => void;
  onClickPrev?: () => void;
  minH?: any;
  children?: React.ReactNode;
  style?: any;
  pt?: string;
}

const Carousel = ({
  onClickNext,
  onClickPrev,
  minH,
  children,
  style,
  pt,
}: Props) => {
  const { colorMode } = useColorMode();
  const [isMobile] = useMediaQuery("(max-width: 769px)");

  return (
    <Box
      mx="auto"
      height={"fit-content"}
      overflow={"hidden"}
      minH={minH}
      w="100%"
      position="relative"
    >
      <Flex>
        <Flex
          className="slides"
          style={style}
          align={"space-between"}
          justify={"space-between"}
          w={isMobile ? "100%" : "52%"}
          pt={pt}
        >
          {children}
        </Flex>
{  onClickPrev && onClickNext  && <Box
          zIndex={1}
          color={colorMode === "dark" ? "brand.150" : "brand.450"}
         >
          <Box
            onClick={onClickPrev}
            bottom={"0rem"}
            right={"3rem"}
            position={"absolute"}
            shadow="md"
            p=".8rem"
            borderRadius="50%"
            backgroundColor={colorMode === "dark" ? "brand.950" : "brand.320"}
          >
            <FaAngleLeft />
          </Box>
          <Box
            onClick={onClickNext}
            position={"absolute"}
            bottom={"0rem"}
            shadow="md"
            right={"0rem"}
            p=".8rem"
            borderRadius="50%"
            backgroundColor={colorMode === "dark" ? "brand.950" : "brand.320"}
          >
            <FaAngleRight />
          </Box>
        </Box>}
      </Flex>
    </Box>
  );
};

export default Carousel;
