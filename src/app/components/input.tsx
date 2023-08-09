import React from "react";
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";

interface Props {
  icon?: any;
  placeholder?: string;
  type?: string;
  color?: any;
  bg?: any;
  onClick?: any;
  onChange?: any;
  as?: any;
}

const InputElement = ({
  icon,
  placeholder,
  type,
  bg,
  color,
  onClick,
  onChange,
  as,
}: Props) => {
  const { colorMode } = useColorMode();
  return (
    <InputGroup
      color={colorMode === "dark" ? "brand.350" : "brand.380"}
      mb="2rem"
    >
      <InputLeftElement
        pointerEvents="none"
        h="full"
        py="1.6rem"
        bg={bg}
        color={color}
      >
        <Icon as={icon} />
      </InputLeftElement>
      <Input
        as={as}
        bg={colorMode === "dark" ? "brand.700" : "brand.250"}
        border={"none"}
        placeholder={placeholder}
        _placeholder={{ color: "brand.350", fontSize: ".95rem" }}
        size="lg"
        type={type}
        focusBorderColor="transparent"
        pl="3.5rem"
        py="1.6rem"
        fontSize={".95rem"}
        shadow={"md"}
        onChange={onChange}
        onClick={onClick}
      />
    </InputGroup>
  );
};

export default InputElement;
