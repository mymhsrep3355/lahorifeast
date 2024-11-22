import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Box, Flex } from "@chakra-ui/react";
import ComingSoonPage from "./pages/ComingSoonPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/landing",
      element: <LandingPage />,
    },
    {
      path: "/",
      element:<ComingSoonPage />,
    }
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
