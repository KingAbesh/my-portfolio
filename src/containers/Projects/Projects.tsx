import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Header } from "../../components/Header/Header";
import wocman from "../../assets/images/wocman.png";
import nuvle from "../../assets/images/nulve.png";
import irecharge from "../../assets/images/irecharge.png";
import accelerate from "../../assets/images/accelerate.png";
import foodDelivery from "../../assets/images/food-delivery.png";
import logistics from "../../assets/images/logistics.png";
import todma from "../../assets/images/todma.png";
import { useHistory } from "react-router-dom";
import { shuffleArray } from "../../utils/helper";

export const Projects = () => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    {
      title: "Todma Traffic Offenders Dashboard",
      href: "http://www.todma.istrategytech.com/#/admin/dashboard",
      image: todma,
    },
    {
      title: "Logistics Dashboard",
      href: "http://logistic-admin.istrategytech.com/",
      image: logistics,
    },
    {
      title: "Food Delivery Dashboard",
      href: "https://foodadmin.istrategytech.com/",
      image: foodDelivery,
    },
  ];

  const shuffledArray = shuffleArray(projects);

  return (
    <Box
      my={{ base: 8, md: 8 }}
      px={{ base: 6, md: 24, xl: 32 }}
      id="projects"
      //   backgroundColor="#FAFBFE"
    >
      <Flex mb={8} width="fit-content">
        <Icon
          as={AiOutlineArrowLeft}
          onClick={() => history.push("/")}
          cursor="pointer"
          h={{ base: 6, md: 8 }}
          w={{ base: 6, md: 8 }}
        />
      </Flex>
      <Header primaryText="My Works" secondaryText="" />
      <Flex flexWrap="wrap" justify="space-between">
        {shuffledArray.map((item, index) => {
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
      <Flex mt={8} mb={{ base: 8, md: 16 }} onClick={() => history.push("/")}>
        <Box
          as={Link}
          position="relative"
          textAlign="start"
          to="/"
          mr="auto"
          zIndex="1"
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
          Go Home
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
    <Flex
      backgroundSize="cover"
      cursor="pointer"
      backgroundRepeat="no-repeat"
      backgroundPosition="top center"
      //   backgroundImage={`url(${props.image})`}
      backgroundImage={`linear-gradient(180deg, rgba(174, 26, 26, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url(${props.image})`}
      width={{ base: "100%", lg: isThirdInSequence ? "100%" : "48%" }}
      h={{ base: "300px", xl: `${isThirdInSequence ? "600px" : "500px"}` }}
      borderRadius="8px"
      my={4}
      alignItems="flex-end"
      overflow="hidden"
      transition="0.3s ease-out"
      _hover={{
        transform: "scale(0.95)",
        backgroundImage: `linear-gradient(180deg, rgba(174, 26, 26, 0) 0%, rgba(0, 0, 0, 0.4) 100%), url(${props.image})`,
      }}
      p={{ base: 4, md: 8, xl: 12 }}
      onClick={() => window.open(props.href, "_blank")}
    >
      <Text
        color="white"
        fontFamily="Poppins"
        h="fit-content"
        fontSize={{ base: "1.4rem", md: "2rem" }}
        fontWeight="600"
        lineHeight="43px"
        letterSpacing="0.396px"
      >
        {props.title}
      </Text>
    </Flex>
  );
};
