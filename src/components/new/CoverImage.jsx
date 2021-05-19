import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';
import styles from './new.module.css';

function CoverImage({ coverImage, setCoverImage }) {
  return (
    <Box>
      {!coverImage && (
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
      {coverImage && (
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
          <Button colorScheme="red" onClick={() => setCoverImage('')}>
            Remove
          </Button>
        </Flex>
      )}
    </Box>
  );
}

export default CoverImage;
