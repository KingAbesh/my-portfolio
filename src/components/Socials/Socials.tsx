import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import github from "../../assets/icons/github.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import { useHistory } from "react-router-dom";
import { isInViewport } from "../../utils/isInViewPort";

export const Socials = () => {
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

  const social: Array<{ icon: string; title: string; href: string }> = [
    {
      icon: github,
      title: "Github",
      href: "https://github.com/KingAbesh",
    },
    {
      icon: linkedin,
      title: "Linkedin",
      href: "https://www.linkedin.com/in/abasifreke-ekwere",
    },
    {
      icon: twitter,
      title: "Twitter",
      href: "https://twitter.com/KingAbesh_",
    },
  ];
  return (
    <Box
      px={{ base: 8, md: 24, xl: 32 }}
      ref={ref as React.RefObject<HTMLDivElement>}
      background="white"
      py={{ base: 8, md: 16 }}
    >
      <Flex justify="center">
        <Box
          as={Text}
          position="relative"
          textAlign="center"
          mx="auto"
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
          Don't be a stranger
        </Box>
      </Flex>
      <Text fontFamily="Poppins" my={{ base: 6, md: 12 }}>
        I’m an active member on some of these social media. Feel free to follow
        me, comment and message me. You can also give me a shout-out while at
        it. 🤲🏾
      </Text>
      <Flex flexWrap="wrap" justify="center" my={{ base: 6, md: 12, xl: 16 }}>
        {social.map((item, index) => {
          return (
            <SocialItem src={item.icon} title={item.title} href={item.href} />
          );
        })}
      </Flex>
    </Box>
  );
};

interface SocialItemProps {
  src: string;
  title: string;
  href: string;
}

const SocialItem: React.FunctionComponent<SocialItemProps> = (props) => {
  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      w={{ base: "90%", md: "48%", xl: "33%" }}
      my={{ base: 8, xl: 0 }}
    >
      <Image src={props.src} />
      <Link
        href={props.href}
        isExternal
        textDecor="underline"
        _focus={{ outline: "none" }}
      >
        <Text
          fontFamily="Poppins"
          color="#696871"
          fontSize="1.5rem"
          mt={{ base: 4, md: 8 }}
          transition="0.3s ease-out"
          _hover={{ transform: "scaleX(1.1)", textDecor: "none" }}
        >
          {props.title}
        </Text>
      </Link>
    </Flex>
  );
};
