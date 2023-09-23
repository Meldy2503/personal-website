import { Heading } from "@chakra-ui/react";
import React from "react";

const MainHeading = () => {
  return (
    <Heading
      color="brand.100"
      fontWeight={"900"}
      fontSize={{ base: "2.3rem", sm: "2.6rem", md: "3rem" }}
      className="heading"
    >
      <span>Elevating&nbsp;</span>
      <span>Designs&nbsp;</span>
      <span>With&nbsp;</span>
      <span>Code&nbsp;</span>
      <span>Mastery&nbsp;</span>
    </Heading>
  );
};

export default MainHeading;
