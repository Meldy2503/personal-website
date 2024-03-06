"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import theme from "./components/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LoadingIcon from "./components/utils/loader";
 import { motion, AnimatePresence } from "framer-motion";


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

      <AnimatePresence>
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <LoadingIcon />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </ChakraProvider>
    </CacheProvider>
  );
}


