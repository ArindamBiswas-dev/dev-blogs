import { Button } from '@chakra-ui/button';
import { Box, Flex } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import Headers from './Headers';

function New() {
  const [coverImage, setCoverImage] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postTags, setPostTags] = useState([]);

  useEffect(() => {
    console.log('render at new');
  }, []);

  return (
    <Flex justify="center">
      <Flex
        width={{ base: '90%', md: '85%' }}
        maxW="1140px"
        py="5"
        justify="space-between"
        gridGap="10px"
      >
        <Box w={{ base: '100%', md: '70%' }}>
          <Flex justify="flex-end">
            <Button mx="2" colorScheme="twitter" size="sm">
              Edit
            </Button>
            <Button mx="2" colorScheme="blue" size="sm">
              Preview
            </Button>
          </Flex>
          <Box
            mt="4"
            bgColor="white"
            px="8"
            py="8"
            borderRadius="md"
            border="1px solid black"
            borderColor="gray.300"
          >
            <Headers
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              coverImage={coverImage}
              setCoverImage={setCoverImage}
              postTags={postTags}
              setPostTags={setPostTags}
            />
          </Box>
        </Box>
        <Box
          bgColor="lightblue"
          w="30%"
          maxW="240px"
          d={{ base: 'none', md: 'block' }}
        >
          exp
        </Box>
      </Flex>
    </Flex>
  );
}

export default New;
