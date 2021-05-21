import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';
import { useContext } from 'react';
import { PostContext } from './New';
import styles from './new.module.css';

function CoverImage() {
  const postContext = useContext(PostContext);

  return (
    <Box>
      {!postContext.postState.coverImage && (
        <>
          <input
            className={styles.coverImageInput}
            id="cover_image_input"
            type="file"
            accept="image/*"
          />
          <label
            htmlFor="cover_image_input"
            className={styles.coverImageInputLabel}
          >
            Upload a Cover Image
          </label>
        </>
      )}
      {postContext.postState.coverImage && (
        <Flex justify="space-between" align="center" wrap="wrap" maxW="400px">
          <Image
            src="https://picsum.photos/200/300"
            alt="cover_image"
            width="250px"
            height="150px"
            objectFit="cover"
            borderRadius="md"
            mb="4"
          />
          <Button
            colorScheme="red"
            onClick={() =>
              postContext.postDispatch({ type: 'setCoverImage', value: '' })
            }
          >
            Remove
          </Button>
        </Flex>
      )}
    </Box>
  );
}

export default CoverImage;
