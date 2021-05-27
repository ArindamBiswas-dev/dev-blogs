import { Avatar } from '@chakra-ui/avatar';
import { Box, Flex, Heading, Stack } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React from 'react';
import { Link } from 'react-router-dom';
import CommentBox from './CommentBox';

function CommmentSection() {
  return (
    <Stack spacing="10px" pt="4">
      <Heading size="lg" mb="8">
        Discussion(6)
      </Heading>
      <Flex>
        <Avatar h="30px" w="30px" mr="2" />
        <Textarea
          borderColor="gray.400"
          placeholder="Add to discussion"
          fontSize="lg"
        />
      </Flex>
      <Box pt="4">
        <CommentBox />
      </Box>
    </Stack>
  );
}

export default CommmentSection;
