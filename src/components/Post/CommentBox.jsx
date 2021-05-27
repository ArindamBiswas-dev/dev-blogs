import { Avatar } from '@chakra-ui/avatar';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';

function CommentBox() {
  return (
    <Flex>
      <Link to="/">
        <Avatar h="30px" w="30px" src="https://bit.ly/ryan-florence" mr="2" />
      </Link>
      <Box
        p="2"
        borderWidth="1px"
        borderColor="gray.300"
        borderRadius="10px"
        textAlign="justify"
      >
        <Flex
          wrap="wrap"
          color="gray.500"
          fontWeight="550"
          mb="2"
          align="center"
        >
          <Link to="/">
            <Text>Larry Erison</Text>
          </Link>
          <Box
            mx="2"
            bgColor="gray.500"
            borderRadius="full"
            h="5px"
            w="5px"
          ></Box>
          <Text>May' 24</Text>
        </Flex>
        <Text fontSize="lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          molestias unde quo vero doloribus minima atque? Ducimus beatae quasi
          fugit quia eligendi illum amet voluptates rem, non itaque consequuntur
          sunt similique culpa natus ab explicabo? Provident ratione deserunt.
        </Text>
      </Box>
    </Flex>
  );
}

export default CommentBox;
