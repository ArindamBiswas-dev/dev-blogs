import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

function SocialSignInButton({ onClose, isOpen }) {
  return (
    <Modal size="xs" onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text
            fontSize="3xl"
            bgColor="black"
            textColor="white"
            borderRadius="lg"
            mb="2"
            textAlign="center"
          >
            DEVBLOGS
          </Text>
          <Text fontSize="sm" textColor="gray.600" pl="1">
            Sign In / Sign Up through
          </Text>
        </ModalHeader>
        <ModalBody my="3">
          <SocialButton icon={<FaGithub fontSize="25" />} name="Github" />
          <SocialButton icon={<FcGoogle fontSize="25" />} name="Google" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

function SocialButton({ name, icon }) {
  return (
    <Flex
      fontWeight="semibold"
      p="3"
      alignItems="center"
      fontSize="lg"
      justify="center"
      w="full"
      borderWidth="2px"
      borderColor="black"
      rounded="lg"
      mt="3"
      as="button"
    >
      {icon}
      <Text pl="2">{name}</Text>
    </Flex>
  );
}

export default SocialSignInButton;
