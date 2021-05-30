import { Image } from '@chakra-ui/image';
import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';

function PostAuthor() {
  return (
    <Flex wrap="wrap" align="baseline">
      <Link to="/">
        <Image
          alt="profile_image"
          src="https://bit.ly/prosper-baba"
          borderRadius="full"
          h="30px"
          w="30px"
          d="inline"
        />
        <Text ml="3" d="inline" mr="3">
          Kent Dodds
        </Text>
      </Link>
      <Flex my="auto" bg="gray.600" borderRadius="full" h="5px" w="5px"></Flex>
      <Text ml="4" color="gray.600">
        May' 24
      </Text>
    </Flex>
  );
}

export default PostAuthor;
