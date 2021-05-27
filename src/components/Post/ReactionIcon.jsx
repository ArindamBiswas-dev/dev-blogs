import { Box } from '@chakra-ui/layout';
import React from 'react';

function ReactionIcon({ icon, count, color, onClickHandeler }) {
  return (
    <Box
      my="2"
      cursor="pointer"
      textAlign="center"
      color={color}
      onClick={onClickHandeler}
      as="button"
    >
      <Box
        p="2"
        borderRadius="full"
        borderWidth="2px"
        borderColor={color}
        fontSize="30px"
        transition="ease-in-out .2s"
      >
        {icon}
      </Box>
      <p>{count}</p>
    </Box>
  );
}

export default ReactionIcon;
