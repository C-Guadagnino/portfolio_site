import React from "react";
import dingus from "./images/dingus.gif";
import {
  Flex,
  Heading,
  useMediaQuery,
  Box,
  Text,
  Icon,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";
import { TbStack3 } from "react-icons/tb";
import { BsFillFilePersonFill } from "react-icons/bs";
import { GiCharm } from "react-icons/gi";

const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const {
    isOpen: fullStackOpen,
    onOpen: fullStackOnOpen,
    onClose: fullStackClose,
  } = useDisclosure();
  const {
    isOpen: personalOpen,
    onOpen: personalOnOpen,
    onClose: personalOnClose,
  } = useDisclosure();
  const {
    isOpen: lifeOpen,
    onOpen: lifeOnOpen,
    onClose: lifeOnClose,
  } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          6000+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          {" "}
          Hours of Coding Recorded{" "}
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2x1">
          Product Designer and Software Developer specialized in Full Stack
          development.{" "}
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="20vh"
            justify="flex-end"
            _hover={{ bg: "blue.600" }}
            onClick={fullStackOnOpen}
          >
            <Drawer
              isOpen={fullStackOpen}
              placement="right"
              onClose={fullStackClose}
              finalFocusRef={btnRef}
              size="xl"
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>What Cam has Coded</DrawerHeader>

                <DrawerBody>
                  <Image src={dingus}></Image>
                </DrawerBody>
              </DrawerContent>
            </Drawer>

            <Icon color="white" p="4" as={TbStack3} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Full Stack Apps
            </Text>
          </Flex>
          <Flex
            ml={5}
            rounded="xl"
            direction="column"
            mt={4}
            bg="white"
            h="30vh"
            w="20vh"
            justify="flex-end"
            _hover={{ bg: "blue.100" }}
            onClick={personalOnOpen}
          >
            <Drawer
              isOpen={personalOpen}
              placement="right"
              onClose={personalOnClose}
              finalFocusRef={btnRef}
              size="xl"
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>What Cam has Done</DrawerHeader>

                <DrawerBody>
                  <p>testing</p>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            <Icon
              color="blue.400"
              p="4"
              as={BsFillFilePersonFill}
              w="24"
              h="24"
            />
            <Text color="blue.400" p="4" fontSize="xl" fontWeight="semibold">
              Personal Projects
            </Text>
          </Flex>
          <Flex
            ml={5}
            rounded="xl"
            direction="column"
            mt={4}
            bg="white"
            h="30vh"
            w="20vh"
            justify="flex-end"
            _hover={{ bg: "blue.100" }}
            onClick={lifeOnOpen}
          >
            <Drawer
              isOpen={lifeOpen}
              placement="right"
              onClose={lifeOnClose}
              finalFocusRef={btnRef}
              size="xl"
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>What Cam has Done</DrawerHeader>

                <DrawerBody>
                  <p>tes...ting..?</p>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            <Icon color="blue.400" p="4" as={GiCharm} w="24" h="24" />
            <Text color="blue.400" p="4" fontSize="xl" fontWeight="semibold">
              Life and Hobbies
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Profile;
