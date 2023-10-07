"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import theme from "./components/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LoadingIcon from "./components/utils/loader";

export function Providers({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    },500); 

    return () => clearTimeout(delay);
  }, []);
  return (
   
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {loading ? <LoadingIcon /> : children }
      </ChakraProvider>
    </CacheProvider>
  );
}
