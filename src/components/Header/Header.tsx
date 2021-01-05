import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface HeaderProps {
  primaryText: string;
  secondaryText: string;
}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return (
    <React.Fragment>
      <Flex>
        <Box
          as={Text}
          position="relative"
          textAlign="start"
          mr="auto"
          fontFamily="Poppins"
          fontWeight="600"
          fontSize={{ base: "1.4rem", md: "2rem" }}
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
          {props.primaryText}
        </Box>
      </Flex>
      <Text
        fontFamily="Poppins"
        fontSize={{ base: "1.4rem", md: "2rem" }}
        fontWeight="600"
        textAlign="start"
      >
        {props.secondaryText}
      </Text>
    </React.Fragment>
  );
};
