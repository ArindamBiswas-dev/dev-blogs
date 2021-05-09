import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';
import AboutUser from './AboutUser';
import Posts from './Posts';

function SelfProfile() {
  return (
    <Box pb="10">
      <Box bgColor="blue.700" h="130px" w="100%"></Box>
      <Flex justify="center">
        <Flex
          w={{ md: '85%', lg: '1024px' }}
          maxW="1024px"
          justify="center"
          direction="column"
        >
          <AboutUser />
          <Posts />
        </Flex>
      </Flex>
    </Box>
  );
}

export default SelfProfile;
