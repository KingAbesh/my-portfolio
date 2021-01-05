import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { isInViewport } from "../../utils/isInViewPort";

export const Contact = () => {
  const history = useHistory();

  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (isInViewport(ref)) {
      history.push(window.location.pathname + "#contact");
    }
  };
  return (
    <Flex
      px={{ base: 8, md: 24, xl: 32 }}
      ref={ref as React.RefObject<HTMLDivElement>}
      h="fit-content"
      py={{ base: 8, md: 16 }}
      id="contact"
      flexDir={{ base: "column", lg: "row" }}
    >
      <Box flex="1">
        <Flex>
          <Box
            as={Text}
            position="relative"
            textAlign="start"
            mr="auto"
            fontFamily="Poppins"
            fontWeight="600"
            fontSize={{ base: "1.4rem", md: "2rem" }}
            zIndex="2"
            display="inline-block"
            w="fit-content"
            _before={{
              content: '""',
              position: "absolute",
              width: "100%",
              height: "0",
              border: "2px solid #FCD1A8",
              bottom: { base: "0.5rem", md: "0.7rem" },
              zIndex: "-1",
            }}
          >
            Let me handle your
          </Box>
        </Flex>
        <Text
          fontFamily="Poppins"
          fontWeight="600"
          fontSize={{ base: "1.4rem", md: "2rem" }}
          textAlign="start"
        >
          project, professionally
        </Text>
        <Text
          fontFamily="poppins"
          as="small"
          textAlign="start"
          mt={4}
          display="block"
        >
          Need to call on a software engineer ? I am your guy
        </Text>
      </Box>
      <Box flex="1">
        <CustomInput placeholder="Your email address" />
        <CustomInput placeholder="Your name / company name" />
        <CustomInput placeholder="Your message" isTextArea />
        <Flex justify="flex-end">
          <Button
            background="transparent"
            ml="auto"
            fontFamily="Poppins"
            color="#4093DC"
            letterSpacing="0.396px"
            border="1px solid #4093DC"
            px={8}
            py={4}
            borderRadius="0"
            transition="0.3s ease-out"
            _focus={{
              outline: "none",
            }}
            _hover={{ transform: "scaleX(1.1)" }}
          >
            send
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

interface CustomInputProps {
  placeholder: string;
  isTextArea?: boolean;
}

const CustomInput: React.FunctionComponent<CustomInputProps> = (props) => {
  return (
    <Box
      as={props.isTextArea ? Textarea : Input}
      my={4}
      placeholder={props.placeholder}
      backgroundColor="white"
      rows="10"
      borderRadius="0"
      _placeholder={{
        fontFamily: "poppins",
      }}
      pl={{ base: 4, md: 8 }}
      py={{ base: 6, md: 8 }}
    />
  );
};
