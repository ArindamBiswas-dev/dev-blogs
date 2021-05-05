import React from 'react';
import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/layout';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styles from './Homepage.module.css';
import { postNavs } from './PostNavs';
import { Select } from '@chakra-ui/select';

function PostNavSection(props) {
  const history = useHistory();
  const location = useLocation().pathname;
  const locationCopy = location.split('/');
  const currentPage = locationCopy[locationCopy.length - 1];
  // console.log(currentPage);

  const handelChange = (e) => {
    const value = e.target.value;
    if (!value) {
      history.push('/');
      return;
    }
    history.push(value);
  };

  const { parent } = props;

  return (
    <Box mx={{ md: '3' }} w="100%" mb="5">
      <Flex justify="space-between" align="baseline">
        <Heading size="md">Posts</Heading>
        <HStack spacing="10px" display={{ base: 'none', md: 'flex' }} mr="2">
          {postNavs.map((nav) => (
            <Link
              className={
                nav.name === parent
                  ? `${styles.postNav} ${styles.currentPostNav}`
                  : `${styles.postNav}`
              }
              key={nav.name}
              to={nav.to}
            >
              <Text fontSize="md">{nav.name}</Text>
            </Link>
          ))}
        </HStack>
        <Select
          variant="filled"
          display={{ base: 'block', md: 'none' }}
          w="120px"
          borderColor="blue"
          onChange={handelChange}
          defaultChecked={currentPage}
          defaultValue={location}
        >
          {postNavs.map((nav) => (
            <option key={nav.name} value={nav.to}>
              {nav.name}
            </option>
          ))}
        </Select>
      </Flex>
    </Box>
  );
}

export default PostNavSection;
