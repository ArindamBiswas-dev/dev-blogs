import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Flex, Text } from '@chakra-ui/layout';
import { Box, Stack } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import CoverImage from './CoverImage';
import { RiAddFill, RiEdit2Fill } from 'react-icons/ri';
import TagsModal from './TagsModal';
import { useDisclosure } from '@chakra-ui/hooks';
import { useContext } from 'react';
import { PostContext } from './New';

function Headers() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    console.log('render at headers');
  }, []);

  const postContext = useContext(PostContext);

  return (
    <>
      <Box>
        <Stack spacing="10px">
          <CoverImage />
          <Input
            variant="unstyled"
            placeholder="Post Title here..."
            size="lg"
            fontSize={{ base: '30px', md: '40px' }}
            fontWeight="semibold"
            onChange={(e) =>
              postContext.postDispatch({
                type: 'setPostTitle',
                value: e.target.value,
              })
            }
            defaultValue={postContext.postState.postTitle}
          />
          <Flex w="100%" gridGap="13px" align="center" wrap="wrap">
            {postContext.postState.postTags.map((tag) => (
              <Text key={tag} fontSize="md">
                #{tag}
              </Text>
            ))}
            <Button
              leftIcon={
                postContext.postState.postTags.length ? (
                  <RiEdit2Fill />
                ) : (
                  <RiAddFill />
                )
              }
              size="sm"
              onClick={onOpen}
            >
              {postContext.postState.postTags.length > 0
                ? 'Edit Tags'
                : 'Add Tags'}
            </Button>
          </Flex>
        </Stack>
      </Box>
      <TagsModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default Headers;
