import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';

function Posttags() {
  return (
    <Flex wrap="wrap" gridGap="5px">
      <Link to="/">
        <Text mr="3" bgColor="blue.300" p="2px 5px" borderRadius="md">
          #react
        </Text>
      </Link>
      <Link to="/">
        <Text mr="3" bgColor="yellow.500" p="2px 5px" borderRadius="md">
          #webdev
        </Text>
      </Link>
      <Link to="/">
        <Text mr="3" bgColor="cyan.400" p="2px 5px" borderRadius="md">
          #javascript
        </Text>
      </Link>
      <Link to="/">
        <Text mr="3" bgColor="orange.500" p="2px 5px" borderRadius="md">
          #typescript
        </Text>
      </Link>
    </Flex>
  );
}

export default Posttags;
