import { Button, IconButton } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex } from '@chakra-ui/layout';
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/menu';
import React from 'react';
import FluidText from '../global/FluidText';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function NavbarSection2() {
  return (
    <Flex align="center">
      <Link to="/new">
        <Button
          variant="solid"
          colorScheme="blue"
          mr="4"
          display={{ base: 'none', md: 'block', lg: 'block' }}
        >
          Write a Post
        </Button>
      </Link>
      <Link to="/search">
        <IconButton
          aria-label="Search database"
          isRound
          w="50px"
          h="50px"
          mr="2"
          icon={<BiSearch fontSize="20px" />}
          display={{ base: 'flex', md: 'none' }}
        />
      </Link>
      <Menu>
        <MenuButton w="50px" h="50px" borderRadius="50%" p="0">
          <Image
            src="https://bit.ly/dan-abramov"
            width="100%"
            height="100%"
            borderRadius="100%"
            objectFit="fill"
          />
        </MenuButton>
        <MenuList
          border="2px solid black"
          boxShadow="2px 2px 0 black"
          maxWidth="360px"
        >
          <MenuItem>
            <Link to="/arindambiswas" style={{ width: '100%' }}>
              <Box>
                <FluidText fontSize="md" mb="2">
                  Arindam Biswas
                </FluidText>
                <FluidText fontSize="sm" color="gray.500">
                  @arindambiswas
                </FluidText>
              </Box>
            </Link>
          </MenuItem>
          <MenuDivider />
          <MenuItem>
            <Link to="/dashboard" style={{ width: '100%' }}>
              Dashboard
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/new" style={{ width: '100%' }}>
              Write a Post
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/readinglist" style={{ width: '100%' }}>
              Reading List
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/setting" style={{ width: '100%' }}>
              Setting
            </Link>
          </MenuItem>
          <MenuDivider />
          <MenuItem>
            <Link to="/signout" style={{ width: '100%' }}>
              Sign Out
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default NavbarSection2;
