import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';
import AboutUser from './AboutUser';

function SelfProfile() {
  return (
    <>
      <Box bgColor="blue.700" h="130px" w="100%"></Box>
      <Flex justify="center">
        <Flex w={{ md: '85%', lg: '1024px' }} maxW="1024px" justify="center">
          <AboutUser />
        </Flex>
      </Flex>
    </>
  );
}

export default SelfProfile;
