import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import DeleteAlert from './DeleteAlert';

function ListItem() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <>
      <Flex justify="space-between" wrap="wrap" gridGap="10px" align="center">
        <Box mr="3">
          <Avatar
            size="sm"
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
          />
        </Box>
        <Box>
          <Link to="/">
            <Heading size="md" _hover={{ color: 'blue' }}>
              50+ free tools and resources to create awesome user interfaces
            </Heading>
          </Link>
          <Flex spacing="5px" align="baseline" mt="1" wrap="wrap">
            <Text color="gray.500">Davied Peter</Text>
            <Box
              w="8px"
              h="8px"
              bgColor="gray.400"
              borderRadius="50%"
              mx="2"
            ></Box>
            <Text color="gray.500">May 13' 20</Text>
            <Box
              w="8px"
              h="8px"
              bgColor="gray.400"
              borderRadius="50%"
              mx="2"
            ></Box>
            <Text color="gray.500" pr="10px">
              #webdev
            </Text>
            <Text color="gray.500" pr="10px">
              #javascript
            </Text>
            <Text color="gray.500" pr="10px">
              #react
            </Text>
          </Flex>
        </Box>
        <Button size="sm" colorScheme="red" ml="auto" onClick={onOpen}>
          Delete
        </Button>
      </Flex>
      <Divider />
      <DeleteAlert cancelRef={cancelRef} onClose={onClose} isOpen={isOpen} />
    </>
  );
}

export default ListItem;
