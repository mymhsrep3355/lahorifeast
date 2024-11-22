import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
  ]);
  return (
    <Flex justify="center" w="full">
      <Box w="full">
        <RouterProvider router={router} />
      </Box>
    </Flex>
  );
}

export default App;
