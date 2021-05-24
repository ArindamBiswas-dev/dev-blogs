import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';

const datas = [
  {
    title: 'WORK',
    value: 'Student',
  },
  {
    title: 'LOCATION',
    value: 'Kolkata, India',
  },
  {
    title: 'JOINED',
    value: '22 May, 2021',
  },
];

function AboutAuthor() {
  return (
    <Stack
      spacing="10px"
      flexBasis={{ lg: '250px', xl: '300px' }}
      ml="3"
      alignSelf="flex-start"
      borderRadius="md"
      overflow="hidden"
      pos="sticky"
      top="90px"
      d={{ base: 'none', lg: 'flex' }}
    >
      <Box d={{ base: 'none', lg: 'block' }}>
        <Box h="30px" bgColor="blackAlpha.700"></Box>
        <Box
          px="3"
          pb="4"
          borderWidth="2px"
          borderColor="gray.300"
          borderTop="none"
        >
          <Flex>
            <Avatar
              src="https://bit.ly/prosper-baba"
              size="md"
              name="Kent Dodds"
              borderRadius="full"
              transform="translateY(-15px)"
            />
            <Heading size="md" ml="2">
              Kent Dodds
            </Heading>
          </Flex>
          <Stack spacing="10px">
            <Link to="/">
              <Button colorScheme="blue" isFullWidth>
                View Full Profile
              </Button>
            </Link>
            {datas.map((data) => (
              <Box>
                <Text color="gray.500" fontWeight="bold" fontSize="sm">
                  {data.title}
                </Text>
                <Text>{data.value}</Text>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}

export default AboutAuthor;
