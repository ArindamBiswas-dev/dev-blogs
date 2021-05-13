import { FormLabel } from '@chakra-ui/form-control';
import { FormErrorMessage } from '@chakra-ui/form-control';
import { FormControl } from '@chakra-ui/form-control';
import { Textarea } from '@chakra-ui/textarea';
import React from 'react';

function UserFormTextArea({
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
      <Textarea
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

export default UserFormTextArea;
