import { Button } from '@chakra-ui/button';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from '@chakra-ui/modal';
import React from 'react';

//TODO: targetId & excecuteFunction pass by parent element & excecute when click on "Yes" button

function DeleteAlert(props) {
  const { cancelRef, onClose, isOpen, excecuteFunction, targetId } = props;
  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent maxW="300px">
        <AlertDialogHeader color="red" textAlign="center">
          Delete Item
        </AlertDialogHeader>
        <AlertDialogBody>
          Are you sure to delete this item {targetId} ?
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            No
          </Button>
          <Button colorScheme="red" ml={3}>
            Yes
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteAlert;
