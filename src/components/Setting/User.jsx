import { Heading } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import UserFormInputField from './UserFormInputField';

function User({ errors, register }) {
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
        User
      </Heading>

      <UserFormInputField
        label="Name"
        name="name"
        type="text"
        placeholder="Full Name"
        defaultValue="Arindam Biswas"
        errorMsg="Can't be empty"
        errors={errors}
        register={register}
      />
      <UserFormInputField
        label="Email"
        name="email"
        type="email"
        placeholder="Email"
        defaultValue="arindambiswas616@gmail.com"
        errorMsg="Can't be empty"
        errors={errors}
        register={register}
      />
      <UserFormInputField
        label="Username"
        name="username"
        type="text"
        placeholder="Username"
        defaultValue="arindambiswas"
        errorMsg="Can't be empty"
        errors={errors}
        register={register}
      />
    </Box>
  );
}

export default User;
