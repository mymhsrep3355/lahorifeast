import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import ContactForm from "../components/landing/ContactForm";
import Footer from "../components/landing/Footer";
import VideoSection from "../components/landing/VideoSection";
import Footnote from "../components/landing/FootNote";

const LandingPage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box position="relative" w="100%" mx="auto">
        {/* Hero Section */}
        <Box id="home">
          <HeroSection />
        </Box>

        <Box id="video">
          <VideoSection />
        </Box>

        {/* Contact Form Section */}
        <Box id="contact" >
          <ContactForm />
        </Box>

        <Box id="contact" >
          <Footer />
        </Box>

        <Box id="contact" >
          <Footnote />
        </Box>
      </Box>
    </>
  );
};

export default LandingPage;


//
//
//mt={{ base: 12, md: 16 }}