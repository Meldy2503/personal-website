"use client";

import { Center } from "@chakra-ui/react";
import Image from "next/image";

const LoadingIcon = () => {
  return (
    <Center h="100vh">
      <Image
        src="/assets/cube-loader.svg"
        height={50}
        width={50}
        alt="picture of this project"
      />
    </Center>
  );
};

export default LoadingIcon;
