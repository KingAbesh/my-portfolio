import { Flex, Image, Link, Text } from "@chakra-ui/react";
import logo from "../../assets/icons/kingabesh-logo1.svg";
import React from "react";

export const Footer = () => {
  return (
    <Flex
      justify={{ base: "flex-start", lg: "space-between" }}
      align={{ base: "flex-start", lg: "center" }}
      px={{ base: 8, md: 24, xl: 32 }}
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Image
        objectFit="cover"
        alt="wocman logo"
        src={logo}
        ml={{ base: "-2rem", lg: "-4rem" }}
        h="120px"
        zIndex="-1"
      />
      <Text fontFamily="Poppins" my={{ base: 4, lg: 0 }}>
        Copyright &copy; {new Date().getFullYear()}
      </Text>
      <Text my={{ base: 4, lg: 0 }}>
        Designed by{" "}
        <Link
          href="https://twitter.com/LvzyEngine"
          isExternal
          fontFamily="Poppins"
          fontWeight="900"
        >
          Lvzy Engine
        </Link>
      </Text>
    </Flex>
  );
};
