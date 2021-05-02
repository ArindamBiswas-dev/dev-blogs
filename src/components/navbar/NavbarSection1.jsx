import { Input } from '@chakra-ui/input';
import { Flex, Heading } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';

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
      <Input
        ml="4"
        w="350px"
        size="lg"
        placeholder="Search..."
        borderColor="black"
        outline="0"
        transition="cubic-bezier(0.17, 0.67, 0.5, 0.71)"
        _hover={{ borderColor: 'black' }}
        _focus={{
          borderColor: 'blue',
          boxShadow: '2px 2px 0 blue',
        }}
        display={{ base: 'none', md: 'block' }}
      />
    </Flex>
  );
}

export default NavbarSection1;
