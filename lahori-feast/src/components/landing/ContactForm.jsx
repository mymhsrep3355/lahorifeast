import React from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  return (
    <Box
      w="100%"
      bg="black"
      color="white"
      py={12}
      px={{ base: 6, md: 40 }}
    mx={"auto"}
    // px={{ base: 18, md: 16 }}
      textAlign="center"
    >
      {/* Heading Section */}
      <Heading
        fontSize={{ base: "2xl", md: "4xl" }}
        color="#c99720"
        fontFamily="'Georgia', serif"
        mb={4}
        fontStyle="italic"
      >
        Have any questions?
      </Heading>
      <Text fontSize="md" color="gray.400" mb={8}>
        Reach out to us if you have any questions about our own Wasabi Caterings
        services.
      </Text>

      {/* Form Grid */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={6}
        textAlign="left"
      >
        {/* Full Name */}
        <GridItem>
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaUser color="gray.400" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Full Name"
                focusBorderColor="#c99720"
                borderRadius="md"
                bg="blackAlpha.900"
                color="white"
              />
            </InputGroup>
          </FormControl>
        </GridItem>

        {/* Email */}
        <GridItem>
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaEnvelope color="gray.400" />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="Email"
                focusBorderColor="#c99720"
                borderRadius="md"
                bg="blackAlpha.900"
                color="white"
              />
            </InputGroup>
          </FormControl>
        </GridItem>

        {/* Phone */}
        <GridItem>
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaPhoneAlt color="gray.400" />
              </InputLeftElement>
              <Input
                type="tel"
                placeholder="Phone"
                focusBorderColor="#c99720"
                borderRadius="md"
                bg="blackAlpha.900"
                color="white"
              />
            </InputGroup>
          </FormControl>
        </GridItem>
      </Grid>

      {/* Textarea */}
      <Box mt={6}>
        <FormControl>
          <Textarea
            placeholder="Anything you want to add?"
            focusBorderColor="#c99720"
            borderRadius="md"
            bg="blackAlpha.900"
            color="white"
            size="lg"
          />
        </FormControl>
      </Box>

      {/* Submit Button */}
      <Button
        mt={8}
        colorScheme="yellow"
        bg="gold"
        size="lg"
        borderRadius="md"
        _hover={{ bg: "goldenrod" }}
        rightIcon={<FaPaperPlane />}
      >
        Submit
      </Button>
    </Box>
  );
};

export default ContactForm;
