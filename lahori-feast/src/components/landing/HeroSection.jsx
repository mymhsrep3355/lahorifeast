import React from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  return (
    <Box as="section" position="relative" w="100%" bg="white">
      <Box
        w="100%"
        h={{ base: "60vh", md: "80vh" }}
        bgImage="url('/catering.jpg')"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        position="relative"
        borderBottomLeftRadius="50% 5vh"
        borderBottomRightRadius="50% 5vh"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg="rgba(0, 0, 0, 0.6)"
        ></Box>

        <VStack
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          spacing={4}
        >
          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            color="#EAB22F"
            fontFamily="'Georgia', serif"
            fontStyle={"italic"}
            fontWeight={"light"}
          >
            Contact Lahori&apos;s Catering
          </Heading>
        </VStack>
      </Box>

      <Box
        w="100%"
        bg="white"
        mt={10}
        py={12}
        px={{ base: 4, md: 16 }}
        textAlign="center"
        boxShadow="lg"
      >
        
        <Heading
          fontSize={{ base: "2xl", md: "4xl" }}
          color="#c99720"
          fontFamily="'Georgia', serif"
          mb={6}
          fontStyle="italic"
        >
          Get In Touch With Us
        </Heading>

        {/* Contact Details Grid */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={8}
          mt={16}
        >
          {/* Location */}
          <GridItem>
            <Icon as={FaMapMarkerAlt} w={10} h={10} color="#EAB22F" />
            <Text
              fontWeight="semibold"
              color="#EAB22F"
              mt={4}
              fontFamily="'Georgia', serif"
              fontSize="lg"
              fontStyle={"italic"}
            >
              Our Location
            </Text>
            <Text
              fontSize="sm"
              color="gray.600"
              mt={2}
              px={{ base: 2, md: 0 }}
              maxW="300px"
              mx="auto"
            >
             Lahore
            </Text>
          </GridItem>

          {/* Call Us */}
          <GridItem>
            <Icon as={FaPhoneAlt} w={10} h={10} color="#EAB22F" />
            <Text
              fontWeight="semibold"
              color="#EAB22F"
              mt={4}
              fontFamily="'Georgia', serif"
              fontSize="lg"
              fontStyle={"italic"}
            >
              Call Us
            </Text>
            <Text fontSize="sm" color="gray.600" mt={2}>
              0311-1116868
            </Text>
          </GridItem>

          {/* Write to Us */}
          <GridItem>
            <Icon as={FaEnvelope} w={10} h={10} color="#EAB22F" />
            <Text
              fontWeight="semibold"
              color="#EAB22F"
              mt={4}
              fontFamily="'Georgia', serif"
              fontSize="lg"
              fontStyle={"italic"}
            >
              Write to Us
            </Text>
            <Text fontSize="sm" color="gray.600" mt={2}>
              info@lahorifeast.com
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
