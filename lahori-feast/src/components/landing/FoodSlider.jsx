import React from "react";
import {
  Box,
  Text,
  VStack,
  Flex,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";


const foodImages = [
  "https://images.unsplash.com/photo-1712218275818-6bbb7e5a0a44?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Biryani
  "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Roti
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Kebab
  "https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Karahi
  "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Samosa
];

const FoodSlider = () => {
  const sliderSpeed = 10; // Adjust speed of the slider

  return (
    <Box overflow="hidden" width="100%" mt={8}>
      <motion.div
        style={{
          display: "flex",
          width: "100%",
        }}
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          duration: sliderSpeed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {foodImages.map((src, index) => (
          <Box
            key={index}
            as="img"
            src={src}
            alt={`Food ${index + 1}`}
            boxSize={{ base: "100px", md: "150px" }}
            mx={4}
            borderRadius="full"
            boxShadow="lg"
          />
        ))}
        {/* Duplicate to create seamless loop */}
        {foodImages.map((src, index) => (
          <Box
            key={`duplicate-${index}`}
            as="img"
            src={src}
            alt={`Food ${index + 1}`}
            boxSize={{ base: "100px", md: "150px" }}
            mx={4}
            borderRadius="full"
            boxShadow="lg"
          />
        ))}
      </motion.div>
    </Box>
  );
};

export default FoodSlider;