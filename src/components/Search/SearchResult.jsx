import { Box, Flex, Heading, Stack } from '@chakra-ui/layout';
import React from 'react';
import { useLocation } from 'react-router';
import Post from '../Homepage/PageLayout/Post';
import SearchInput from '../navbar/SearchInput';

function SearchResult() {
  const fullQuery = new URLSearchParams(useLocation().search);
  const query = fullQuery.get('q');

  return (
    <Flex justify="center">
      <Box width={{ base: '90%', md: '85%' }} maxW="1140px" py="5">
        <Box display={{ base: 'block', md: 'none' }} mt="3" mb="6">
          <SearchInput />
        </Box>
        {query && (
          <>
            <Heading size="lg">
              Search results for <span style={{ color: 'blue' }}>{query}</span>
            </Heading>
            <Stack spacing="15px" mt="8">
              <Post />
              <Post />
              <Post />
              <Post />
            </Stack>
          </>
        )}
      </Box>
    </Flex>
  );
}

export default SearchResult;
