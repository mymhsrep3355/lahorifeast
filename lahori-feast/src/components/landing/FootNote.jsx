import { Box, Text, Flex } from "@chakra-ui/react";

const Footnote = () => {
  return (
    <Box bg="black" py={4} px={4}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        textAlign="center"
        fontSize="sm"
        color="whiteAlpha.800"
      >
        <Text>
          © Copyright 2024{" "}
          <Text as="span" color="#c99720" fontWeight="bold">
            Lahori&apos;s Caterings.
          </Text>{" "}
          All Rights Reserved.
        </Text>
        <Text
          mt={{ base: 2, md: 0 }}
          ml={{ base: 0, md: 1 }}
          color="whiteAlpha.800"
        >
          Developed and Powered by{" "}
          <Text as="span" color="gold" fontWeight="bold">
            DotCode
          </Text>
          .
        </Text>
      </Flex>
    </Box>
  );
};

export default Footnote;


//#c99720