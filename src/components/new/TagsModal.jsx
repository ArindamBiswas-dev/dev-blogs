import { Button } from '@chakra-ui/button';
import { Flex, Text } from '@chakra-ui/layout';
import { ModalOverlay } from '@chakra-ui/modal';
import { ModalHeader } from '@chakra-ui/modal';
import { ModalFooter } from '@chakra-ui/modal';
import { ModalBody } from '@chakra-ui/modal';
import { ModalContent } from '@chakra-ui/modal';
import { Modal } from '@chakra-ui/modal';
import React from 'react';
import { tags } from '../Homepage/PageLayout/Tags';
import TopicTag from './TopicTag';

function TagsModal({ isOpen, onClose }) {
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">Add Tags</ModalHeader>
        <ModalBody>
          <Flex wrap="wrap" gridGap="10px">
            {tags.map((tag) => (
              <TopicTag name={tag} key={tag} />
            ))}
          </Flex>
        </ModalBody>

        <ModalFooter d="flex" justifyContent="space-between">
          <Text color="gray.500">*up to 4 tags</Text>
          <Button colorScheme="red" mr={3} onClick={onClose} size="sm">
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default TagsModal;
