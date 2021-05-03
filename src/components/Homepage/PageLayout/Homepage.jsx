import { Box, SimpleGrid } from '@chakra-ui/layout';
import React from 'react';
import Layout from '../../global/Layout';
import Tagsection from './Tagsection';

function Homepage() {
  return (
    <Layout>
      <Box d="flex" w="100%" justifyContent="center">
        <Box width={{ base: '90%', md: '85%' }} maxW="1140px" py="5">
          <SimpleGrid spacing="40px">
            <Tagsection />
          </SimpleGrid>
        </Box>
      </Box>
    </Layout>
  );
}

export default Homepage;
