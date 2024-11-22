import React from "react";
import { Box, VStack, HStack, Icon, Text, Image } from "@chakra-ui/react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const FooterLogoSection = () => {
  return (
    <Box>
      {/* Logo Section */}
      <Box mb={4}>
        <Image
          src="/logo.png" // Replace with actual logo path
          alt="Wasabi Catering Co. Logo"
          maxW="200px"
          mb={4}
        />
      </Box>

      {/* Description Section */}
      <Text fontSize="sm" color="gray.400" mb={4}>
        Pakistan’s Premier Catering Services! Live Catering for Pakistani,
        Continental, Chinese, Thai, and Japanese cuisines.
      </Text>

      {/* Contact Details */}
      <VStack align="flex-start" spacing={3}>
        <HStack>
          <Icon as={FaPhone} color="gold" />
          <Text fontSize="sm" color="gray.400">
            0311-1116868
          </Text>
        </HStack>
        <HStack>
          <Icon as={FaEnvelope} color="gold" />
          <Text fontSize="sm" color="gray.400">
            info@wasabicaterings.com
          </Text>
        </HStack>
        <HStack>
          <Icon as={MdLocationOn} color="gold" />
          <Text fontSize="sm" color="gray.400">
            Plot No.C43-25, Canal Commercial, Street 44, Block M 3 A Lake City,
            Lahore
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default FooterLogoSection;
