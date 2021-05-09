import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/layout';
import React from 'react';
import { TiLocation } from 'react-icons/ti';
import { FaBirthdayCake, FaEnvelopeOpen, FaUserEdit } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import { IconButton } from '@chakra-ui/button';
import { Link as LINK } from 'react-router-dom';

function AboutUser() {
  return (
    <Flex
      bgColor="white"
      border="1px solid gray"
      borderColor="gray.300"
      borderRadius="md"
      transform="translateY(-30px)"
      justify="center"
      align="center"
      p="2"
      pb="10"
      w="100%"
      direction="column"
    >
      <Box
        borderRadius="50%"
        bgColor="blue.700"
        border="8px solid blue"
        borderColor="blue.700"
        transform="translateY(-80px)"
        textAlign="center"
      >
        <Image
          borderRadius="full"
          boxSize="130px"
          src="https://bit.ly/sage-adebayo"
          alt="Segun Adebayo"
        />
      </Box>
      <Heading mt="-60px" size="lg" mb="3">
        Arindam Biswas
      </Heading>
      <Box maxW="800px" textAlign="center" mb="8">
        <Text fontSize="lg">
          I am Arindam Biswas, currently a Computer Science Engineering student
          at Brainware University. Interested in Web Application development.
        </Text>
      </Box>
      <Flex
        maxW="800px"
        justify="center"
        wrap="wrap"
        gridGap="20px"
        align="center"
      >
        <Flex>
          <TiLocation fontSize="25px" color="#A0AEC0" />
          <Text ml="2">Kolkata, India</Text>
        </Flex>
        <Flex align="center">
          <FaBirthdayCake fontSize="20px" color="#A0AEC0" />
          <Text ml="2">Joined on Apr 26, 2021</Text>
        </Flex>
        <Link href="mailto:arindambiswas616@gmail.com" isExternal>
          <Flex align="center" _hover={{ color: 'blue' }}>
            <FaEnvelopeOpen fontSize="20px" color="#A0AEC0" />
            <Text ml="2">arindambiswas616@gmail.com</Text>
          </Flex>
        </Link>
        <Link href="https://www.github.com" isExternal>
          <VscGithub fontSize="20px" color="#A0AEC0" />
        </Link>
      </Flex>
      <LINK to="/setting">
        <IconButton
          position="absolute"
          top="15px"
          right="15px"
          colorScheme="blue"
          fontSize="18px"
          icon={<FaUserEdit />}
        />
      </LINK>
    </Flex>
  );
}

export default AboutUser;
