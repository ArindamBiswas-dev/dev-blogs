import { Image } from '@chakra-ui/image';
import { Box, Divider, Heading, Stack } from '@chakra-ui/layout';
import React from 'react';
import ContentInMD from '../new/ContentInMD';
import CommmentSection from './CommmentSection';
import PostAuthor from './PostAuthor';
import Posttags from './Posttags';

function Postcontent() {
  return (
    <Stack
      spacing="15px"
      borderWidth="1px"
      borderColor="gray.300"
      flex="1"
      borderRadius="md"
      overflow="hidden"
    >
      <Image
        src="https://source.unsplash.com/user/erondu/1600x900"
        height={{ base: '200px', md: '350px' }}
        w="100%"
        objectFit="cover"
      />
      <Stack p="4" pt="0" spacing="15px">
        <Heading fontSize={{ base: '25px', md: '40px' }}>
          useReducer + useContext is amazing
        </Heading>
        <Posttags />
        <PostAuthor />
        <Box color="#424242">
          <ContentInMD postContent="{content} Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        </Box>
        <Divider />
        <CommmentSection />
      </Stack>
    </Stack>
  );
}

export default Postcontent;
