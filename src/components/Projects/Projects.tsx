import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { Header } from "../Header/Header";
import wocman from "../../assets/images/wocman.png";
import nuvle from "../../assets/images/nulve.png";
import irecharge from "../../assets/images/irecharge.png";
import accelerate from "../../assets/images/accelerate.png";
import { useHistory } from "react-router-dom";
import { isInViewport } from "../../utils/isInViewPort";
import LazyImage from "../LazyImage/LazyImage";

export const Projects = () => {
  const history = useHistory();

  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (isInViewport(ref)) {
      history.push(window.location.pathname + "#projects");
    }
  };

  const projects: Array<{ title: string; href: string; image: string }> = [
    {
      title: "Wocman",
      href: "https://wocman.netlify.app",
      image: wocman,
    },
    {
      title: "Accelerate",
      href: "https://accelerate-home.netlify.app",
      image: accelerate,
    },
    {
      title: "iRecharge",
      href: "https://irecharge.com.ng",
      image: irecharge,
    },
    {
      title: "Nuvle",
      href: "https://staging--nuvle.netlify.app",
      image: nuvle,
    },
  ];

  return (
    <Box
      mt={{ base: 8, md: 16, xl: 48 }}
      px={{ base: 6, md: 24, xl: 32 }}
      ref={ref as React.RefObject<HTMLDivElement>}
      id="projects"
      //   backgroundColor="#FAFBFE"
    >
      <Header primaryText="Here are" secondaryText="some of my works" />
      <Flex flexWrap="wrap" justify="space-between">
        {projects.map((item, index) => {
          return (
            <ProjectItem
              key={index}
              index={index}
              title={item.title}
              href={item.href}
              image={item.image}
            />
          );
        })}
      </Flex>
      <Flex
        mt={8}
        mb={{ base: 8, md: 16 }}
        onClick={() => history.push("/projects")}
      >
        <Box
          as={Link}
          position="relative"
          textAlign="start"
          mr="auto"
          fontFamily="Poppins"
          fontWeight="600"
          fontSize={{ base: "1.4rem", md: "2rem" }}
          transition="0.3s ease-out"
          display="inline-block"
          _hover={{ transform: "scaleX(1.1)", textDecor: "none" }}
          w="fit-content"
          _before={{
            content: '""',
            position: "absolute",
            width: "100%",
            height: "0",
            border: { base: "1px solid #4594D9", md: "4px solid #4594D9" },
            bottom: { base: "0.3rem", md: "0.5rem" },
            zIndex: "-1",
          }}
        >
          View More
        </Box>
      </Flex>
    </Box>
  );
};

interface ProjectItemProps {
  index: number;
  title: string;
  href: string;
  image: string;
}

const ProjectItem: React.FunctionComponent<ProjectItemProps> = (props) => {
  const isThirdInSequence = props.index % 1 === 0;

  return (
    // <Flex
    //   backgroundSize="cover"
    //   cursor="pointer"
    //   backgroundRepeat="no-repeat"
    //   backgroundPosition="top center"
    //   //   backgroundImage={`url(${props.image})`}
    //   backgroundImage={`linear-gradient(180deg, rgba(174, 26, 26, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url(${props.image})`}
    //   width={{ base: "100%", lg: isThirdInSequence ? "100%" : "48%" }}
    //   h={{ base: "300px", xl: `${isThirdInSequence ? "600px" : "500px"}` }}
    //   borderRadius="8px"
    //   my={4}
    //   alignItems="flex-end"
    //   overflow="hidden"
    //   transition="0.3s ease-out"
    //   _hover={{
    //     transform: "scale(0.95)",
    //     backgroundImage: `linear-gradient(180deg, rgba(174, 26, 26, 0) 0%, rgba(0, 0, 0, 0.4) 100%), url(${props.image})`,
    //   }}
    //   p={{ base: 4, md: 8, xl: 12 }}
    //   onClick={() => window.open(props.href, "_blank")}
    // >
    //   <Text
    //     color="white"
    //     fontFamily="Poppins"
    //     h="fit-content"
    //     fontSize={{ base: "1.4rem", md: "2rem" }}
    //     fontWeight="600"
    //     lineHeight="43px"
    //     letterSpacing="0.396px"
    //   >
    //     {props.title}
    //   </Text>
    // </Flex>
    <Flex
      cursor="pointer"
      width={{ base: "100%", lg: isThirdInSequence ? "100%" : "48%" }}
      borderRadius="8px"
      my={{ base: 4, md: 8 }}
      overflow="hidden"
      position="relative"
      transition="0.3s ease-out"
      _hover={{
        transform: "scale(0.95)",
        // backgroundImage: `linear-gradient(180deg, rgba(174, 26, 26, 0) 0%, rgba(0, 0, 0, 0.4) 100%), url(${props.image})`,
      }}
      //   p={{ base: 4, md: 8, xl: 12 }}
      onClick={() => window.open(props.href, "_blank")}
    >
      <LazyImage src={props.image} alt={props.title} />
      <Flex
        position="absolute"
        background="linear-gradient(180deg, rgba(174, 26, 26, 0) 0%, rgba(0, 0, 0, 0.4) 100%)"
        p={{ base: 2, md: 8 }}
        bottom="0"
        w="100%"
      >
        <Text
          color="white"
          fontFamily="Poppins"
          textAlign="start"
          h="fit-content"
          fontSize={{ base: "1rem", md: "2rem" }}
          fontWeight="600"
          lineHeight="23px"
          letterSpacing="0.396px"
        >
          {props.title}
        </Text>
      </Flex>
    </Flex>
  );
};
