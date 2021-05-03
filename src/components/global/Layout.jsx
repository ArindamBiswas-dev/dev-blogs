import { Box } from '@chakra-ui/layout';
import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../navbar/Navbar';

function Layout(props) {
  return (
    <>
      <Navbar />
      <Box minH="calc(100vh - 60px - 315px)" backgroundColor="#eef0f1">
        {props.children}
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
