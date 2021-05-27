import { Flex } from '@chakra-ui/layout';
import React from 'react';
import AboutAuthor from './AboutAuthor';
import Postcontent from './Postcontent';
import ViewerReact from './ViewerReact';
import ViewerReactMobile from './ViewerReactMobile';

function Post() {
  return (
    <>
      <Flex justify="center" flexDir="column" align="center">
        <Flex
          width={{ base: '90%', md: '85%' }}
          maxW="1140px"
          py="5"
          flexDir="row"
          justify="space-between"
          wrap="wrap"
        >
          <ViewerReact />
          <Postcontent />
          <AboutAuthor />
        </Flex>
      </Flex>
      <ViewerReactMobile />
    </>
  );
}

export default Post;
