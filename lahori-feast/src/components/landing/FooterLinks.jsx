import React from "react";
import { Box, Heading, VStack, Text, HStack, Icon } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";

const FooterLinks = () => {
  return (
    <Box>
      {/* Heading */}
      <Heading fontSize="lg" color="gold" fontWeight="bold" mb={4}>
        Quick Links
      </Heading>

      {/* Links */}
      <VStack align="flex-start" spacing={2}>
        <HStack>
          <Icon as={FaChevronRight} color="gold" />
          <Text
            fontSize="sm"
            color="gray.400"
            _hover={{ color: "gold", cursor: "pointer" }}
          >
            About Us
          </Text>
        </HStack>

        <HStack>
          <Icon as={FaChevronRight} color="gold" />
          <Text
            fontSize="sm"
            color="gray.400"
            _hover={{ color: "gold", cursor: "pointer" }}
          >
            Events
          </Text>
        </HStack>

        <HStack>
          <Icon as={FaChevronRight} color="gold" />
          <Text
            fontSize="sm"
            color="gray.400"
            _hover={{ color: "gold", cursor: "pointer" }}
          >
            Venues
          </Text>
        </HStack>

        <HStack>
          <Icon as={FaChevronRight} color="gold" />
          <Text
            fontSize="sm"
            color="gray.400"
            _hover={{ color: "gold", cursor: "pointer" }}
          >
            Contact
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default FooterLinks;
