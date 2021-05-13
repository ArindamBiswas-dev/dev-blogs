import { FormErrorMessage } from '@chakra-ui/form-control';
import { FormLabel } from '@chakra-ui/form-control';
import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import React from 'react';

function UserFormInputField({
  label,
  type,
  placeholder,
  defaultValue,
  register,
  errors,
  name,
}) {
  return (
    <FormControl id={name} isInvalid={errors && errors[name]} mb="6">
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        borderColor="black"
        {...register(name)}
      />
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}

export default UserFormInputField;
