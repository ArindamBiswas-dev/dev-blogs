import { Input } from '@chakra-ui/input';
import { Box, Flex, Stack } from '@chakra-ui/layout';
import React from 'react';
import FluidHeading from '../global/FluidHeading';
import ListItem from './ListItem';

function ReadingList() {
  return (
    <Flex justify="center">
      <Box width={{ base: '90%', md: '85%' }} maxW="1140px" py="5">
        <Flex justify="space-between" wrap="wrap" align="center">
          <FluidHeading my={{ base: '2', md: '0' }}>
            Reading list(4)
          </FluidHeading>
          <Input
            size="md"
            maxW="450px"
            borderWidth="1px"
            borderColor="gray.300"
            variant="filled"
            backgroundColor="white"
            placeholder="Search from list..."
            _placeholder={{ color: 'gray.600' }}
            _hover={{ backgroundColor: 'white' }}
            _focus={{ backgroundColor: 'white' }}
            my={{ base: '2', md: '0' }}
          />
        </Flex>
        <Stack
          spacing="20px"
          py="6"
          px="6"
          bgColor="white"
          my="4"
          borderWidth="1px"
          borderColor="gray.300"
          borderRadius="md"
        >
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </Stack>
      </Box>
    </Flex>
  );
}

export default ReadingList;
