import { Divider, Flex, Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import { footerLink } from './FooterLinks';
import { VscGithub } from 'react-icons/vsc';

function Footer() {
  return (
    <Box px="3" py="4" bgColor="#d2d6db" d="flex" justifyContent="center">
      <Box w="90%" maxW="500px">
        <Flex mb="2" textAlign="center" wrap="wrap" justify="center">
          {footerLink.map((link) => {
            return (
              <Link style={{ margin: '10px' }} key={link.name} to={link.to}>
                <Text color="black" fontSize="18px" _hover={{ color: 'blue' }}>
                  {link.name}
                </Text>
              </Link>
            );
          })}
        </Flex>
        <Divider />
        <Flex justify="center" mt="2" mb="4">
          <Link to="/github" target="_blank">
            <VscGithub fontSize="22px" />
          </Link>
        </Flex>
        <Text textAlign="center">
          <strong>DEVBLOGS - </strong> a developer community, helps every
          developer to grow and learn through sharing knowledge.
        </Text>
        <Text textAlign="center" mt="4">
          An <strong>Open Source</strong> project. Contributers are always
          wellcome.
        </Text>
        <Text textAlign="center" mt="4">
          Made with{' '}
          <strong>
            Love <span>&#38;</span> MERN Stack
          </strong>
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;

// Home, Reading List, Write a Post, Contact, About, Tags
