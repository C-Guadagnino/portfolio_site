import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

function FullStackDrawer() {
  const { isOpen, onClose } = useDisclosure();

  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
          <DrawerBody>
            <p>test</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default FullStackDrawer;
