import React from "react";
import { Box, Input, Textarea, useColorMode } from "@chakra-ui/react";
import { Btn } from "../button";
import { Title } from "../utils/funcs";
import { contactData } from "../utils/constants";
import InputElement from "../input";

interface Props {
  children?: React.ReactNode;
  px?: string | any;
  py?: string;
  shadow?: string;
  icon?: any;
  placeholder?: string;
  type?: string;
}

const ContactMe = ({ children, px, py, shadow }: Props) => {
  const { colorMode } = useColorMode();
  const inputLeftElementBg = colorMode === "dark" ? "brand.550" : "brand.320";

  const inputLeftElementBgColor =
    colorMode === "dark" ? "brand.350" : "brand.380";

  const [focusIndex, setFocusIndex] = React.useState(null);

  const handleFocusColor = (index: any) => {
    setFocusIndex(index);
  };

  return (
    <Box id="contact" px={px} pb="1rem">
      <Title>{children}</Title>

      <Box
        px={{ base: ".7rem", sm: "1.3rem", md: "2rem" }}
        py={py}
        shadow={shadow}
        bg={colorMode === "dark" ? "brand.650" : "brand.100"}
        transition={"all .5s ease-in"}
      >
        <form action="">
          {contactData.map((item, index) => {
            return (
              <InputElement
                key={index}
                icon={item.icon}
                type={item.type}
                as={item.type === "textarea" ? Textarea : Input}
                placeholder={item.placeholder}
                bg={
                  focusIndex === index
                    ? colorMode === "dark"
                      ? "brand.800"
                      : "brand.850"
                    : inputLeftElementBg
                }
                color={
                  focusIndex === index
                    ? colorMode === "dark"
                      ? "brand.600"
                      : "brand.100"
                    : inputLeftElementBgColor
                }
                onClick={() => handleFocusColor(index)}
              />
            );
          })}

          <Box my="2rem">
            <Btn href="/">send message</Btn>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ContactMe;
