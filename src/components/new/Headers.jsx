import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Flex, Text } from '@chakra-ui/layout';
import { Box, Stack } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import CoverImage from './CoverImage';
import { RiAddFill, RiEdit2Fill } from 'react-icons/ri';
import TagsModal from './TagsModal';
import { useDisclosure } from '@chakra-ui/hooks';
import { Tag, TagLabel } from '@chakra-ui/tag';

function Headers({
  postTitle,
  setPostTitle,
  coverImage,
  setCoverImage,
  postTags,
  setPostTags,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    console.log('render at headers');
  }, []);

  return (
    <>
      <Box>
        <Stack spacing="20px">
          <CoverImage coverImage={coverImage} setCoverImage={setCoverImage} />
          <Input
            variant="unstyled"
            placeholder="Post Title here..."
            size="lg"
            fontSize={{ base: '30px', md: '40px' }}
            fontWeight="semibold"
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <Flex w="100%" gridGap="13px" align="center" wrap="wrap">
            {postTags.map((tag) => (
              <Text key={tag} fontSize="md">
                #{tag}
              </Text>
            ))}
            <Button
              leftIcon={postTags.length ? <RiEdit2Fill /> : <RiAddFill />}
              size="sm"
              onClick={onOpen}
            >
              {postTags.length > 0 ? 'Edit Tags' : 'Add Tags'}
            </Button>
          </Flex>
        </Stack>
      </Box>
      <TagsModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        postTags={postTags}
        setPostTags={setPostTags}
      />
    </>
  );
}

export default Headers;
