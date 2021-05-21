import { Image } from '@chakra-ui/image';
import { Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import { useContext } from 'react';
import ContentInMD from './ContentInMD';
import { PostContext } from './New';

function PreviewContent() {
  const postContext = useContext(PostContext);
  return (
    <Stack spacing="15px">
      <Image
        src="https://picsum.photos/800/800"
        alt="cover_image"
        width="100%"
        height="300px"
        objectFit="cover"
        borderRadius="md"
      />
      <Heading fontSize={{ base: '30px', md: '40px' }}>
        {postContext.postState.postTitle}
      </Heading>
      <Flex style={{ marginTop: '5px' }}>
        {postContext.postState.postTags.map((tag) => (
          <Text mr="2" key={tag} color="blue.500">
            #{tag}
          </Text>
        ))}
      </Flex>
      <ContentInMD postContent={postContext.postState.postContent} />
    </Stack>
  );
}

export default PreviewContent;
