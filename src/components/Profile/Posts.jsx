import { Box, Flex, Heading, Stack } from '@chakra-ui/layout';
import React, { useState } from 'react';
import Post from '../Homepage/PageLayout/Post';
import { RiFileList3Fill } from 'react-icons/ri';
import DeleteAlert from '../global/DeleteAlert';
import { useDisclosure } from '@chakra-ui/hooks';

function Posts() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [targetId, setTargetId] = useState();
  return (
    <Box
      p="4"
      borderWidth="2px"
      borderColor="blue"
      borderRadius="8px"
      bgColor="white"
    >
      <Flex align="center" mb="4">
        <RiFileList3Fill fontSize="22px" color="#A0AEC0" />
        <Heading size="md" color="gray.800" ml="2">
          Posts (10)
        </Heading>
      </Flex>
      <Stack spacing="15px">
        <Post
          isOwnProfile={true}
          onDeleteClick={onOpen}
          setTargetId={setTargetId}
          fakeId="id_1"
        />
        <Post
          isOwnProfile={true}
          onDeleteClick={onOpen}
          setTargetId={setTargetId}
          fakeId="id_2"
        />
        <Post
          isOwnProfile={true}
          onDeleteClick={onOpen}
          setTargetId={setTargetId}
          fakeId="id_3"
        />
        <Post
          isOwnProfile={true}
          onDeleteClick={onOpen}
          setTargetId={setTargetId}
          fakeId="id_4"
        />
        <Post
          isOwnProfile={true}
          onDeleteClick={onOpen}
          setTargetId={setTargetId}
          fakeId="id_5"
        />
      </Stack>
      <DeleteAlert
        cancelRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        targetId={targetId}
      />
    </Box>
  );
}

export default Posts;
