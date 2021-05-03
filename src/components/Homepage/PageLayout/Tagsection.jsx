import { Box, Heading, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Homepage.module.css';
import { tags } from './Tags';

function Tagsection() {
  return (
    <Box w="240px" display={{ base: 'none', md: 'block' }}>
      <Heading size="md">Tags</Heading>
      <Stack spacing="10px" mt="3" maxH="350px" overflowY="scroll">
        {tags.map((tag) => (
          <Link className={styles.tagLink} to={`/tag/${tag}`} key={tag}>
            <Text fontSize="md">{`#${tag}`}</Text>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

export default Tagsection;
