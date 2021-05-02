const { Heading } = require('@chakra-ui/react');

function FluidHeading(props) {
  const { children, ...rest } = props;
  return (
    <Heading
      fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '4xl' }}
      {...rest}
    >
      {children}
    </Heading>
  );
}

export default FluidHeading;
