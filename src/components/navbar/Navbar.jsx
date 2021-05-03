import { Flex } from '@chakra-ui/layout';
import React from 'react';
import NavbarSection1 from './NavbarSection1';
import NavbarSection2 from './NavbarSection2';

function Navbar() {
  return (
    <Flex
      justify="center"
      backgroundColor="white"
      boxShadow="0 1px 0 #CBD5E0"
      position="sticky"
      top="0"
      zIndex="1000"
      height="65px"
    >
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
