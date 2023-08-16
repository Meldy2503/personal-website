import { Wrap, WrapItem, useDisclosure, useToast } from "@chakra-ui/react";
import { Buttn } from "./button";

export function Toast() {
  const toast = useToast();
  const id = "test-toast";

  return (
    <Wrap>
      <WrapItem>
        <Buttn
          onClick={() => {
            if (!toast.isActive(id)) {
              toast({
                id,
                title: "Message sent Successfully",
                position: "top-right",
                status: "success",
                variant: "solid",
                isClosable: true,
              });
            }
          }}
        >
          send message
        </Buttn>
      </WrapItem>
    </Wrap>
  );
}
