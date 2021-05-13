import { Heading } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import UserFormInputField from './UserFormInputField';
import UserFormTextArea from './UserFormTextArea';

function Basic({ errors, register }) {
  return (
    <Box
      bgColor="white"
      p="6"
      borderWidth=".5px"
      borderColor="gray.300"
      borderRadius="10px"
      mb="4"
    >
      <Heading size="md" mb="4">
        Basic
      </Heading>

      <UserFormInputField
        label="Location"
        name="location"
        type="text"
        placeholder="Location"
        defaultValue="Kolkata, India"
        errorMsg="Can't be empty"
        errors={errors}
        register={register}
      />
      <UserFormTextArea
        label="Bio"
        name="bio"
        placeholder="Bio"
        defaultValue="It's about me"
        errorMsg="Can't be empty"
        errors={errors}
        register={register}
      />
    </Box>
  );
}

export default Basic;
