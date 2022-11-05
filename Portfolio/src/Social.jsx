import { HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { FaPython, FaReact } from "react-icons/fa";
import { SiDjango, SiJavascript} from "react-icons/si"

const Social = () => {
  return (
    <HStack spacing={20}>
      <Icon as={SiJavascript} boxSize="50" />
      <Icon as={FaReact} boxSize="50" />
      <Icon as={FaPython} boxSize="50" />
      <Icon as={SiDjango} boxSize="50" />
    </HStack>
  );
};

export default Social;
