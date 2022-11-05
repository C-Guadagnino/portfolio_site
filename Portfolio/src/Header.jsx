import {
  Text,
  useColorMode,
  useMediaQuery,
  Stack,
  Circle,
  Flex,
  Box,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";
import profile from "./images/profile.jpg";
import OpenResume from "./OpenResume.jsx";

const Header = () => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const profilePhoto = profile;
  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.01"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : "16"} allign="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi I Am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            {" "}
            Cameron Guadagnino{" "}
          </Text>
          <Text color={isLight ? "grey.200" : "grey.500"}>
            {" "}
            Full Stack Software Engineer for Galvanize Inc.
          </Text>
          <OpenResume />
        </Box>
        <Image
          alignSelf="center"
          borderRadius="full"
          ml={5}
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src={profile}
        />
      </Flex>
    </Stack>
  );
};

export default Header;
