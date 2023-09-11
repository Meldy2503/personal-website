import React, { useState } from "react";
import { Box, Input, Spinner, Textarea, useColorMode } from "@chakra-ui/react";
import { Title } from "../utils/funcs";
import { contactData } from "../utils/constants";
import InputElement from "../input";
import { useToast } from "@chakra-ui/react";
import { send } from "@emailjs/browser";
import { Buttn } from "../button";
import { usePathname } from "next/navigation";

interface Props {
  children?: React.ReactNode;
  px?: string | any;
  py?: string;
  shadow?: string;
  icon?: any;
  placeholder?: string;
  type?: string;
  onClose?: () => void;
}

interface UserDetailsProps {
  fullName: string;
  email: string;
  message: string;
}

const ContactMe = ({ children, px, py, shadow, onClose }: Props) => {
  const { colorMode } = useColorMode();
  const path = usePathname();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetailsProps>({
    fullName: "",
    email: "",
    message: "",
  });

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    if (!userDetails) {
      return;
    }
    const { fullName, email, message } = userDetails;

    try {
      setLoading(true);
      const templateParams = {
        user_name: fullName,
        user_email: email,
        user_message: message,
      };

      await send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );

      toast({
        title: "Success",
        description: "Thanks for reaching out, you will get a response soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });

      if (onClose) {
        onClose();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Oops!!! Something went wrong, please try again",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });

      console.log("FAILED...", error);
    } finally {
      setLoading(false);
      if (!path.includes("pages")) {
        setTimeout(() => {
          window.location.reload();
        }, 1000); // Reload after 1 second
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const inputLeftElementBg = colorMode === "dark" ? "brand.550" : "brand.320";

  const inputLeftElementBgColor =
    colorMode === "dark" ? "brand.350" : "brand.380";

  const [focusIndex, setFocusIndex] = React.useState(null);

  const handleFocusColor = (index: any) => {
    setFocusIndex(index);
  };

  loading && <Spinner />;

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
        <form onSubmit={handleFormSubmit}>
          {contactData.map((item, index) => {
            return (
              <InputElement
                key={index}
                icon={item.icon}
                type={item.type}
                name={item.name}
                onChange={handleInputChange}
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
            <Buttn loading={loading} type="submit">
              send message
            </Buttn>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ContactMe;
