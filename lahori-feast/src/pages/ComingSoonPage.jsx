import React from "react";
import { Box, Text, VStack, Flex, Heading, Button, useBreakpointValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import FoodSlider from "../components/landing/FoodSlider";

const ComingSoonPage = () => {
  const headingSize = useBreakpointValue({ base: "2xl", md: "4xl" });
  const textSize = useBreakpointValue({ base: "md", md: "lg" });
  const navigate = useNavigate(); // Hook for navigation

  return (
    <Box
      bgGradient="linear(to-b, gray.900, gray.800)"
      color="white"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      {/* Heading Section */}
      <VStack spacing={6} textAlign="center">
        <Heading
          fontSize={headingSize}
          bgGradient="linear(to-r, teal.400, blue.500, purple.600)"
          bgClip="text"
          fontWeight="extrabold"
        >
          We're Bringing Something Amazing to You!
        </Heading>
        <Text fontSize={textSize} color="whiteAlpha.800">
          Our website is currently under development. We are working hard to
          deliver something extraordinary to your screen. Stay tuned!
        </Text>

        {/* Button Section */}
        <Button
          mt={4}
          size="lg"
          bgGradient="linear(to-r, teal.400, blue.500, purple.600)"
          color="white"
          _hover={{
            bgGradient: "linear(to-r, teal.500, blue.600, purple.700)",
            transform: "scale(1.05)",
          }}
          _active={{ transform: "scale(0.95)" }}
          borderRadius="full"
          fontWeight="bold"
          px={8}
          onClick={() => navigate("/landing")}
        >
          Explore Now
        </Button>
      </VStack>

      {/* Food Slider */}
      <FoodSlider />

      {/* Footer Section */}
      <Flex
        mt={12}
        fontSize="sm"
        color="whiteAlpha.700"
        justifyContent="center"
      >
        <Text>© {new Date().getFullYear()} Lazeez Lahori. All Rights Reserved.</Text>
      </Flex>
    </Box>
  );
};

export default ComingSoonPage;
