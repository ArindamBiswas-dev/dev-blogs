import { Flex } from '@chakra-ui/layout';
import React from 'react';
import NavbarSection1 from './NavbarSection1';
import NavbarSection2 from './NavbarSection2';

function Navbar() {
  return (
    <Flex justify="center" boxShadow="0 1px 0 #CBD5E0">
      <Flex
        py="2.5"
        w="100%"
        justify="space-between"
        width={{ base: '90%', md: '85%' }}
        maxW="1140px"
      >
        <NavbarSection1 />
        <NavbarSection2 />
      </Flex>
    </Flex>
  );
}

export default Navbar;
