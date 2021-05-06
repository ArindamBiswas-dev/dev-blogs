import { Box, Flex, Stack } from '@chakra-ui/layout';
import React from 'react';
import Post from './Post';
import PostNavSection from './PostNavSection';
import Tagsection from './Tagsection';

function Homepage(props) {
  const { parent } = props;
  return (
    <Box d="flex" w="100%" justifyContent="center">
      <Box width={{ base: '90%', md: '85%' }} maxW="1140px" py="5">
        <Flex>
          <Tagsection />
          <Box w="100%">
            <PostNavSection parent={parent} />
            <Stack spacing="15px" ml={{ md: '3' }}>
              <Post isFirst={true} />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Homepage;
