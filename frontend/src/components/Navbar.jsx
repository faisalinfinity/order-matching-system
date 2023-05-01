import { ReactNode } from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  Heading,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

//Navbar
export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("transparent", "transparent")}
        px={4}
        backdropBlur={"blur(10px)"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Image
              w="13%"
              src="https://i.postimg.cc/MGZMfRXx/download-removebg-preview-1.png"
            ></Image>
            <Heading>NSE</Heading>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button bg="none" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
