import { Flex } from '@chakra-ui/layout';
import React from 'react';
import RButtonContainer from './RButtonContainer';

function ViewerReact() {
  return (
    <Flex
      flexDir="column"
      py="8"
      flexBasis="70px"
      align="center"
      mr="3"
      alignSelf="flex-start"
      pos="sticky"
      top="90px"
      d={{ base: 'none', lg: 'flex' }}
    >
      <RButtonContainer />
    </Flex>
  );
}

export default ViewerReact;
