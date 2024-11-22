// import React from "react";
// import { Box, Grid, GridItem } from "@chakra-ui/react";
// import FooterLogoSection from "./FooterLogoSection";
// import FooterLinks from "./FooterLinks";
// import FooterNewsletter from "./FooterNewsletter";

// const Footer = () => {
//   return (
//     <Box
//       as="footer"
//       bg="black"
//       color="white"
//       py={12}
//       px={{ base: 4, md: 16, lg: 24 }}
//       fontFamily="'Georgia', serif"
//     >
//       {/* Footer Grid Layout */}
//       <Grid
//         templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
//         gap={{ base: 6, md: 8 }}
//         alignItems="flex-start"
//       >
//         {/* Column 1: Logo and About Section */}
//         <GridItem>
//           <FooterLogoSection />
//         </GridItem>

//         {/* Column 2: Quick Links */}
//         <GridItem>
//           <FooterLinks />
//         </GridItem>

//         {/* Column 3: Newsletter */}
//         <GridItem>
//           <FooterNewsletter />
//         </GridItem>
//       </Grid>
//     </Box>
//   );
// };

// export default Footer;

import React from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  VStack,
  Input,
  Button,
  Icon,
  HStack,
} from "@chakra-ui/react";
import {
  FaAngleRight,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <Box bg="#0E0E0E" color="white" py={10} px={5}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "center", md: "flex-start" }}
        maxW="1200px"
        mx="auto"
      >
       
        <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
          {/* Logo Section */}
          <Text fontSize="2xl" fontWeight="light" color="#EAB22F" fontStyle={"italic"}>
            Lahori's Feast Catering Co. | EST. 2000
          </Text>

          
          <Text
            textAlign={{ base: "center", md: "left" }}
            lineHeight="1.8" // Improves text readability
            fontSize="sm" // Matches design text size
          >
            Pakistan's Premier Catering Services!
            <br />
            Live Catering for Pakistani, Continental,
            <br />
            Chinese, Thai, and Japanese cuisines.
          </Text>

         
          <Stack spacing={3} textAlign={{ base: "center", md: "left" }}>
           
            <Flex align="center">
              <PhoneIcon mr={3} color="gold" />
              <Text fontSize="sm">0311-1116868</Text>
            </Flex>

            
            <Flex align="center">
              <EmailIcon mr={3} color="gold" />
              <Text fontSize="sm">info@lahorisfeast.com</Text>
            </Flex>

            {/* Address */}
            <Flex align="center">
            <EmailIcon mr={3} color="gold" />
              <Text fontSize="sm">
               Lahore
              </Text>
            </Flex>
          </Stack>
        </VStack>

       
        <VStack
          align={{ base: "center", md: "flex-start" }}
          spacing={4}
          mt={{ base: 8, md: 0 }}
        >
          {/* Heading */}
          <Text
            fontSize="xl"
            fontWeight="light"
            color="gold"
            textAlign={{ base: "center", md: "left" }}
            fontStyle={"italic"}
          >
            Quick Links
          </Text>

          {/* Links */}
          <VStack
            spacing={3}
            align={{ base: "center", md: "flex-start" }}
            fontSize="sm"
          >
            {/* Link Items */}
            <Flex align="center" cursor="pointer" _hover={{ color: "gold" }}>
              <FaAngleRight style={{ marginRight: "8px", color: "gold" }} />
              <Text _hover={{ textDecoration: "underline" }}>About Us</Text>
            </Flex>

            <Flex align="center" cursor="pointer" _hover={{ color: "gold" }}>
              <FaAngleRight style={{ marginRight: "8px", color: "gold" }} />
              <Text _hover={{ textDecoration: "underline" }}>Events</Text>
            </Flex>

            <Flex align="center" cursor="pointer" _hover={{ color: "gold" }}>
              <FaAngleRight style={{ marginRight: "8px", color: "gold" }} />
              <Text _hover={{ textDecoration: "underline" }}>Venues</Text>
            </Flex>

            <Flex align="center" cursor="pointer" _hover={{ color: "gold" }}>
              <FaAngleRight style={{ marginRight: "8px", color: "gold" }} />
              <Text _hover={{ textDecoration: "underline" }}>Contact</Text>
            </Flex>
          </VStack>
        </VStack>

        {/* Right Section */}
        <VStack
          align={{ base: "center", md: "flex-start" }}
          spacing={6}
          mt={{ base: 8, md: 0 }}
        >
          {/* Heading */}
          <Text
            fontSize="xl"
            fontWeight="light"
            color="gold"
            textAlign={{ base: "center", md: "left" }}
            fontStyle={"italic"}
          >
            Newsletter
          </Text>

          {/* Subtitle */}
          <Text
            fontSize="sm"
            color="whiteAlpha.800"
            textAlign={{ base: "center", md: "left" }}
          >
            Subscribe to our newsletter for news and offers.
          </Text>

          {/* Email Input Section */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            width="100%"
            maxW={{ base: "90%", md: "400px" }}
          >
            <Input
              placeholder="Your Email Address"
              bg="white"
              color="black"
              borderRadius="full"
              size="md"
              mr={{ base: 0, md: 2 }}
              mb={{ base: 4, md: 0 }}
              _focus={{
                borderColor: "gold",
                boxShadow: "0 0 0 2px gold",
              }}
            />
            <Button
              bg="gold"
              color="black"
              borderRadius="full"
              px={6}
              _hover={{ bg: "yellow.600" }}
            >
              Send
            </Button>
          </Flex>

          {/* Social Media Icons */}
          <HStack
            spacing={4}
            justify={{ base: "center", md: "flex-start" }}
            color="whiteAlpha.800"
          >
            <Flex
              bg="gold"
              p={3}
              borderRadius="full"
              cursor="pointer"
              _hover={{ bg: "yellow.600" }}
              align="center"
              justify="center"
            >
              <Icon as={FaFacebook} boxSize={5} color="black" />
            </Flex>
            <Flex
              bg="gold"
              p={3}
              borderRadius="full"
              cursor="pointer"
              _hover={{ bg: "yellow.600" }}
              align="center"
              justify="center"
            >
              <Icon as={FaInstagram} boxSize={5} color="black" />
            </Flex>
            <Flex
              bg="gold"
              p={3}
              borderRadius="full"
              cursor="pointer"
              _hover={{ bg: "yellow.600" }}
              align="center"
              justify="center"
            >
              <Icon as={FaYoutube} boxSize={5} color="black" />
            </Flex>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;
