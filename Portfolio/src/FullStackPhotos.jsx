import { Button, Image } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import resume from "./images/resume.png";

const FullStackPhoto = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hire Me!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={resume} />
          </ModalBody>

          <ModalFooter>
            <Button
              variant="outline"
              colorScheme="blue"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              variant="solid"
              colorScheme="messenger"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1rtCvI32xuyqWdL6JK-DnjxOItBCL0a6u/view?usp=sharing"
                )
              }
            >
              Download my Resume
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FullStackPhoto;
