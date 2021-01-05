import { Box } from "@chakra-ui/react";
import React from "react";
import { Contact } from "../../components/Contact/Contact";
import { Footer } from "../../components/Footer/Footer";
import { Hero } from "../../components/Hero/Hero";
import { NavBar } from "../../components/Nav/Nav";
import { Projects } from "../../components/Projects/Projects";
import { ServicesOffered } from "../../components/ServicesOffered/ServicesOffered";
import { Socials } from "../../components/Socials/Socials";

export const Home = () => {
  return (
    <Box
      zIndex="2"
      overflowX="hidden"
      position="relative"
      backgroundColor="#FAFBFE"
    >
      <NavBar />
      <Hero />
      <ServicesOffered />
      <Projects />
      <Socials />
      <Contact />
      <Footer />
    </Box>
  );
};
