import { Flex } from '@chakra-ui/layout';
import React from 'react';
import RButtonContainer from './RButtonContainer';

function ViewerReactMobile() {
  return (
    <Flex
      w="100%"
      bgColor="#d4d4d4"
      pos="fixed"
      bottom="0"
      justify="space-around"
      zIndex="1"
      h="85px"
      justify="center"
      d={{ base: 'flex', lg: 'none' }}
    >
      <Flex w="90%" justify="space-around">
        <RButtonContainer />
      </Flex>
    </Flex>
  );
}

export default ViewerReactMobile;
