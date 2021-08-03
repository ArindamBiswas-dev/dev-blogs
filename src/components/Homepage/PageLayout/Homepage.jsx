import { Box, Flex, Stack } from '@chakra-ui/layout';
import React from 'react';
import Post from './Post';
import PostNavSection from './PostNavSection';
import Tagsection from './Tagsection';

function Homepage({ props, posts = [], parent }) {
  console.log(posts);
  return (
    <Box d="flex" w="100%" justifyContent="center">
      <Box width={{ base: '90%', md: '85%' }} maxW="1140px" py="5">
        <Flex>
          <Tagsection />
          <Box w="100%">
            <PostNavSection parent={parent} />
            <Stack spacing="15px" ml={{ md: '3' }}>
              {posts.map((post) => (
                <Post key={post.title} post_data={post} />
              ))}
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Homepage;
