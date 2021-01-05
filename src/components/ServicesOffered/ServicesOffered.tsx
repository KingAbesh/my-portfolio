import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { Header } from "../Header/Header";
import web from "../../assets/icons/web.svg";
import maintenance from "../../assets/icons/maintenance.svg";
import mobile from "../../assets/icons/mobile.svg";
import { useHistory } from "react-router-dom";
import { isInViewport } from "../../utils/isInViewPort";

export const ServicesOffered = () => {
  const history = useHistory();

  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (isInViewport(ref)) {
      history.push(window.location.pathname + "#services");
    }
  };

  const services: Array<{
    icon: string;
    heading: string;
    subHeading: string;
    color: string;
  }> = [
    {
      icon: web,
      heading: "Web Development",
      subHeading: "I build for the web",
      color: "#E3FCE6",
    },
    {
      icon: maintenance,
      heading: "Web and Mobile Maintenance",
      subHeading: "I maintain existing web and mobile projects",
      color: "#FFF6E5",
    },
    {
      icon: mobile,
      heading: "Mobile App Development",
      subHeading: "I build for mobile and other hand-held devices",
      color: "#E8F9FE",
    },
  ];

  return (
    <Box
      mt={48}
      ref={ref as React.RefObject<HTMLDivElement>}
      mb={{ base: 6, md: 18, xl: 48 }}
      id="services"
      px={{ base: 6, md: 24, xl: 32 }}
      //   backgroundColor="#FAFBFE"
    >
      <Header primaryText="i provide" secondaryText="awesome services too" />
      <Flex flexWrap="wrap" justify="center" my={{ base: 16, md: 32 }}>
        {services.map((item, index) => {
          return (
            <Service
              key={index}
              bgColor={item.color}
              src={item.icon}
              heading={item.heading}
              subHeading={item.subHeading}
            />
          );
        })}
      </Flex>
    </Box>
  );
};

interface ServiceProps {
  bgColor: string;
  src: string;
  heading: string;
  subHeading: string;
}

const Service: React.FunctionComponent<ServiceProps> = (props) => {
  return (
    <Box
      w={{ base: "90%", md: "50%", xl: "33%" }}
      pl={{ base: 0, xl: 8 }}
      mb={{ base: 12, xl: 0 }}
    >
      <Flex
        bgColor={props.bgColor}
        w="50px"
        h="50px"
        justify="center"
        align="center"
        borderRadius="5px"
      >
        <Image src={props.src} />
      </Flex>
      <Text fontFamily="Poppins" fontWeight="600" textAlign="start" mt={8}>
        {props.heading}
      </Text>
      <Text
        fontFamily="Poppins"
        fontWeight="300"
        textAlign="start"
        fontSize="0.8rem"
        my={4}
      >
        {props.subHeading}
      </Text>
    </Box>
  );
};
