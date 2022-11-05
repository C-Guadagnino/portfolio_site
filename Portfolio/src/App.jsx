import { useState } from "react";
import {
  ChakraProvider,
  VStack,
  Flex,
  Heading,
  IconButton,
  ColorModeScript,
  useColorMode,
  Spacer,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Social from "./Social";
import Header from "./Header";
import Profile from "./Profile";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === "light";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="lg" fontWeight="semibold" color="blue.400">
          Code with Cam
        </Heading>
        <Spacer></Spacer>
        <IconButton
          ml={2}
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() =>
            window.open("https://www.linkedin.com/in/cameronguadagnino/")
          }
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={() => window.open("https://github.com/C-Guadagnino")}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaTwitter />}
          isRound="true"
          onClick={() => window.open("https://twitter.com/MuchoKimchi")}
        ></IconButton>
        <IconButton
          ml={8}
          icon={isLight ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
