import {
    Box,
    Flex,
    Image,
    Link,
    Button,
    HStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useBreakpointValue,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    useDisclosure,
  } from "@chakra-ui/react";
  import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
  
  const Navbar = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Box bg="#4c1212" color="white" px={4} w="full" py={3}>
        <Flex
          maxW="1200px"
          mx="auto"
          h={{ base: "14", md: "16" }}
          align="center"
          justify="space-between"
        >
          {/* Logo Section */}
          <Image
            src="/logo.png" 
            alt="Logo"
            h={{ base: "70px", md: "140px" }}
            objectFit="contain"
          />
  
          {/* Desktop Links */}
          {!isMobile && (
            <HStack spacing={8} align="center">
              <Link href="#events" fontWeight="semibold">
                Events
              </Link>
              <Link href="#venues" fontWeight="semibold">
                Venues
              </Link>
              <Link href="#locations" fontWeight="semibold">
                Locations
              </Link>
              <Link href="#about" fontWeight="semibold">
                About
              </Link>
              <Link href="#wasabi" fontWeight="semibold">
                Lahori & Feast.
              </Link>
              <Link href="#contact" fontWeight="semibold" color="#f9c846">
                Contact
              </Link>
            </HStack>
          )}
  
          
          {!isMobile && (
            <Button
              colorScheme="yellow"
              bg="linear-gradient(to right, #f9c846, #d1a13b)"
              color="#4c1212"
              _hover={{ bg: "yellow.400" }}
              size="md"
              borderRadius="md"
              leftIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11 1a2 2 0 0 1 2 2v1.5a1 1 0 0 1-.85.98c-.168.025-.333.074-.485.14-.326.138-.693.374-1.055.681-.21.18-.396.363-.584.533-.19.173-.357.346-.538.515-.18.17-.366.346-.566.53a5.347 5.347 0 0 1-.773.576c-.27.186-.594.364-.95.554-.358.19-.726.4-1.147.717A6.564 6.564 0 0 0 5.8 9.2 1 1 0 0 1 4 10.5V12a2 2 0 0 1-2 2h-.6a1 1 0 0 1-.8-.4C.2 13.4.32 11.9 1.34 10.16 2.36 8.42 4 7.1 5.5 6.5c.464-.184.918-.37 1.372-.555.454-.185.909-.374 1.363-.563.454-.19.906-.387 1.358-.589.45-.202.898-.417 1.337-.673.439-.256.87-.551 1.24-.895a2 2 0 0 1 2.19-.278c.057.024.112.048.167.074z"
                  />
                </svg>
              }
            >
              0300-9441247
            </Button>
          )}
  
        
          {isMobile && (
            <IconButton
              icon={<HamburgerIcon />}
              // variant="outline"
              colorScheme="yellow"
              aria-label="Open Menu"
              onClick={onOpen}
            />
          )}
        </Flex>
  
        {/* Mobile Drawer */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="#4c1212" color="white">
            <DrawerCloseButton />
            <DrawerBody>
              <VStack spacing={4} mt={8} align="start">
                <Link href="#events" fontWeight="semibold" onClick={onClose}>
                  Events
                </Link>
                <Link href="#venues" fontWeight="semibold" onClick={onClose}>
                  Venues
                </Link>
                <Link href="#locations" fontWeight="semibold" onClick={onClose}>
                  Locations
                </Link>
                <Link href="#about" fontWeight="semibold" onClick={onClose}>
                  About
                </Link>
                <Link href="#wasabi" fontWeight="semibold" onClick={onClose}>
                  Lahori & Feast.
                </Link>
                <Link href="#contact" fontWeight="semibold" onClick={onClose}>
                  Contact
                </Link>
                <Button
                  w="full"
                  mt={4}
                  colorScheme="yellow"
                  bg="linear-gradient(to right, #f9c846, #d1a13b)"
                  color="#4c1212"
                  _hover={{ bg: "yellow.400" }}
                  size="md"
                  onClick={onClose}
                >
                  0300-9441247
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    );
  };
  
  export default Navbar;
  