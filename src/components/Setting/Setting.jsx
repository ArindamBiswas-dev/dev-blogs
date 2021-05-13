import { Button } from '@chakra-ui/button';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { yupUser } from './FormValidationSchema';
import User from './User';
import Basic from './Basic';

function Setting() {
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupUser),
  });

  // submit
  const onsubmit = (data) => console.log(data);

  return (
    <Flex justify="center" py="3" pb="8">
      <Box width={{ base: '90%', md: '85%' }} maxW="800px">
        <form>
          <Heading size="lg" py="6">
            Settings for <span style={{ color: 'blue' }}>@arindambiswas</span>
          </Heading>

          <User errors={errors} register={register} />
          <Basic errors={errors} register={register} />
          <Button
            colorScheme="blue"
            isFullWidth
            mt="6"
            onClick={handleSubmit(onsubmit)}
          >
            Update Setting
          </Button>
        </form>
      </Box>
    </Flex>
  );
}

export default Setting;
