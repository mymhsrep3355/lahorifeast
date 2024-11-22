import React from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const FooterNewsletter = () => {
  return (
    <Box>
      {/* Newsletter Heading */}
      <Heading
        fontSize="lg"
        color="gold"
        fontWeight="bold"
        mb={4}
        fontFamily="'Georgia', serif"
      >
        Newsletter
      </Heading>
      <Text fontSize="sm" color="gray.400" mb={4}>
        Subscribe to our newsletter for news and offers.
      </Text>

      {/* Email Subscription Input */}
      <HStack spacing={2} mb={6}>
        <Input
          placeholder="Your Email Address"
          bg="blackAlpha.800"
          borderColor="gold"
          focusBorderColor="gold"
          _placeholder={{ color: "gray.400" }}
          color="white"
          borderRadius="md"
        />
        <Button
          bg="gold"
          color="black"
          _hover={{ bg: "goldenrod" }}
          borderRadius="md"
        >
          Send
        </Button>
      </HStack>

      {/* Social Media Icons */}
      <HStack spacing={4}>
        <Icon
          as={FaFacebookF}
          boxSize={6}
          bg="gold"
          color="black"
          p={2}
          borderRadius="full"
          _hover={{ bg: "goldenrod", cursor: "pointer" }}
        />
        <Icon
          as={FaInstagram}
          boxSize={6}
          bg="gold"
          color="black"
          p={2}
          borderRadius="full"
          _hover={{ bg: "goldenrod", cursor: "pointer" }}
        />
        <Icon
          as={FaYoutube}
          boxSize={6}
          bg="gold"
          color="black"
          p={2}
          borderRadius="full"
          _hover={{ bg: "goldenrod", cursor: "pointer" }}
        />
      </HStack>
    </Box>
  );
};

export default FooterNewsletter;
