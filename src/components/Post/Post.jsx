import { Flex } from '@chakra-ui/layout';
import React from 'react';
import AboutAuthor from './AboutAuthor';
import Postcontent from './Postcontent';
import ViewerReact from './ViewerReact';

function Post() {
  return (
    <>
      <Flex justify="center">
        <Flex
          width={{ base: '90%', md: '85%' }}
          maxW="1140px"
          py="5"
          flexDir="row"
          justify="space-between"
        >
          <ViewerReact />
          <Postcontent />
          <AboutAuthor />
        </Flex>
      </Flex>
    </>
  );
}

export default Post;
