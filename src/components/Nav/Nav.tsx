import { Flex, List, ListItem, Link, Image, Box } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../../utils/hooks";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import "./Nav.css";
import logo from "../../assets/icons/kingabesh-logo1.svg";
import { useHistory } from "react-router-dom";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const [changeNav, setChangeNav] = useState(false);

  const history = useHistory();

  const node = useRef<HTMLDivElement>();

  useEffect(() => {
    history.push(window.location.pathname + "#home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setChangeNav(true);
    } else {
      setChangeNav(false);
    }
  };

  const navStuff = [
    {
      name: "Home",
      to: "#home",
    },
    {
      name: "My Services",
      to: "#services",
    },
    {
      name: "Projects",
      to: "#projects",
    },
    {
      name: "Contact Me",
      to: "#contact",
    },
  ];

  const getHash = (): string => "#" + window.location.href.split("#")[1];

  const isActive = (to: string): boolean => getHash() === to;

  return (
    <>
      <Flex
        justify="space-between"
        bg="white"
        color="white"
        h="10vh"
        position="fixed"
        className="desktop-nav"
        top="0"
        left="0"
        boxShadow={`${changeNav ? "md" : "none"}`}
        w="100%"
        //   bg={`${changeNav ? "#F8F7F7" : "white"}`}
        zIndex="20"
        overflowY="hidden"
        px={16}
      >
        <Flex
          flex="1"
          // bg={`${changeNav ? "#F8F7F7" : "transparent"}`}
          h="50%"
          align="center"
          cursor="pointer"
          d="flex"
        >
          <Image
            objectFit="cover"
            alt="wocman logo"
            src={logo}
            mt={16}
            ml="-3rem"
            loading="eager"
            h="120px"
            zIndex="-1"
          />
        </Flex>
        <Flex flex="1" justifyContent="flex-end" align="center" className="nav">
          <List
            styleType="none"
            display="flex"
            justifyContent="space-evenly"
            //   w="80%"
            fontFamily="Poppins"
            align="center"
          >
            {navStuff.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  color="black"
                  transition="0.3s ease-out"
                  opacity={`${isActive(item.to) ? "1" : "0.4"}`}
                  _hover={{ opacity: 1 }}
                >
                  <Box
                    as={Link}
                    href={item.to}
                    position="relative"
                    _focus={{
                      outline: "none",
                      boxShadow: "none",
                    }}
                    _hover={{
                      textDecor: "none",
                    }}
                    transition="0.3s ease-out"
                    mr={index !== navStuff.length - 1 ? 16 : 0}
                    className={`link ${isActive(item.to) ? "active" : ""}`}
                    _before={{
                      content: '""',
                      position: "absolute",
                      width: "100%",
                      height: "0",
                      border: "2px solid #FCD1A8",
                      bottom: "0.3rem",
                      display: `${isActive(item.to) ? "block" : "none"}`,
                      zIndex: "-1",
                    }}
                  >
                    {item.name}
                  </Box>
                </ListItem>
              );
            })}
          </List>
        </Flex>
      </Flex>
      <div className={`mobile-nav ${changeNav ? "changeNav" : ""}`}>
        <div ref={node as React.RefObject<HTMLDivElement>}>
          <Flex flex="1" bg="transparent" justify="center" align="center">
            <Image
              objectFit="cover"
              loading="eager"
              alt="abasifreke logo"
              src={logo}
              mt={16}
              ml="-1.5rem"
              h="150px"
            />
          </Flex>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} className="w-full">
            <div className="flex flex-col justify-center">
              <List
                styleType="none"
                w="100%"
                color="black"
                fontFamily="Poppins"
                align="center"
                textAlign="center"
              >
                {navStuff.map((item, index) => (
                  <ListItem
                    key={index}
                    my={8}
                    opacity={`${isActive(item.to) ? "1" : "0.4"}`}
                    transition="0.3s ease-out"
                    _hover={{ opacity: 1 }}
                  >
                    <Box
                      as={Link}
                      onClick={() => {
                        setOpen(false);
                      }}
                      transition="0.3s ease-out"
                      href={item.to}
                      position="relative"
                      w="100%"
                      _focus={{
                        outline: "none",
                        boxShadow: "none",
                      }}
                      _hover={{
                        textDecor: "none",
                      }}
                      className={`link ${isActive(item.to) ? "active" : ""}`}
                    >
                      {item.name}
                    </Box>
                  </ListItem>
                ))}
              </List>
            </div>
          </Menu>
        </div>
      </div>
    </>
  );
};
