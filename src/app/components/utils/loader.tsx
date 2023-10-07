"use client";

import { Center } from "@chakra-ui/react";
import Image from "next/image";

const LoadingIcon = () => {
  return (
    <Center h="100vh">
      <Image
        src="/assets/cube-loader.svg"
        height={100}
        width={100}
        alt="picture of this project"
      />
    </Center>
  );
};

export default LoadingIcon;
