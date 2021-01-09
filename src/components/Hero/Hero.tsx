import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { AiOutlineLine } from "react-icons/ai";
import portfolio from "../../assets/images/portfolio2.jpg";
import vector from "../../assets/images/brown-vector.svg";
import { useHistory } from "react-router-dom";
import { isInViewport } from "../../utils/isInViewPort";

export const Hero = () => {
  const history = useHistory();

  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (isInViewport(ref)) {
      history.push(window.location.pathname + "#home");
    }
  };

  const stack: Array<string> = [
    "React",
    "React Native",
    "Node JS",
    "Laravel/Lumen",
  ];

  return (
    <Box
      position="relative"
      overflowX="visible"
      id="home"
      ref={ref as React.RefObject<HTMLDivElement>}
      mt={{ base: "20vh", lg: "10vh" }}
      //   backgroundColor="#FAFBFE"
      px={{ base: 4, md: 12, xl: 16 }}
    >
      <Flex
        bgGradient="linear(259.08deg, #D5ECFF 0.69%, #E6F2FC 100%)"
        boxShadow="0px 4px 5px rgba(0, 0, 0, 0.02)"
        borderRadius="8px"
        px={{ base: 0, xl: 12 }}
        pt={{ base: 0, xl: 8 }}
        flexDirection={{ base: "column", xl: "row" }}
      >
        <Flex
          flexDir="column"
          flex={1}
          justify="center"
          order={{ base: 1, xl: 0 }}
          px={{ base: 4, xl: 0 }}
        >
          <Flex align="center" mt={16}>
            <Icon as={AiOutlineLine} color="#FF8400" />{" "}
            <Text color="#FF8400" fontFamily="Poppins">
              FullStack Developer
            </Text>
          </Flex>
          <Text
            as="h1"
            fontFamily="Poppins"
            noOfLines={2}
            fontSize={{ base: "2xl", md: "3xl", xl: "5xl" }}
            mt={{ base: "2rem", xl: 0 }}
            textAlign="start"
            // textEllipsis="none"
            fontWeight="600"
            letterSpacing="0.396px"
          >
            Hi, i’m Abasifreke, Software Craftsman
          </Text>
          <Text
            as="small"
            fontFamily="Poppins"
            fontSize="0.9rem"
            textAlign="start"
            fontWeight="300"
            letterSpacing="0.396px"
            lineHeight="24px"
            my={8}
          >
            I craft premium digital work for web and mobile with creative
            agencies and global brands alike – putting passion, pride and lots
            of grit into everything I do.
          </Text>
          <Flex
            flexWrap="wrap"
            justify="space-between"
            mt={{ base: 8, md: 16, xl: 32 }}
          >
            {stack.map((item, index) => {
              return (
                <Box key={index} p={4}>
                  <Text fontFamily="Poppins" opacity="0.5">
                    {item}
                  </Text>
                </Box>
              );
            })}
          </Flex>
        </Flex>
        {/* <Box
          flex={1}
          backgroundImage={`url(${portfolio})`}
          //   h="150%"
          w="100px"
          backgroundAttachment="fixed"
          bgRepeat="no-repeat"
          bgSize="cover"
          backgroundPosition="center"
        ></Box> */}
        <Box flex="1" justify="center">
          <Image
            src={portfolio}
            h={{ base: "50%", xl: "110%" }}
            w={{ base: "100%", xl: "68%" }}
            d={{ base: "none", xl: "block" }}
            objectFit="cover"
            mx="auto"
            borderRadius="8px"
          />
        </Box>
      </Flex>
      <Image
        src={vector}
        position="absolute"
        bottom="-10rem"
        right="-4.5rem"
        zIndex="-1"
      />
    </Box>
  );
};
