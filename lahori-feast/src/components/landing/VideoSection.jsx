import React from "react";
import { Box, AspectRatio } from "@chakra-ui/react";

const VideoSection = () => {
  return (
    <Box
      position="relative"
      width="100%"
      minHeight="400px"
      bg="rgba(0, 0, 0, 0.9)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      {/* Background Video */}
      <AspectRatio
        ratio={16 / 9}
        width="100%"
        height="100%"
        maxH="100vh"
        // zIndex={-1}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        >
          <source src="/eventvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </AspectRatio>

      
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        zIndex="1"
      >
        {/* <Box
          bg="white"
          borderRadius="md"
          boxShadow="md"
          padding="4"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>Welcome</p>
        </Box> */}
      </Box>
    </Box>
  );
};

export default VideoSection;
