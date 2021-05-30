import { Box, Flex, Heading } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

function NavbarSection1() {
  return (
    <Flex align="center">
      <Link to="/">
        <Heading
          color="white"
          size="lg"
          p="2"
          bgColor="black"
          borderRadius="md"
        >
          DEVBLOGS
        </Heading>
      </Link>
      <Box display={{ base: 'none', md: 'block' }} ml="4" w="350px">
        <SearchInput />
      </Box>
    </Flex>
  );
}

export default NavbarSection1;
