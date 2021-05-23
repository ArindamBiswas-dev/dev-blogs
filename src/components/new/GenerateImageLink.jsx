import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Box, Flex } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/toast';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import styles from './new.module.css';

function GenerateImageLink() {
  const inputRef = useRef(null);
  const toast = useToast();
  const [imageUrl, setImageUrl] = useState('');

  const copyText = () => {
    const value = inputRef.current.value;
    navigator.clipboard.writeText(value);
    return toast({
      title: 'Copied',
      status: 'success',
      position: 'top',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex py="2" align="center" w="100%" wrap="wrap">
      <Box>
        <input
          id="generate_image_input"
          type="file"
          accept="image/*"
          className={styles.generateImageInput}
        />
        <label
          htmlFor="generate_image_input"
          className={styles.generateImageLinkLabel}
        >
          Generate Image Link
        </label>
      </Box>
      {imageUrl && (
        <Flex ml={{ md: '6' }} mt={{ base: '2' }}>
          <Input ref={inputRef} />
          <Button ml="2" onClick={copyText} colorScheme="messenger">
            Copy
          </Button>
        </Flex>
      )}
    </Flex>
  );
}

export default GenerateImageLink;
